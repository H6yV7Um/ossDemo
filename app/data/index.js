export default async (dataTag, ctx, params) => {
    if (dataTag === 'index') {
        throw new Error('cyclic dependency');
    }
    const dataModel = require('./' + dataTag);
    let data = null;
    let errorCode = 0;
    let errorMessage = '';
    let errorObj = '';
    try {
        data = await dataModel.default(ctx, params);
    } catch (error) {
        errorCode = error.errorCode || 1000;
        errorMessage = error.message || 'unknow error';
        errorObj = error;
    }
    if (process.env.NODE_ENV === 'development') {
        return {data, errorCode, errorMessage, errorObj};
    } else {
        return {data, errorCode, errorMessage};
    }
};
