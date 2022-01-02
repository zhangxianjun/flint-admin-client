const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://www.baidu.com",
      changeOrigin: true,
      pathRewrite(path) {
        return path.replace("/api", "");
      },
    })
  );
};
