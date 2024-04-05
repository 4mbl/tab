import defaultLinks from '../../data/default_links.json';

export async function GET(): Promise<Response> {
  return new Response(JSON.stringify(defaultLinks), {
    headers: {
      'content-type': 'application/json',
    },
  });
}
