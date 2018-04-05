
import koaRouter from 'koa-router';
import matchData from '../koaMiddlewares/matchData';
import jsonOut from '../koaMiddlewares/jsonOut';
import {apiErrorHandler} from '../koaMiddlewares/errorHandler';


const router = koaRouter({
    prefix: '/api'
});

router.use(apiErrorHandler);

router.all('/:dataTag', matchData, jsonOut);

export default router;

