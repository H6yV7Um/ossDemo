export default async function list(ctx, params) {
    let res = '';
    try {
        res = await ctx.ossStore.list();
    } catch (error) {
        console.log('error:', err);
        throw error;
    }
    return res;
}
