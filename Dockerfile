FROM hayd/alpine-deno:1.0.0

WORKDIR /app

USER deno

COPY . .
RUN deno cache webservice.ts

CMD ["run", "--allow-net", "--allow-read", "webservice.ts"]
