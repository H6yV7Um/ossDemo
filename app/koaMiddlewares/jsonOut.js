export default function jsonOut(ctx, next) {
    ctx.body = JSON.stringify(ctx.jsonOut || {err: new Error('empty output')});
    ctx.type = 'application/json';
}
