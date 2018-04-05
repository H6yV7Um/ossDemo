export default function ossStore(ctx, next) {
    const OSS = require('ali-oss').Wrapper;
    const store = new OSS({
        region: 'oss-cn-beijing',
        accessKeyId: 'LTAICKYGL4qM3vbk',
        accessKeySecret: 'hrFUud22ux8uk2mRpnIfglN1WHyLiz',
        bucket: 'zheng-imgupload'
    });
    ctx.ossStore = store;
    return next();
}
