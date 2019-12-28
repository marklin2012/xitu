const Koa = require('koa')
const app = new Koa()

const Router = require('koa-router')
const router = new Router()

const axios = require('axios')

// 统一处理出错
app.use((ctx, next) => {
  return next().catch(err => {
    let code = 500
    let msg = 'unkown error'
    if (err) {
      code = res.code
      msg = res.msg
    } else {
      console.error('err', err)
    }
    ctx.body = {
      code,
      msg
    }
  })
})

router.get('/golds', async ctx => {
  //category: "frontend"
  console.log('test')
  const para = {
    category: "frontend",
    order: "time",
    offset: 0,
    limit: 30
  }
  const res = await axios.post('https://extension-ms.juejin.im/resources/gold', para)
  console.log('res', res)
  if (res.status === 200) {
    ctx.body = res.data
  }
  throw Error('获取golds接口请求出错')
})


router.get('/github', async ctx => {
  const para = {
    category: "trending",
    period: "day",
    lang: "javascript",
    offset: 0,
    limit: 30
  }
  const res = await axios.post('https://extension-ms.juejin.im/resources/github', para)
  console.log('res', res)
  if (res.status === 200) {
    ctx.body = res.data
  }
  throw Error('获取github接口请求出错')
})

app.use(router.routes())

app.listen(4001, () => {
  console.log('server started at port 4001')
})