export async function apiErrorHandler(ctx, next) {
    try {
        await next();
        return;
    } catch (err) {
        ctx.body = JSON.stringify({error: err.errorCode});
        ctx.type = 'application/json';
    }
}
