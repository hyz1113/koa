const Koa = require('koa');
const app = new Koa();

app.use((ctx: any) => {
    ctx.body = 'hi koa 333'
})

app.listen(3003);