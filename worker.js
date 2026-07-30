export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const pathname = url.pathname;

    let response = await env.ASSETS.fetch(new Request(url.origin + pathname, request));
    if (response.status !== 404) {
      const ct = response.headers.get('Content-Type') || '';
      if (ct.includes('text/html')) {
        return new Response(response.body, {
          status: response.status,
          headers: { 'Content-Type': 'text/html', 'Cache-Control': 'no-store, max-age=0' }
        });
      }
      return response;
    }

    let spaResponse = await env.ASSETS.fetch(new Request(url.origin + '/index.html', request));
    return new Response(spaResponse.body, {
      status: 200,
      headers: { 'Content-Type': 'text/html', 'Cache-Control': 'no-store, max-age=0' }
    });
  }
};
