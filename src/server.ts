import Koa from "koa";

const server = new Koa();

server.use(async ctx => (ctx.body = "Hi!"));

export default server;
