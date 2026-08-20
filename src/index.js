export default {
  async fetch(request, env) {
    const response = await env.ASSETS.fetch(request);
    const contentType = response.headers.get('content-type') || '';
    if (!contentType.includes('text/html')) return response;

    return new HTMLRewriter()
      .on('head', {
        element(element) {
          element.append('<link rel="stylesheet" href="/mjq-integration.css">', { html: true });
        }
      })
      .on('body', {
        element(element) {
          element.append('<script src="/mjq-integration.js"></script>', { html: true });
        }
      })
      .transform(response);
  }
};
