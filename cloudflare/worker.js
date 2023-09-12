const TRAGET_HOST='bing.hanglinkj.com' // 请将此域名改成你自己的，域名信息在设置》站点域名查看。

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
