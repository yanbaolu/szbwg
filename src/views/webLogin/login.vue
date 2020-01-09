<template>
    <div class="roomContent">
        <header-top :isBanner="isBanner"></header-top>
        <div class="loginWrap .loginWrap_">
            <div class="register login_go">
                <h1>登录</h1>
                <input type="text" placeholder="请输入用户名/手机号/邮箱" id="loginUserName" autocomplete="off" class="input-text" v-model="loginCredential">
                <input type="password" placeholder="请输入密码" id="loginUserPwd" autocomplete="off" class="input-text" v-model="userPass">
                <p class="go-login forget"><a href="/findPwd">忘记密码？</a></p>
                <a href="javascript:;" class="register-submit" @click="loginWeb();">提交</a>
                <p class="go-login">没有账号？<a href="/register">去注册</a></p>
                <p class="third"><span class="line"></span><strong>第三方登录</strong><span class="line"></span></p>
                <p class="third-icons"><a href="https://graph.qq.com/oauth2.0/show?which=Login&display=pc&client_id=101392492&redirect_uri=http://shenbo.artup.com/oauth/qqCallBack&response_type=code&state=e39c01fbb7df5ffedfa659052fea4694&scope=get_user_info,add_topic,add_one_blog,add_album,upload_pic,list_album,add_share,check_page_fans,add_t,add_pic_t,del_t,get_repost_list,get_info,get_other_info,get_fanslist,get_idollist,add_idol,del_ido,get_tenpay_addr" class="qq"></a><a href="/oauth/wxLogin" class="wx"></a></p>
            </div>
        </div>
        <footer-bottom></footer-bottom>
    </div>
</template>
<script>
import header from "../components/header";
import footer from "../components/footer";
import socialisitionNav from "../components/webPublication/webPublicationnav";
import monographcon from "../components/webPublication/monographcon"
import * as API from "api/demo";
import { mapGetters } from 'vuex'
export default {
    data() {
        return {
            isBanner: false,
            isPage: false,
            totlePage: 12,
            loginCredential:'',
            userPass:'',
        };
    },
    mounted() { 
      this.totlePage <= 10 ? this.isPage = false : this.isPage = true;
    },
    computed: {},
    methods: {
        loginWeb(){
            if(this.loginCredential=='' || this.userPass==''){
                alert('用户名、或密码为空!')
                return false;
            }else {
              let data ={
                  loginCredential:this.loginCredential,
                  userPass:this.userPass
              }
              API.post('user/login',data).then(res => {
                  //更改登录状态
                  this.$store.dispatch("comIslogo", true);
                  this.$store.dispatch("comuserId",res.data.userId);
                  this.$store.dispatch("comtoken",res.data.token);
                  //console.log(res.data,7897777)
                  //登录后跳回首页
                  this.getUserInfo(res.data.userId)
                  
              }).catch(err => {

              })
            }
        },
        getUserInfo(userId){
            let data ={
                userId:userId
            };
            API.get2('user/getUserInfo',data).then(res => {
                if (res.code == 0) {
                    //console.log(res,'用户信息')
                    this.$store.dispatch("comUserInfo",res.data);
                    this.$router.push({path: '/'}+new Date())
                }
            }).catch(err => {
                
            })
        },
        //第三方登录
        logoqq(){
            let data ={
                
            };
            API.get2('oauth/qqLogin',data).then(res => {
              console.log(11111111111)
                if (res.code == 0) {
                    
                }
            }).catch(err => {
                
            })
        }
    },
    components: {
        "header-top": header,
        "footer-bottom": footer,
        'web-nav': socialisitionNav,
        'web-monographcon': monographcon,
    }
};
</script>
<style scoped>
</style>