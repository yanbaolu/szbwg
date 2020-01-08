<template>
    <div class="roomContent">
        <header-top :isBanner="isBanner"></header-top>
        <div class="registerWrap">
            <div class="register">
                <h1>注册</h1>
                <input type="text" placeholder="请输入用户名" name="userNameReg" id="userNameReg" class="input-text" autocomplete="off" v-model="userName">
                <input type="text" placeholder="请输入手机号" name="userPhoneReg" id="userPhoneReg" class="input-text" autocomplete="off" v-model="phone">
                <!-- <input type="text" placeholder="请输入邮箱" name="userEmailReg" id="userEmailReg" class="input-text" autocomplete="off"> -->
                <input type="password" placeholder="请输入密码" name="userPwdReg" id="userPwdReg" class="input-text" autocomplete="off" v-model="userPass">
                <p class="input-text clear">
                    <input type="text" name="verificationCode" id="verificationCode" placeholder="验证码" autocomplete="off" class="input-verification-code" v-model="smsCode">
                    <!-- <span class="verification-code" @click="changeImage();">
                            <img id="img" src="http://shenbo.artup.com/webLogin/authImage">
                        </span>
                        <em @click="changeImage();" class="changeimg"></em> -->
                    <span style="width:138px;cursor:pointer;display:inline-block;" v-show="getP" id="smsCode">{{massage}}</span>
                    <span>{{count}}</span>
                </p>
                <a href="javascript:;" class="register-submit" id="submitBtn" @click="submit">提交</a>
                <p class="go-login">已有账号？<a href="/login">去登录</a></p>
                <div id="vcode" class="popupCode" style="margin:0.5px;"></div>
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
            totlePage: 12,
            getP: true,
            count: '11111',
            userName: '',
            userPass: '',
            smsCode: '',
            phone: '',
            timer: null,
            show: true,
            codeId:'',
            massage:'获取验证码'
        };
    },
    mounted() {
        const that=this;
        this.totlePage <= 10 ? this.isPage = false : this.isPage = true;
        let server = "http://www.szbwg-captcha.ts.artron.net";
        let o = new VerficationCode(server + "/start", server + "/check", "280*210", 40);
        // 为事件注册回调函数
        o.getCodeCallback = function(err, result) {
                let resultJson=JSON.parse(result)
                //console.log(resultJson.verify_id,111111555555555)
                if(resultJson.state==0){
                     that.codeId=resultJson.verify_id;
                }
            //console.log('outer getCodeCallback', result, 123456);
        };
        o.checkCodeCallback = function(err, result) {
            let resultJ=JSON.parse(result)
            if(resultJ.state==0){
                 that.getP=false;
                 that.getCode();
                 that.getDod();
                 //console.log(that.getP)
                 //console.log('outer checkCodeCallback',result,111111);
            }
        };
        let btn = document.getElementById("smsCode");
        btn.addEventListener("click", function(e) {
            o.init(true);
        });
    },
    computed: {},
    methods: {
        changeImage() {
            let img = document.getElementById("img");
            img.src = "http://shenbo.artup.com/webLogin/authImage?date=" + new Date();
        },
        submit() {
            if (this.checkUser(this.userName) && this.checkPhone(this.phone) && this.checkPwd(this.userPass) && this.checkCode(this.smsCode)) {
                let data = {
                    userName: this.userName,
                    userPass: this.userPass,
                    smsCode:this.smsCode,
                    phone: this.phone
                }
                API.post('user/register', data).then(res => {
                    alert('注册成功')
                }).catch(err => {

                })
            }
        },
        //用户名交验
        checkUser(user) {
            //console.log(11111)
            var reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/
            var re = new RegExp(reg)
            if (re.test(user)) {
                return true;
            } else {
                alert('用户名必须为数字字母组合,长度6-16位！')
                return false;
            }
        },
        //手机号验证
        checkPhone(phone) {
            //console.log(11111)
            var reg = /^[1][3,4,5,7,8][0-9]{9}$/;
            var re = new RegExp(reg)
            if (re.test(phone)) {
                return true;
            } else {
                alert('手机号不符合验证规则')
                return false;
            }
        },
        checkPwd(pwd) {
            //console.log(11111)
            var reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,}$/;
            var re = new RegExp(reg)
            if (re.test(pwd)) {
                return true;
            } else {
                alert('密码长度要大于6位，由数字和字母组成')
                return false;
            }
        },
        //验证码
        checkCode(code) {
            //console.log(11111)
            var reg = /\S/;
            var re = new RegExp(reg)
            if (re.test(code)) {
                return true;
            } else {
                alert('验证码不能为空')
                return false;
            }
        },
        //验证码倒计时
        getCode() {
            const TIME_COUNT = 10;
            if (!this.timer) {
                this.count = TIME_COUNT;
                this.show = false;
                this.timer = setInterval(() => {
                    if (this.count > 0 && this.count <= TIME_COUNT) {
                        this.count--;
                    } else {
                        this.show = true;
                        clearInterval(this.timer);
                        this.timer = null;
                        this.massage="重新发送"
                        console.log(this.massage,'重新发送')
                        this.getP=true;
                    }
                }, 1000)
            }
        },
        getDod(){
            let data =new URLSearchParams;
            data.append('smsCodeType','register');
            data.append('mobile',this.phone);
            data.append('codeId',this.codeId)
            console.log(data,4444444444444444)
            API.post2('user/sendSmsCode', data).then(res => {
                //console.log(res,7897897)
                //alert('发送成功')
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
<style>
@charset "utf-8";

/*弹出式样式定义*/
.popupCode #container_wrap_modal {
    width: 320px;
    height: 380px;
    background: #fff;
    overflow: hidden;
    position: fixed !important;
    top: 50% !important;
    left: 50% !important;
    padding: 0 !important;
    margin-top: -190px;
    margin-left: -160px;
}

.popupCode #container_head {
    overflow: hidden;
    padding: 15px 20px;
    border-bottom: 1px solid #d4d4d4;
}

.popupCode #container_head .closeBtn {
    float: right;
    width: 20px;
    height: 20px;
    overflow: hidden;
    background: url(../../assets/img/captcha_close.png) 50% 50% no-repeat;
    cursor: pointer;
}

.popupCode #container_head .refreshBtn {
    float: left;
    width: 20px;
    height: 20px;
    overflow: hidden;
    cursor: pointer;
}

.popupCode #container_head .refresh_bg {
    height: 20px;
    width: 20px;
    display: block;
    background: url(../../assets/img/captcha_refresh.png) 50% 50% no-repeat;
}

.popupCode #container_head .title {
    line-height: 20px;
    font-size: 16px;
    color: #000;
    text-align: center;
    margin: 0 20px;
}

.popupCode #container_wrap_modal .container_box {
    margin: 20px 20px 0;
    background: #e7e7e7
}

.popupCode #drag {
    position: relative;
    height: 40px;
    line-height: 40px;
    text-align: center;
    margin: 20px 20px 0;
    background: #cfe6ce;
    font-size: 14px;
}

.popupCode #drag .handler {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 66px;
    height: 40px;
    box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.3), -2px -2px 15px rgba(0, 0, 0, 0.3);
    background: #fff url(../../assets/img/captcha_drag.png) 50% 50% no-repeat;
    overflow: hidden;
    z-index: 10;
}

.popupCode #drag .drag_bg {
    background-color: #cfe6ce;
    height: 40px;
    width: 0px;
}

.popupCode #drag .drag_placeholder {
    height: 40px;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    overflow: hidden;
    text-align: center;
    color: #0f820c;
}

.popupCode #drag .drag_text {
    font-size: 14px;
    color: #0f820c;
    position: absolute;
    top: 0px;
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
    -o-user-select: none;
    -ms-user-select: none;
}

.popupCode #drag .drag_text_err {
    background: none;
    font-size: 14px;
    color: #c00;
    top: 100%;
}

.popupCode #drag .drag_text_ok {
    z-index: 1000;
    background: rgb(0, 0, 0);
    background: rgba(0, 0, 0, .7);
    font-size: 14px;
    color: #fff;
    top: -50px;
    text-align: left;
    height: 30px;
    line-height: 30px;
}

.popupCode #drag .drag_text_ok .right_icon {
    display: inline-block;
    background: url(../../assets/img/captcha_right.png) 50% 50% no-repeat;
    width: 22px;
    height: 22px;
    margin: 0 10px;
    vertical-align: -20%;
}

.popupCode .cut_bg {
    float: left;
    margin: 0 !important;
    border: 0px;
    padding: 0 !important;
}

.popupCode .xy_img_bord {
    -webkit-box-shadow: 0 0 15px #0CC;
    -moz-box-shadow: 0 0 15px #0CC;
    box-shadow: 0 0 15px #0CC;
    top: 32px;
    left: 0px;
    display: none;
    border: 1px solid rgb(255, 255, 255);
}

.popupCode #xy_img {
    z-index: 999;
    width: 40px;
    height: 40px;
    position: relative;
}

.popupCode .vcode-hints {
    position: absolute;
    z-index: 0;
    text-align: center;
    color: #999999;
    font-size: 15px;
}

/*2px 2px 15px rgba(0,0,0,0.3), -2px -2px 15px rgba(0,0,0,0.3)*/
/*嵌入式样式定义*/

.embedCode #container_wrap_modal {
    width: 320px;
    background: #fff;
    overflow: hidden;
}

.embedCode .refreshBtn {
    float: left;
    width: 20px;
    height: 20px;
    overflow: hidden;
    right: 10px;
    left: auto !important;
}

.embedCode .refresh_bg {
    height: 20px;
    width: 20px;
    display: block;
    background: url(../../assets/img/captcha_refresh.png) 50% 50% no-repeat;
}

.embedCode #container_head .title {
    line-height: 20px;
    font-size: 16px;
    color: #000;
    text-align: center;
    margin: 0 20px;
}

.embedCode #container_wrap_modal .container_box {
    margin: 20px 20px 0;
    background: #e7e7e7
}

.embedCode #drag {
    position: relative;
    height: 40px;
    line-height: 40px;
    text-align: center;
    margin: 20px 20px 0;
    background: #cfe6ce;
    font-size: 14px;
}

.embedCode #drag .handler {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 66px;
    height: 40px;
    box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.3), -2px -2px 15px rgba(0, 0, 0, 0.3);
    background: #fff url(../../assets/img/captcha_drag.png) 50% 50% no-repeat;
    overflow: hidden;
    z-index: 10;
}

.embedCode #drag .drag_bg {
    background-color: #cfe6ce;
    height: 40px;
    width: 0px;
}

.embedCode #drag .drag_placeholder {
    height: 40px;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    overflow: hidden;
    text-align: center;
    color: #0f820c;
}

.embedCode #drag .drag_text {
    font-size: 14px;
    color: #0f820c;
    position: absolute;
    top: 0px;
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
    -o-user-select: none;
    -ms-user-select: none;
}

.embedCode #drag .drag_text_err {
    color: #c00;
    font-size: 14px;
    color: #fff;
    top: -30px;
    text-align: left;
    height: 30px;
    line-height: 30px;
}

.embedCode #drag .drag_text_ok {
    background: rgb(0, 0, 0);
    background: rgba(0, 0, 0, .7);
    font-size: 14px;
    color: #fff;
    top: -30px;
    text-align: left;
    height: 30px;
    line-height: 30px;
}

.embedCode #drag .drag_text_ok .right_icon {
    display: inline-block;
    background: url(../../assets/img/captcha_right.png) 50% 50% no-repeat;
    width: 22px;
    height: 22px;
    margin: 0 10px;
    vertical-align: -20%;
}

.embedCode .cut_bg {
    float: left;
    margin: 0 !important;
    border: 0px;
    padding: 0 !important;
}

.embedCode .xy_img_bord {
    -webkit-box-shadow: 0 0 15px #0CC;
    -moz-box-shadow: 0 0 15px #0CC;
    box-shadow: 0 0 15px #0CC;
    top: 32px;
    left: 0px;
    display: none;
    border: 1px solid rgb(255, 255, 255);
}

.embedCode #xy_img {
    z-index: 999;
    width: 40px;
    height: 40px;
    position: relative;
}

.embedCode .vcode-hints {
    position: absolute;
    z-index: 0;
    text-align: center;
    color: #999999;
    font-size: 15px;
}
</style>