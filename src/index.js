const HOME_TITLE = 'Find Local Tradespeople Near You | Local Trades';
const HOME_DESCRIPTION = 'Find local tradespeople near you with Local Trades. Describe your job once, compare up to 3 local quotes and use verified customer reviews to choose with confidence.';
const HOME_SOCIAL_DESCRIPTION = 'Describe your job once, compare up to 3 local quotes and use verified customer reviews before choosing who to hire.';
const HOME_CANONICAL = 'https://getlocaltrades.uk/';
const HOME_OG_IMAGE = 'https://getlocaltrades.uk/og/home.jpg';

const HOME_EXTRA_HEAD = `
<meta name="application-name" content="Local Trades">
<meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1">
<link rel="canonical" href="${HOME_CANONICAL}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Local Trades">
<meta property="og:title" content="${HOME_TITLE}">
<meta property="og:description" content="${HOME_SOCIAL_DESCRIPTION}">
<meta property="og:url" content="${HOME_CANONICAL}">
<meta property="og:locale" content="en_GB">
<meta property="og:image" content="${HOME_OG_IMAGE}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:type" content="image/jpeg">
<meta property="og:image:alt" content="Local Trades - Find local tradespeople near you">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${HOME_TITLE}">
<meta name="twitter:description" content="${HOME_SOCIAL_DESCRIPTION}">
<meta name="twitter:image" content="${HOME_OG_IMAGE}">
<meta name="twitter:image:alt" content="Local Trades - Find local tradespeople near you">
<script type="application/ld+json">{"@context":"https://schema.org","@graph":[{"@type":"Organization","@id":"https://getlocaltrades.uk/#organization","name":"Local Trades","url":"https://getlocaltrades.uk/","description":"UK homeowner referral website helping people describe a home job, compare local quote options and use verified customer reviews before deciding whether to hire.","logo":{"@type":"ImageObject","url":"https://getlocaltrades.uk/assets/logo.svg","width":512,"height":512}},{"@type":"WebSite","@id":"https://getlocaltrades.uk/#website","url":"https://getlocaltrades.uk/","name":"Local Trades","publisher":{"@id":"https://getlocaltrades.uk/#organization"},"inLanguage":"en-GB"}]}</script>`;

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // One canonical host and protocol, matching the SEO convention used on GetTradesmen.
    let shouldRedirect = false;
    if (url.protocol !== 'https:') {
      url.protocol = 'https:';
      shouldRedirect = true;
    }
    if (url.hostname === 'www.getlocaltrades.uk') {
      url.hostname = 'getlocaltrades.uk';
      shouldRedirect = true;
    }

    // Avoid duplicate homepage URLs.
    if (url.pathname === '/index.html') {
      url.pathname = '/';
      shouldRedirect = true;
    }

    // Future SEO pages use trailing-slash canonicals: /plumber/ and /plumber/birmingham/.
    if (
      (request.method === 'GET' || request.method === 'HEAD') &&
      url.pathname !== '/' &&
      !url.pathname.endsWith('/') &&
      !url.pathname.split('/').pop().includes('.')
    ) {
      url.pathname += '/';
      shouldRedirect = true;
    }

    if (shouldRedirect) {
      return Response.redirect(url.toString(), 301);
    }

    const response = await env.ASSETS.fetch(request);
    const contentType = response.headers.get('content-type') || '';
    if (!contentType.includes('text/html')) return response;

    const isHome = url.pathname === '/';
    const rewriter = new HTMLRewriter();

    if (isHome) {
      rewriter
        .on('title', {
          element(element) {
            element.setInnerContent(HOME_TITLE);
          }
        })
        .on('meta[name="description"]', {
          element(element) {
            element.setAttribute('content', HOME_DESCRIPTION);
          }
        })
        .on('link[rel="icon"]', {
          element(element) {
            element.setAttribute('href', '/assets/favicon.svg');
            element.setAttribute('type', 'image/svg+xml');
          }
        });
    }

    rewriter.on('head', {
      element(element) {
        if (isHome) {
          element.append(HOME_EXTRA_HEAD, { html: true });
        }
        element.append('<link rel="stylesheet" href="/mjq-integration.css">', { html: true });
      }
    });

    rewriter.on('body', {
      element(element) {
        element.append('<script src="/mjq-integration.js"></script>', { html: true });
      }
    });

    return rewriter.transform(response);
  }
};
