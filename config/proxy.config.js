/**
 * @file proxy config
 * @author zhengjiaqi01<zhengjiaqi01@baidu.com>
 */
const config = {
    '**/api/hotel/findhotelcity**': 'http://touch.qunar.com',
    // '/album': 'http://ac.xiangce.baidu.com',
    '/album': 'http://cq01-bj122.cq01.baidu.com:8903'
};

const proxyConfig = buildConfig(config);
function buildConfig(config) {
    const res = {};
    for (const key in config) {
        if (Object.prototype.hasOwnProperty.call(config, key)) {
            res[key] = {
                target: config[key],
                secure: false,
                changeOrigin: true
            };
        }
    }
    return res;
}

module.exports = proxyConfig;
