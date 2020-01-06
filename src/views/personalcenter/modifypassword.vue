<template>
  <div class="roomContent">
    <header-top :isBanner="isBanner"></header-top>
   <div class="registerWrap">
	<div class="register">
		<h1>修改密码</h1>
		<input type="password" name="oldPwd" id="oldPwd" placeholder="请输入旧密码" class="input-text">
		<input type="password" name="pwd" id="pwd" placeholder="请输入新密码" class="input-text">	
		<input type="password" name="newPwd" id="newPwd" placeholder="请确认新密码" class="input-text" onchange="valiPwd();">	
		
		<a href="javascript:;" class="register-submit" onclick="upPwd();">修改</a>
		
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
