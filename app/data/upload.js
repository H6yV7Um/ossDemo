const fs = require('fs');

export default async function upload(ctx, params) {
    const file = ctx.request.body.files.file;
    const object = await ctx.ossStore.put(file.name, fs.createReadStream(file.path));
    return {object};
}
