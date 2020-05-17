import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import Home from "./page.tsx";

const State = {
  hello: "world",
  from: "react",
  and: "deno"
}

const router = new Router();
router.get("/", (ctx) => {
  ctx.response.type = ".html"
  ctx.response.body = Home(State);
});

const app = new Application();
app
  .use(router.routes())
  .use(router.allowedMethods())
  .use((ctx)=> {
    ctx.response.status = 404;
    ctx.response.body = "Not found.";
  });

await app.listen(`127.0.0.1:${7000}`); 
