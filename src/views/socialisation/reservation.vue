<template>
    <div class="roomContent">
        <header-top :isBanner="isBanner"></header-top>
        <div class="social_main mt50">
            <!--导航-->
            <div class="social_nav">
                <so-nav></so-nav>
            </div>
            <!--志愿者-->
            <div class="active_reservation">
                <div class="active_title" style="border-top: 1px solid #e9e9e9;">
                    <ul class="clearfix jiangzuonav">
                        <li class="reverv_color" @click="a_reservation()">活动讲座预约</li>
                        <li id="infoyuyue" @click="a_reservationed()">查询已预约信息</li>
                    </ul>
                </div>
                <div class="select_active">
                    <label for="">活动讲座：</label>
                    <select name="" id="select_active">
                        <option value="" selected="selected">请选择活动讲座</option>
                    </select>
                    <div class="default_content">可以查询所有可预约的活动和讲座信息</div>
                    <div class="select_active_content clear">
                        <div class="select_active_left" id="select_active_left">
                            <a id="activeHref">
                                <img id="bespeakImg" src="" alt="">
                            </a>
                            <input type="hidden" id="activeId">
                        </div>
                        <div class="select_active_right">
                            <h3 id="bespeakLable"></h3>
                            <h4 id="bespeakTitle"></h4>
                            <p id="bespeakDate"></p>
                            <p class="beak"><span>正在预约 </span>已预约<i id="alReadyNum" style="font-style:normal;"></i>人</p>
                            <button class="rever_active">预约</button>
                            <p style="display:none" class="numAlready"><span>人数已满</span></p>
                        </div>
                    </div>
                </div>
                <div class="query_message">
                    <div class="query_name">
                        <label for="">姓<em style="display:inline-block;width:32px;"></em>名：</label>
                        <input type="text" id="exName" placeholder="请输入姓名" v-model="userName">
                    </div>
                    <div class="query_telephone">
                        <label for="">手<em style="display:inline-block;width:8px;"></em>机<em style="display:inline-block;width:8px;"></em>号：</label>
                        <input type="text" id="exPhone" placeholder="输入手机号" v-model="phone">
                    </div>
                    <div><a href="javascript:void(0)" class="search_message" @click="getCheckInfo()">查询</a></div>
                </div>
            </div>
        </div>
        <html>
 <head></head>
 <body>
  <div class="pop_up" id="pop_up_"> 
   <div class="pop_up_content clear" v-for="item in actList"> 
    <div class="pop_up_left">
     <img src="https://www.shenzhenmuseum.com/p/userfiles/uploadFile/20190710155807.jpg" /> 
    </div>
    <div class="pop_up_right"> 
     <div class="pop_up_close" @click="closePop()">
      <img src="../../assets/img/close.png" />
     </div> 
     <div class="pop_up_message">
      <h3></h3>
      <h3 class="acname">{{item.activeName}}</h3>
      <p>活动时间：2019年7月14日（星期日）下午15:00-16:30 </p> 
      <p>费<em style="display:inline-block;width:32px;"></em>用： 免费</p>
      <p class="already_appoi"><span>正在预约</span>已预约198人</p>
     </div>
     <div class="user_infor">
      <p>姓<em style="display:inline-block;width:32px;"></em>名：<span style="margin-left:0;" class="name">{{item.name}}</span></p>
      <p>手<em style="display:inline-block;width:8px;"></em>机<em style="display:inline-block;width:8px;"></em>号：<span style="margin-left:0;" class="phone_nember">{{item.mobile}}</span></p>
      <p>预约人数：<span style="margin-left:0;">{{item.bespeakNum}}人</span></p>
     </div>
     <div class="Qr_code">
      <div class="code_left">
       <img src="https://www.shenzhenmuseum.com/qrcreate?bg=ffffff&fg=000000&gc=222222&el=L&w=320&m=10&text=CmsActiviteBespeak-006f2a777ba9429ab7fb92dbee791781" width="320" height="320"/>
      </div>
      <div class="code_right">
       <p>预约成功后请将此二维码截图、另存、或打印，</p>
       <p>参加活动时请向工作人员出示</p>
       <p>或进入“活动--&gt;活动预约--&gt;查询预约”</p>
       <p>可再次获取二维码</p>
       <p class="cancel"><button class="cancelBespeak" _id="006f2a777ba9429ab7fb92dbee791781" @click="cancelBespeak1()">取消预约</button></p>
      </div>
     </div>
    </div>
   </div>
  </div>
 </body>
</html>
        <footer-bottom></footer-bottom>
    </div>
</template>
<script>
import header from "../components/header";
import footer from "../components/footer";
import socialisitionNav from "../components/socialisation/socialisitionNav"
import * as API from "api/demo";
export default {
    data() {
        return {
            isBanner: false,
            totlePage: 1,
            actList:'',
            userName:'',
            phone:'',
        };
    },
    mounted() {
        this.getActList()
    },
    computed: {
        
    },
    methods: {
        a_reservation() {
            $('.select_active').show();
            $('.query_message').hide();
            $('.jiangzuonav li').eq(0).addClass('reverv_color').siblings('li').removeClass('reverv_color')
        },
        a_reservationed() {
            $('.select_active').hide();
            $('.query_message').show();
            $('.jiangzuonav li').eq(1).addClass('reverv_color').siblings('li').removeClass('reverv_color')
        },
        closePop(){
            $('.pop_up').hide();
        },
        cancelBespeak1(){
            alert('确定取消预约')
                $('.cancel button').html('已取消');
                $('.cancel button').css({
                    'background':'#666',
                    'color':'#fff'
                })

        },
        //可预约活动列表
        getActList(){
            let data ={
                
            };
            API.get2('active/isBespeak',data).then(res => {
                if (res.code == 0) {
                    this.actList = res.data;
                    //console.log(res)
                   
                }
            }).catch(err => {
                
            })
        },
        //预约信息查询
        getCheckInfo(){
            if(this.userName && this.phone){
                let data ={
                    userName:this.userName,
                    phone:this.phone
                };
                API.get2('active/bespeak',data).then(res => {
                    if (res.code == 0) {
                        this.actList = res.data;
                        console.log(res.data)
                        $('.pop_up').show();
                    }
                }).catch(err => {
                    
                })
            }else {
                alert("请填写姓名或手机号")
            }
            
        }
    },
    components: {
        "header-top": header,
        "footer-bottom": footer,
        "so-nav": socialisitionNav,
    }
};
</script>
<style scoped>
.mt50 {
    margin-top: 80px;
}

.social_nav {
    width: 1200px;
    height: auto;
    margin: 0 auto;
}

.social_nav ul li {
    float: left;
}

.social_nav ul li {
    background: url(../../assets/img/icons/title-icon.png) no-repeat left center;
    background-size: 14px 14px;
    padding: 0 40px;

}

.social_nav ul li:not(:first-child) {
    padding-left: 54px;
}

.social_nav ul li a {
    display: block;
    height: 51px;
    line-height: 51px;
    font-size: 26px;
    color: #999999;
    border-bottom: 4px solid #fbfbfb;
    cursor: pointer;
}

.social_nav ul li:first-child {
    background: none;
}

.social_nav ul li a:hover {
    border-bottom: 4px solid #333333;
    color: #333333;
}

.social_nav ul li a.active {
    border-bottom: 4px solid #333333;
    color: #333333;
}

.activity {
    margin-top: 130px;
}

.social_banner {
    height: 500px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    margin-top: 80px;
}

.social_main {
    width: 100%;
    background: #fbfbfb;
    position: relative;
    z-index: 2;
    padding-top: 55px;
}

.active_reservation {
    width: 1200px;
    margin: 0 auto;
    /* display:none; */
}

.active_title {
    margin: 20px 0 0 10px;
    background: none;
    padding-left: 0;
    padding-top: 30px;
}

.active_title ul .reverv_color {
    color: #333333;
}

.active_title ul li {
    cursor: pointer;
    float: left;
    margin-left: 30px;
    font-size: 15px;
    color: #808080;
}

.select_active {
    margin: 30px 0 0 40px;
    color: #808080;
    font-size: 15px;
}

.select_active select {
    width: 600px;
    height: 32px;
    font-size: 15px;
    color: #494949;
}

.select_active label {
    font-size: 15px;
}

.default_content {
    height: 100px;
    line-height: 100px;
    margin-left: 80px;
}

.select_active_content {
    width: 1200px;
    background-color: #e9e9e9;
    display: none;
    margin: 40px 0;
}

.select_active_left {
    float: left;
    width: 360px;
    height: 240px;
    text-align: center;
    line-height: 240px;
    font-size: 0;
}

.select_active_left img {
    max-width: 360px;
    max-height: 240px;
}

.select_active_right {
    float: left;
    margin-left: 40px;
}

.select_active_right h3 {
    height: 40px;
    line-height: 40px;
    color: #333333;
    font-size: 20px;
    font-weight: normal;
}

.select_active_right h4 {
    height: 40px;
    line-height: 40px;
    color: #333333;
    font-size: 18px;
    font-weight: normal;
}

.select_active_right p {
    height: 36px;
    line-height: 36px;
    color: #666666;
}

.select_active_right p span {
    color: #80bd75;
    margin-right: 25px;
}

.select_active_right button {
    width: 120px;
    height: 30px;
    line-height: 30px;
    background: #666666;
    color: white;
    border: none;
    border-radius: 6px;
    margin-top: 25px;
}

.query_message {
    width: 1200px;
    display: none;
    margin: 30px auto;
}

.query_message div {
    width: 280px;
    margin: 0 auto;
    font-size: 15px;
    box-sizing: border-box;
    padding-bottom: 30px;
}

.query_message div label {
    white-space: pre;
}

.query_message div input {
    width: 180px;
    height: 30px;
}

.query_message div a {
    margin: 0 auto;
    display: block;
    width: 120px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background: #333333;
    color: #fff;
}

.active_title ul .reverv_color {
    color: #333333;
}
.active_pop_up{
    z-index:10;
}
.social_main_content>div{
    display:none;
}
.social_main_content>div.active{
    display:block;
}
#alReadyNum{
	font-weight:normal;
}
.pop_up{
    width: 100%;
    height: 100%;
    position:fixed;
    top:0;
    overflow-y:scroll;
    background:rgba(0,0,0,0.7);
    z-index: 1000;
    display:none;
}
.pop_up_content{
    width: 1200px;
    height: auto;
    background:#fbfbfb;
    margin:0 auto;
    position:relative;
    top:10%;
}
.pop_up_left{
    width: 360px;
    height: 240px;
    text-align:center;
    float:left;
    clear:both;
    margin: 40px 0 0 40px;
    line-height:240px;
}
.pop_up_left img{
    max-width: 360px;
    max-height: 240px;
}
.pop_up_right{
    float:right;
    width: 750px;
}
.pop_up_close{
    width: 38px;
    height: 38px;
    float:right;
    margin:20px 20px 0 0;
    cursor: pointer;
}
.pop_up_close img{
    width: 100%;
    height: 100%;
}
.pop_up_message{
    clear:both;
    width: 750px;
    height: 220px;
}
.pop_up_message h3{
    height: 46px;
    line-height:46px;
    font-size:18px;
}
.pop_up_message p{
    font-size:15px;
    color:#717171;
    height:35px;
    line-height:35px;
}
.pop_up_message p:last-child{
    color:#333333;
}
.pop_up_message p span{
    color:#4bac35;
    margin-right:25px;
}
.code_left img{width: 200px; height: 200px;}
.user_infor{
    margin-top:40px;
}
.user_infor p{
    height:45px;
    line-height:45px;
    font-size:15px;
    white-space: pre;
}
.user_infor p span{
    margin-left:40px;
    font-size:15px;
    color:#333333;
}
.Qr_code{
    margin-top:20px;
}
.code_left{
    float: left;
    width: 200px;
    height: 200px;
}
.code_right{
    float:left;
    margin-left:40px;
}
.code_right p{
    font-size: 14px;
    color:#7c7c7c;
}
.deter_m_right p{
    height:25px;
    line-height:25px;
    font-size: 16px;
    color: #7c7c7c;
}
.cancel{
    margin-top: 25px;
}
.cancel button{
    width: 120px;
    height: 30px;
    color:#fff;
    background:#999999;
    font-size:16px;
    border:none;
    outline:none;
    border-radius:5px;
}
</style>