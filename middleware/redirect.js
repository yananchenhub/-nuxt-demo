export default function (context) {
  context.userAgent = process.server
    ? context.req.headers['user-agent']
    : navigator.userAgent
    // debugger;
    //把原来pageC的路由转化成pageCNew
    const firstPath = context.route.fullPath.split('/')[1];
    if (
      ['pageC'].includes(firstPath)
    ) {
      const productUrl = context.route.fullPath.replace('pageC', 'pageCNew');
      context.redirect(301, productUrl);
      return;
    }
}