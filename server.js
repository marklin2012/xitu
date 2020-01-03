const express = require('express')
const next = require('next')
const proxy = require('express-http-proxy')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()


app.prepare().then(() => {
  const server = express()
  server.use('/resources', proxy('https://extension-ms.juejin.im', {
    // server.use('/resources', proxy('http://localhost:4001', {
    https: true,
    proxyReqPathResolver: (req) => {
      return '/resources' + req.url
    },

  }))

  server.get('*', async (req, res) => {
    await handle(req, res)
  })

  server.listen(3000, () => {
    console.log('server is running at http://localhost:3000')
  })
})
