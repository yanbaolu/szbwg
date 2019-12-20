function load(component) {
    return resolve => require([`views/${component}`], resolve);
}

const routes = [
    {
        path: '/',
        name: 'index',
        component: load('index/index'),
        meta: {
            title: '深圳博物馆'
        }
    },
    {
        path: '/exhibition',
        name: 'exhibition',
        component: load('exhibitionRoom/exhibition'),
        meta: {
            title: '展馆'
        }
    },
    {
        path: '/roomdetail',
        name: 'room',
        component: load('exhibitionRoom/roomdetail'),
        meta: {
            title: '展馆详情'
        }
    },
    {
        path: '/exhlist',
        name: 'exhlist',
        component: load('exhibition/exhlist'),
        meta: {
            title: '展馆详情'
        }
    },
    {
        path: '/review',
        name: 'review',
        component: load('exhibition/review'),
        meta: {
            title: '展馆详情'
        }
    },
    {
        path: '*',
        redirect: {
            path: '/'
        }
    }
];
export default routes;
