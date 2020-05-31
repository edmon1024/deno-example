import { serve } from 'https://deno.land/std/http/server.ts'

const server = serve({ port: 3000 })

console.log("running on http://localhost:3000")

for await (const request of server){
  switch(request.url){
    case "/":
      request.respond({ body: "hola desde deno" })
      break
    case "/hello":
      request.respond({ body: "hello world" })
      break
    case "/html":
      const html = await Deno.readTextFile('./index.html')
      request.respond({ body: html })
      break
    case "/json":
      const data = JSON.stringify({data: "hola desde la api" })
      request.respond({ body: data })
      break
    default:
      request.respond({ status: 404 })
      break
  }
}
