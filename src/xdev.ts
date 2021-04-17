/// <reference path="./deploy.lib.d.ts" />

addEventListener("fetch", async (event) => {
  console.log(event.request.headers.get("host"));
  await event.respondWith(new Response("Hello"));
});
