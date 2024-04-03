import defaultData from '../data/default_links.json';
import type { Group } from './Group';
import type { Link } from './Link';

type Item = Link | Group;

export async function getData(searchParams: URLSearchParams): Promise<Item[]> {
  if (searchParams.has('links')) {
    const urls = searchParams.get('links')!.split(';');
    return urls.map((url) => {
      const decoded = decodeURIComponent(url);
      return {
        url:
          decoded.startsWith('http') || decoded.startsWith('file://')
            ? decoded
            : `https://${decoded}`,
      };
    });
  }

  if (searchParams.has('src')) {
    const src = searchParams.get('src')?.split(';') || [];
    const urls = src
      .filter((url) => url.length > 0)
      .map((url) => decodeURIComponent(url));

    let data;
    if (urls.length === 0) {
      data = defaultData as Item[];
    } else {
      const responses = await Promise.all(
        urls.map((url) =>
          fetch(`https://${url}`, {
            method: 'GET',
            redirect: 'follow',
            headers: {
              'Cache-Control': 'no-cache',
              'Content-Type': 'application/json',
            },
          })
        )
      );

      const jsons = await Promise.all(
        responses.map((response) => response.json())
      );

      return jsons.flat() as Item[];
    }
  }

  return defaultData as Item[];
}
