<template>
    <div class="roomContent">
        <header-top :isBanner="isBanner"></header-top>
        <div class="registerWrap">
            <div class="register">
                <form action="/webLogin/reginfo" method="post" name="registerForm">
                    <h1>注册</h1>
                    <input type="text" placeholder="请输入用户名" name="userNameReg" id="userNameReg" class="input-text" autocomplete="off" onchange="verifyForm(this);">
                    <input type="text" placeholder="请输入手机号" name="userPhoneReg" id="userPhoneReg" class="input-text" autocomplete="off" onchange="verifyForm(this);">
                    <input type="text" placeholder="请输入邮箱" name="userEmailReg" id="userEmailReg" class="input-text" autocomplete="off" onchange="verifyForm(this);">
                    <input type="password" placeholder="请输入密码" name="userPwdReg" id="userPwdReg" class="input-text" autocomplete="off" onchange="verifyForm(this);">
                    <input type="password" placeholder="请确认密码" name="user2PwdReg" id="user2PwdReg" class="input-text" autocomplete="off" onchange="verifyForm(this);">
                    <p class="input-text clear">
                        <input type="text" name="verificationCode" id="verificationCode" placeholder="验证码" autocomplete="off" class="input-verification-code">
                        <span class="verification-code" @click="changeImage();">
                            <img id="img" src="http://shenbo.artup.com/webLogin/authImage">
                        </span>
                        <em @click="changeImage();" class="changeimg"></em>
                    </p>
                    <a href="javascript:;" class="register-submit" id="submitBtn">提交</a>
                    <p class="go-login">已有账号？<a href="/login">去登录</a></p>
                </form>
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
            isBanner: false,
            isPage: false,
            totlePage: 12
        };
    },
    mounted() { this.totlePage <= 10 ? this.isPage = false : this.isPage = true; },
    computed: {},
    methods: {
        changeImage() {
            let img = document.getElementById("img");
            img.src = "http://shenbo.artup.com/webLogin/authImage?date=" + new Date();
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