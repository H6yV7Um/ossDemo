export default async function list(ctx, params) {
    let res = '';
    const fileName = params.fileName;
    try {
        res = await ctx.ossStore.delete(fileName);
    } catch (error) {
        console.log('error:', err);
        throw error;
    }
    return res;
}
