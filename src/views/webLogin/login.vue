<template>
  <div class="roomContent">
    <header-top :isBanner="isBanner"></header-top>
    <div class="loginWrap .loginWrap_">
	<div class="register login_go">
		<h1>登录</h1>
		<input type="text" placeholder="请输入用户名/手机号/邮箱" id="loginUserName" autocomplete="off" class="input-text">
		
		<input type="password" placeholder="请输入密码" id="loginUserPwd" autocomplete="off" class="input-text">
		<p class="go-login forget"><a href="/webLogin/findPwd">忘记密码？</a></p>
		
		<a href="javascript:;" class="register-submit" onclick="loginWeb();">提交</a>
		<p class="go-login">没有账号？<a href="/webLogin/register">去注册</a></p>
		
		<p class="third"><span class="line"></span><strong>第三方登录</strong><span class="line"></span></p>
		<p class="third-icons"><a href="/oauth/qqLogin" class="qq"></a><a href="/oauth/wxLogin" class="wx"></a></p>
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
export default {
  data() {
    return {
      isBanner:false,
      isPage: false,
      totlePage: 12
    };
  },
  mounted() {this.totlePage<=10?this.isPage = false :this.isPage =true;},
  computed: {},
  methods: {},
  components: {
    "header-top": header,
    "footer-bottom": footer,
    'web-nav':socialisitionNav,
    'web-monographcon':monographcon,
  }
};
</script>
<style scoped>

</style>
