import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production';
const store = new Vuex.Store({
    strict: debug,
    state: {
        //语言默认中文0，英文1
        lang:0,
        imgurl:''
    },
    getters: {
        //全局获取中英文
        getlang: state => state.lang,
        getImgUrl:state=>state.imgurl
    },
    mutations: {
        //全局修改中英文
        tablang(state, data) {
            state.lang = data;
        },
    },
    actions: {
        commitlang(context,num){
            context.commit('tablang',num);
        }
    }
});

export default store;
