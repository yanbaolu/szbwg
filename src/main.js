import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import mixins from './mixins';
import 'api/axios';
import 'base/common.css';
import 'base/base.less';
import 'base/element_theme.scss';
import remConfig from './assets/js/rem'
import $ from 'jquery';
import mousewhell from './assets/new-web/js/mousewhell'
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
import timelinejs from './assets/new-web/js/timelinejs'
window.Swiper = Swiper;
Vue.mixin(mixins);
Vue.config.productionTip = false;
//按需引入
import {
    Button,
    Carousel,
    CarouselItem
} from 'element-ui';
//注册组件
const components = [
    Button,
    Carousel,
    CarouselItem
];
for (let k of components) {
    Vue.use(k);
}
//设置title
router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title
    }
    next()
})
//挂载实例
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
