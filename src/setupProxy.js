import { createProxyMiddleware } from "http-proxy-middleware";

module.exports = function (app) {
    app.use(
        "/short2longurl/api.cgi",
        createProxyMiddleware({
            target: "http://app.tree-web.net",
            changeOrigin: true,
        })
    );
};