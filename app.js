const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const static = require('koa-static')
const { resolve } = require('path')


app.use(views(
    resolve(__dirname, './views'),
    {
        extension: 'ejs'
    }
))
app.use(static(
    resolve(__dirname, './public')
))
app.use(async (ctx,next) => {
	await ctx.render('index', {
        name: 'wangtaokai'
    })
})
app.listen(5105)