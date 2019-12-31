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
                        <label for="">姓<em style="display:inline-block;width:32px;"></em>名：</label><input type="text" id="exName" placeholder="请输入姓名">
                    </div>
                    <div class="query_telephone">
                        <label for="">手<em style="display:inline-block;width:8px;"></em>机<em style="display:inline-block;width:8px;"></em>号：</label><input type="text" id="exPhone" placeholder="输入手机号">
                    </div>
                    <div><a href="javascript:void(0)" class="search_message">查询</a></div>
                </div>
            </div>
    </div>
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
      isBanner:false,
      totlePage:1
    };
  },
  mounted() {},
  computed: {},
  methods: {
     a_reservation(){
         $('.select_active').show();
         $('.query_message').hide();
         $('.jiangzuonav li').eq(0).addClass('reverv_color').siblings('li').removeClass('reverv_color')

     },
     a_reservationed(){
          $('.select_active').hide();
         $('.query_message').show();
         $('.jiangzuonav li').eq(1).addClass('reverv_color').siblings('li').removeClass('reverv_color')
     }
  },
  components: {
    "header-top": header,
    "footer-bottom": footer,  
    "so-nav":socialisitionNav,
  }
};
</script>
<style scoped>
.mt50{margin-top: 80px;}
.social_nav{
    width: 1200px;
    height:auto;
    margin: 0 auto;
}

.social_nav ul li{
    float:left;
}
.social_nav ul li{
    background:url(../../assets/img/icons/title-icon.png) no-repeat left center;
    background-size: 14px 14px;
    padding: 0 40px;

}
.social_nav ul li:not(:first-child){
	padding-left:54px;
}
.social_nav ul li a{
    display:block;
    height:51px;
    line-height: 51px;
    font-size:26px;
    color:#999999;
    border-bottom:4px solid #fbfbfb;
    cursor: pointer;
}

.social_nav ul li:first-child{
    background:none;
}
.social_nav ul li a:hover{
    border-bottom: 4px solid #333333;
    color:#333333;
}
.social_nav ul li a.active{
    border-bottom: 4px solid #333333;
    color:#333333;
}
.activity{margin-top: 130px;}
.social_banner{
    height: 500px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    margin-top: 80px;
}
.social_main{
    width: 100%;
    background: #fbfbfb;
    position: relative;
    z-index:2;
    padding-top:55px;
}
.active_reservation{
    width: 1200px;
    margin: 0 auto;
    /* display:none; */
}
.active_title{
    margin:20px 0 0 10px;
    background:none;
    padding-left: 0;
    padding-top: 30px;
}
.active_title ul .reverv_color {
    color: #333333;
}
.active_title ul li{
    cursor: pointer;
    float:left;
    margin-left:30px;
    font-size:15px;
    color:#808080;
}
.select_active{
    margin:30px 0 0 40px;
    color:#808080;
    font-size:15px;
}
.select_active select{
    width: 600px;
    height: 32px;
    font-size:15px;
    color:#494949;
}
.select_active label{
    font-size:15px;
}
.default_content{
    height:100px;
    line-height:100px;
    margin-left:80px;
}

.select_active_content{
    width: 1200px;
    background-color:#e9e9e9;
    display:none;
    margin: 40px 0;
}
.select_active_left{
    float:left;
    width: 360px;
    height: 240px;
    text-align:center;
    line-height:240px;
    font-size:0;
}
.select_active_left img{
    max-width:360px;
    max-height:240px;
}
.select_active_right{
    float:left;
    margin-left:40px;
}
.select_active_right h3{
    height: 40px;
    line-height:40px;
    color:#333333;
    font-size:20px;
    font-weight: normal;
}
.select_active_right h4{
    height: 40px;
    line-height:40px;
    color:#333333;
    font-size:18px;
    font-weight: normal;
}
.select_active_right p{
    height:36px;
    line-height:36px;
    color:#666666;
}
.select_active_right p span{
    color:#80bd75;
    margin-right:25px;
}
.select_active_right button{
    width: 120px;
    height: 30px;
    line-height:30px;
    background:#666666;
    color:white;
    border:none;
    border-radius: 6px;
    margin-top:25px;
}

.query_message{
    width: 1200px;
    display:none;
    margin: 30px auto;
}
.query_message div{
    width: 280px;
    margin: 0 auto;
    font-size:15px;
    box-sizing: border-box;
    padding-bottom:30px;
}
.query_message div label{
    white-space: pre;
}
.query_message div input{
    width: 180px;
    height: 30px;
}
.query_message div a{
    margin:0 auto;
    display:block;
    width: 120px;
    height: 40px;
    line-height:40px;
    text-align: center;
    background:#333333;
    color:#fff;
}
.active_title ul .reverv_color{
    color:#333333;
}

</style>
