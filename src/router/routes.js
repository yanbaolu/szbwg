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
        
        path: '/login',
        name: 'login',
        component: load('webLogin/login'),
        meta: {
            title: '登陆'
        }
    },
    {
        
        path: '/register',
        name: 'register',
        component: load('webLogin/register'),
        meta: {
            title: '注册'
        }
    },
    {
        
        path: '/collectExhibit',
        name: 'collectExhibit',
        component: load('personalcenter/collectExhibit'),
        meta: {
            title: '我的收藏'
        }
    },
    {
        
        path: '/modifypassword',
        name: 'modifypassword',
        component: load('personalcenter/modifypassword'),
        meta: {
            title: '修改密码'
        }
    },
    {
        
        path: '/reservation',
        name: 'reservation',
        component: load('personalcenter/reservation'),
        meta: {
            title: '我的预约'
        }
    }, 
     {
        
        path: '/map',
        name: 'map',
        component: load('index/map'),
        meta: {
            title: '网站地图'
        }
    },
    {
       path: '/bqsm',
        name: 'bqsm',
        component: load('index/bqsm'),
        meta: {
            title: '版权声明'
        }
    },
    {
        
        path: '/yqlj',
        name: 'yqlj',
        component: load('index/yqlj'),
        meta: {
            title: '友情链接'
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
        path: '/exhibitiondetail',
        name: 'exhibitiondetail',
        component: load('exhibition/detail'),
        meta: {
            title: '展览'
        }
    },{
        path: '/exhibitionMore',
        name: 'exhibitionMore',
        component: load('exhibition/exhibitionMore'),
        meta: {
            title: '展览照片'
        }
    },{
        path: '/detailByView',
        name: 'detailByView',
        component: load('exhibition/detailByView'),
        meta: {
            title: '展览照片'
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
        path: '/topicdetialByView',
        name: 'topicdetialByView',
        component: load('exhibition/topicdetialByView'),
        meta: {
            title: '专题展览照片底层'
        }
    },
    {
        path:'/topicExMore',
        name:'topicExMore',
        component:load('exhibition/topicExMore'),
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
    }, {
        path: '/collectiondetial',
        name: 'collectiondetial',
        component: load('collection/collectiondetial'),
        meta: {
            title: '典藏底层页面'
        }
    },
    {
        path:'/intangible',
        name:'intangible',
        component:load('intangible/intangible'),
        meta:{
            title:'非遗'
        }
    },
    {
        path:'/intangibleNews',
        name:'intangibleNews',
        component:load('intangible/intangibleNews'),
        meta:{
            title:'新闻资讯'
        }
    },
    {
        path:'/intangibleToice',
        name:'intangibleToice',
        component:load('intangible/intangibleToice'),
        meta:{
            title:'通知公告'
        }
    },{
        path:'/newsDetail',
        name:'newsDetail',
        component:load('intangible/newsDetail'),
        meta:{
            title:'新闻底层'
        }
    },{
        path:'/projectDetail',
        name:'projectDetail',
        component:load('intangible/projectDetail'),
        meta:{
            title:'非遗项目底层'
        }
    },
    {
        path:'/intangibleProject',
        name:'intangibleProject',
        component:load('intangible/intangibleProject'),
        meta:{
            title:'非遗代表性项目'
        }
    },
    {
        path:'/intangibleInheritance',
        name:'intangibleInheritance',
        component:load('intangible/intangibleInheritance'),
        meta:{
            title:'传承人'
        }
    },
    {
        path:'/intangibleLaws',
        name:'intangibleLaws',
        component:load('intangible/intangibleLaws'),
        meta:{
            title:'非遗法规'
        }
    },
    {
        path:'/intangibleLRList',
        name:'intangibleLRList',
        component:load('intangible/intangibleLRList'),
        meta:{
            title:'非遗法规列表'
        }
    },
    {
        path:'/intangibleRegulat',
        name:'intangibleRegulat',
        component:load('intangible/intangibleRegulat'),
        meta:{
            title:'非遗法规列表'
        }
    },
    {
        path:'/lawsregulatDetail',
        name:'lawsregulatDetail',
        component:load('intangible/lawsregulatDetail'),
        meta:{
            title:'非遗法规指南资讯详情'
        }
    },
    {
        path:'/videoAll',
        name:'videoAll',
        component:load('intangible/videoAll'),
        meta:{
            title:'视频库'
        }
    },{
        path:'/pictureAll',
        name:'pictureAll',
        component:load('intangible/pictureAll'),
        meta:{
            title:'图片库'
        }
    },{
        path:'/pictureNewDetail',
        name:'pictureNewDetail',
        component:load('intangible/pictureNewDetail'),
        meta:{
            title:'图片库底层'
        }
    },
    {
        path:'/activity',
        name:'activity',
        component:load('activity/activity'),
        meta:{
            title:'活动'
        }
    },
    {
        path:'/activeDetail',
        name:'activeDetail',
        component:load('activity/activeDetail'),
        meta:{
            title:'活动详情'
        }
    },
    {
        path:'/socialisation',
        name:'socialisation',
        component:load('socialisation/socialisation'),
        meta:{
            title:'社教'
        }
    },
    {
        path:'/ammouncer',
        name:'ammouncer',
        component:load('socialisation/ammouncer'),
        meta:{
            title:'小小讲解员'
        }
    },
    {
        path:'/volunteers',
        name:'volunteers',
        component:load('socialisation/volunteers'),
        meta:{
            title:'志愿者'
        }
    },
    {
        path:'/reservation',
        name:'reservation',
        component:load('socialisation/reservation'),
        meta:{
            title:'活动预约讲座'
        }
    },
    {
        path:'/volunteerDetail',
        name:'volunteerDetail',
        component:load('socialisation/volunteerDetail'),
        meta:{
            title:'讲解员详情'
        }
    }, 
    {
        path:'/activelist',
        name:'activelist',
        component:load('socialisation/activelist'),
        meta:{
            title:'详情列表'
        }
    },
     {
        path:'/team',
        name:'team',
        component:load('socialisation/team'),
        meta:{
            title:'志愿者团队'
        }
    },
    {
        path:'/webPublication',
        name:'webPublication',
        component:load('webPublication/webPublication'),
        meta:{
            title:'学术'
        }
    },
    {
        path:'/academicDetail',
        name:'academicDetail',
        component:load('webPublication/academicDetail'),
        meta:{
            title:'学术详情'
        }
    },
    {
        path:'/monograph',
        name:'monograph',
        component:load('webPublication/monograph'),
        meta:{
            title:'专著'
        }
    },
    {
        path:'/monographdetail',
        name:'monographdetail',
        component:load('webPublication/monographdetail'),
        meta:{
            title:'专著详情'
        }
    },{
        path:'/paper',
        name:'paper',
        component:load('webPublication/paper'),
        meta:{
            title:'专著详情'
        }
    },
    { path:'/library',
    name:'library',
    component:load('webPublication/library'),
    meta:{
        title:'馆刊'
    }
   },
   {
        path:'/motal',
        name:'motal',
        component:load('webPublication/motal'),
        meta:{
            title:'深圳前世今生'
        }
   },
   {
            path:'/cultural',
            name:'cultural',
            component:load('cultural/cultural'),
            meta:{
                title:'设备'
            }
    },
    {
        path:'/equipmentdetial',
        name:'equipmentdetial',
        component:load('cultural/equipmentdetial'),
        meta:{
            title:'设备底层'
        } 
    },
    {
         
        path:'/qualifications',
        name:'qualifications',
        component:load('cultural/qualifications'),
        meta:{
            title:'资质'
        } 
    },
    {
         
        path:'/case',
        name:'case',
        component:load('cultural/case'),
        meta:{
            title:'案例'
        } 
    },
    {
        path:'/casedetial',
        name:'casedetial',
        component:load('cultural/casedetial'),
        meta:{
            title:'案例底层'
        } 
    },
    {
       path:'/project',
        name:'project',
        component:load('cultural/project'),
        meta:{
            title:'项目'
        } 
    },
    { 
        path:'/publicationshop',
        name:'publicationshop',
        component:load('publicaiton/publicationshop'),
        meta:{
            title:'文创创意商品'
        } 
    },
    {
        path:'/shopdetial',
        name:'shopdetial',
        component:load('publicaiton/shopdetial'),
        meta:{
            title:'文创创意商品底层'
        } 
    },
    {
        
        path:'/edemeanor',
        name:'edemeanor',
        component:load('publicaiton/edemeanor'),
        meta:{
            title:'文创创意商品底层'
        } 
    },
    {   path:'/honor',
        name:'honor',
        component:load('publicaiton/honor'),
        meta:{
            title:'荣誉奖品'
        } 
    },
    {
        path:'/meeting',
        name:'meeting',
        component:load('publicaiton/meeting'),
        meta:{
            title:'会议培训'
        } 
    },
    {
        path:'/aboutus',
        name:'aboutus',
        component:load('aboutus/aboutus'),
        meta:{
            title:'关于深博'
        } 
    },
    {
        path:'/aboutpdetial',
        name:'aboutpdetial',
        component:load('aboutus/aboutpdetial'),
        meta:{
            title:'关于深博'
        } 
    },
    {
       path:'/management',
        name:'management',
        component:load('aboutus/management'),
        meta:{
            title:'管理和建设'
        } 
    },
    {
        path:'/mhonor',
        name:'mhonor',
        component:load('aboutus/mhonor'),
        meta:{
            title:'博物馆荣誉'
        } 
    },
    { path:'/listdonors',
        name:'listdonors',
        component:load('aboutus/listdonors'),
        meta:{
            title:'捐赠者名录'
        } 
    },
    {
        path:'/visiting',
        name:'visiting',
        component:load('aboutus/visiting'),
        meta:{
            title:'参观服务'
        } 
    },
    {
        path:'/contact',
        name:'contact',
        component:load('aboutus/contact'),
        meta:{
            title:'联系我们'
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
