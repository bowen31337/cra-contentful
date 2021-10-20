const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/content',
    createProxyMiddleware({
      target: 'https://graphql.contentful.com',
      changeOrigin: true,
      secure: false,
      pathRewrite: {
        '^/content/v1/spaces/vyvd54sdd5jm': '/content', // rewrite path
      },
      router: {
        // when request.headers.host == 'localhost:3000',
        // override target 'http://www.example.org' to 'http://localhost:8000'
        'localhost:3000': 'http://localhost:8000',
      },
    })
  );
};