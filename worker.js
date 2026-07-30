export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const pathname = url.pathname;

    let response = await env.ASSETS.fetch(new Request(url.origin + pathname, request));
    if (response.status !== 404) return response;

    let spaResponse = await env.ASSETS.fetch(new Request(url.origin + '/index.html', request));
    return new Response(spaResponse.body, {
      status: 200,
      headers: { 'Content-Type': 'text/html', 'Cache-Control': 'no-store, max-age=0' }
    });
  }
};
