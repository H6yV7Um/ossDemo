
import dataEntry from '../data';
export default async function serverFetchData(dataTag, ctx, params) {
    const res = await dataEntry(dataTag, ctx, params);
    return res;
}
