const TRAGET_HOST='bing.hanglinkj.com'
export default {
  async fetch(request) {
    const uri = new URL(request.url);
    if (uri.protocol === 'http:') {
      uri.protocol = 'https:';
      return new Response('', {
        status: 301,
        headers: {
          location: uri.toString(),
        },
      })
    }
    uri.host = TRAGET_HOST
    return fetch(new Request(uri.toString(), request));
  },
};
