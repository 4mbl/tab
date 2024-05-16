import type { Group } from '../pages/Group';
import type { Link } from '../pages/Link';
import type { Metadata } from '../pages/Metadata';

type Item = Link | Group | Metadata;

export async function getData(astroUrl: URL): Promise<Item[]> {
  const searchParams = astroUrl.searchParams;
  if (searchParams.has('links')) {
    const input = searchParams.get('links')!.split(/[,;]/) || [];
    const trimmedInput = input.map((url) => url.trim());
    const filteredUrls = trimmedInput.filter((url) => url.length > 0);
    const decodedUrls = filteredUrls.map((url) => decodeURIComponent(url));
    return decodedUrls.map((url) => {
      return {
        url:
          url.startsWith('http') || url.startsWith('file://')
            ? url
            : `https://${url}`,
      };
    });
  }

  if (searchParams.has('src')) {
    const src = searchParams.get('src')?.split(/[,;]/) || [];
    const urls = src
      .filter((url) => url.length > 0)
      .map((url) => decodeURIComponent(url));

    const responses = await Promise.all(
      urls.map((url) =>
        fetch(`https://${url}`, {
          method: 'GET',
          redirect: 'follow',
          headers: {
            'Cache-Control': 'no-cache',
            'Content-Type': 'application/json',
          },
        }).then((response) => response.json())
      )
    );

    return responses.flat() as Item[];
  }

  return (await fetch(`${astroUrl.origin}/-/default-links`).then((response) =>
    response.json()
  )) as Item[];
}
