import {devMiddleware, hotMiddleware} from 'koa-webpack-middleware';
const config = require('../../config/dev-server.config');
if (!process.env.NODE_ENV) {
    process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV);
}
const glob = require('glob');
const opn = require('opn');
const path = require('path');
const express = require('express');
const webpack = require('webpack');
const c2k = require('koa2-connect');
const proxyMiddleware = require('http-proxy-middleware');
const webpackConfig = process.env.NODE_ENV === 'development'
    ? require('../../build/webpack.dev.config')
    : require('../../build/webpack.prod.config');

// default port where dev server listens for incoming traffic
const port = process.env.PORT || config.dev.port;
// automatically open browser, if not set will be false
const autoOpenBrowser = !!config.dev.autoOpenBrowser;
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
const proxyTable = config.dev.proxyTable;
const compiler = webpack(webpackConfig);

const koaDevMiddleware = devMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    quiet: true
});

const koaHotMiddleware = hotMiddleware(compiler, {
    log: () => {},
    heartbeat: 5000
});
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
    compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
        hotMiddleware.publish({action: 'reload'});
        cb();
    });
});

function getEntry(globPath, pathDir) {
    const files = glob.sync(globPath);
    const entries = [];
    for (let i = 0; i < files.length; i++) {
        let path = files[i];
        path = path.replace(new RegExp('^' + pathDir), '');
        entries.push(path);
    }
    return entries;
}


export function devServer(app) {
    // proxy api requests
    Object.keys(proxyTable).forEach(function (context) {
        let options = proxyTable[context];
        if (typeof options === 'string') {
            options = {target: options};
        }
        app.use(c2k(proxyMiddleware(options.filter || context, options)));
    });

    // handle fallback for HTML5 history API
    // app.use(require('koa2-history-api-fallback')());

    // serve webpack bundle output
    app.use(koaDevMiddleware);

    // enable hot-reload and state-preserving
    // compilation error display
    app.use(koaHotMiddleware);

    const uri = config.dev.autoOpenUri;

    console.log('> Starting dev server...');
    koaDevMiddleware.waitUntilValid(() => {
        console.log('> Listening at ' + uri + '\n');
        // when env is testing, don't need open it
        if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
            opn(uri);
        }
    });

}
