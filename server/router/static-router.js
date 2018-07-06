const Router = require('koa-router')
const send = require('koa-send')

const router = new Router({prefix: '/client-dist'})

router.get('/*', async ctx => {
  await send(ctx, ctx.path)
})

module.exports = router
