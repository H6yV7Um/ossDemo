import serverFetchData from '../lib/serverFetchData';

export default async function matchData(ctx, next) {
    ctx.jsonOut = await serverFetchData(ctx.params.dataTag, ctx, ctx.query);
    next();
}
