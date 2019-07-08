import Koa from "koa";

const server = new Koa();

server.use(async ctx => (ctx.body = "Hi!"));

// Having trouble exporting the server object into cjs for production build.
// Still not 100% sure what the issue was.
// Workaround is to export the callback instead, which can be called from http, https, http2 native node modules.
export default server.callback();
