import Koa from 'koa';
import initRouter from './koaRouters/';
import initCtx from './koaMiddlewares/initCtx';
const koaBody = require('koa-body');
const serve = require('koa-static');
const path = require('path');


const app = new Koa();
app.name = 'ossKoaServer';

app.use(koaBody({multipart: true}));


if (process.env.NODE_ENV === 'development') {
    const {devServer} = require('./lib/devServer');
    devServer(app);
}

app.use(serve(path.join(__dirname, '../dist/webroot')));

// init
app.use(initCtx);

initRouter(app);

app.listen(8088);
console.log('[demo] static-server is starting at port 8088');


