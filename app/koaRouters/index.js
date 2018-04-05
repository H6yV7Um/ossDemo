import api from './api';
export default function initRouter(app) {
    app.use(api.routes())
        .use(api.allowedMethods());
    return app;
}
