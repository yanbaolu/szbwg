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
            title: '展览'
        }
    },
    {
        path: '/topicexhibition',
        name: 'topicexhibition',
        component: load('exhibition/topicexhibition'),
        meta: {
            title: '专题展览'
        }
    },
    {
        path: '/vexhibition',
        name: 'vexhibition',
        component: load('exhibition/vexhibitionlist'),
        meta: {
            title: '虚拟展厅'
        }
    }, {
        path: '/collection',
        name: 'collection',
        component: load('collection/collection'),
        meta: {
            title: '典藏-深圳博物馆藏品总目'
        }
    }, {
        path: '/collectionList',
        name: 'collectionList',
        component: load('collection/collectionList'),
        meta: {
            title: '典藏-改革开放'
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
