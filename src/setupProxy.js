const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/content',
    createProxyMiddleware({
      target: 'https://graphql.contentful.com',
      changeOrigin: true,
      secure: false,
    })
  );
};