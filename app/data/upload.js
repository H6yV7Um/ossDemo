const fs = require('fs');

export default async function upload(ctx, params) {
    console.log('ctx.request.body:', ctx.request.body);
    const file = ctx.request.body.files.file;
    const object = await ctx.ossStore.put(file.name, fs.createReadStream(file.path));
    console.log(object);
    return {object};
}
