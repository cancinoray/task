const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const serve = require('koa-static');
const path = require('path');
const fs = require('fs');

const app = new Koa();
const router = new Router();
const port = 3000;

let count = 0;

app.use(bodyParser());
app.use(serve(path.join(__dirname, 'public')));

router.get('/count', (ctx) => {
    ctx.body = { count };
});

router.post('/increment', (ctx) => {
    const { value } = ctx.request.body;
    if (typeof value !== 'number') {
        ctx.status = 400;
        ctx.body = { error: 'Invalid value. It must be a number.' };
        return;
    }
    count += value;
    ctx.body = { count };
});

router.get('/', (ctx) => {
    ctx.type = 'html';
    ctx.body = fs.createReadStream(path.join(__dirname, 'public', 'index.html'));
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
