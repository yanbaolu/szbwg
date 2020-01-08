import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production';
const store = new Vuex.Store({
    strict: debug,
    state: {
        //语言默认中文0，英文1
        lang:0,
        imgurl:'',
        isLogoin:localStorage.getItem('isLogoin'),
        UserInfo:localStorage.getItem('UserInfo'),
        userId:localStorage.getItem('userId'),
        token:localStorage.getItem('token')
    },
    getters: {
        //全局获取中英文
        getlang:state => state.lang,
        //图片路径
        getImgUrl:state=>state.imgurl,
        //登录标示
        isLogo:state=>state.isLogoin,
        //用户信息
        UserInfo:state=>state.UserInfo,
        //用户id
        userId:state=>state.userId,
        //token
        token:state=>state.token
    },
    mutations: {
        //全局修改中英文
        tablang(state, data) {
            state.lang = data;
        },
        tablogo(state, data){
            localStorage.setItem("isLogoin",data);
            state.isLogoin = data;
        },
        tabUserInfo(state,data){
            localStorage.setItem("UserInfo",JSON.stringify(data));
            state.UserInfo = data;
        },
        tabuserId(state,data){
            localStorage.setItem("userId",data);
            state.userId = data;
        },
        tabtoken(state,data){
            localStorage.setItem("token",data);
            state.token = data;
        }
    },
    actions: {
        commitlang(context,num){
            context.commit('tablang',num);
        },
        comIslogo(context,flag){
            context.commit('tablogo',flag);
        },
        comUserInfo(context,user){
            context.commit('tabUserInfo',user);
        },
        comuserId(context,uid){
            context.commit('tabuserId',uid);    
        },
        comtoken(context,token){
            context.commit('tabtoken',token);
        }
    }
});

export default store;
