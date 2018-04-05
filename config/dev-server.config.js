/**
 * @file dev server config
 * @author zhengjiaqi01<zhengjiaqi01@baidu.com>
 */
// see http://vuejs-templates.github.io/webpack for documentation.
const proxyConfig = require('./proxy.config');
// npm run dev --host=xxx --port=8888
const env = process.env;
const host = env.npm_config_host || '127.0.0.1';
const port = env.npm_config_port || '8088';
module.exports = {
    dev: {
        env: {
            NODE_ENV: '"development"'
        },
        port: port,
        autoOpenBrowser: false,
        autoOpenUri: 'http://' + host + ':' + port + '/oss',
        // autoOpenUri : 'http://www.scorewall.zhuti.xiaomi.com/themeActivity/views/scorewall/',
        proxyTable: proxyConfig,
        assetsSubDirectory: 'static',
        assetsPublicPath: '/'

    }
};
