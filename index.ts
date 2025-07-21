const server = Bun.serve({
  port: parseInt(process.env.PORT ?? "3000"),
  routes: {
    "/webhook": {
      POST: async (request) => {
        const event = request.headers.get("x-github-event");
        console.log(event);

        const data: any = await request.json();
        console.log(data);

        return new Response("Accepted", { status: 202 });
      },
    },
  },
});

console.log(`Listening at ${server.url}...`);
