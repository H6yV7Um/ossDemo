import compose from 'koa-compose';
import ossStore from './ossStore';
export default compose([ossStore]);
