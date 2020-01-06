<template>
    <div class="roomContent">
        <header-top :isBanner="isBanner" v-if="bandata" :bandata="bandata"></header-top>
       <div class="collection-reservation-tab-wrap mt120">
		<div class="collection-reservation-tab comWidth">
        <ul class="clear">
            <li class="col">
                <router-link :to="{path:'collectExhibit'}" class="">我的收藏</router-link>
            	<div class="sec-nav-yy">
            	
                    <span v-for="(item,index) in sctitle" :key="index" :class="{active:num ==index}" @click="num = index">
                        {{item}}
                    </span>
            	</div>
            </li>
			<li class="line"></li>
            <li class="res">
            	<router-link :to="{path:'reservation'}" class="active">我的预约</router-link>
        	</li>
        </ul>
       </div>
       </div>
       <div class="mainWrap">
	<!-- 我的收藏 -->
		<!-- 我的预约 -->
	
		<!-- 未开始 -->
		<div class="comWidth items active" v-if="num==0">			
		            <ul class="social_ul">
		            	<li class="clearfix">
			                <router-link :to="{path:''}">
			                	<div class="social_img"><img src="http://shenbo.artup.com/p/userfiles/uploadFile/20180523144251.jpg" onerror="this.src='/static/img/bg-1-1.png'" alt=""></div> 
                            </router-link>
                            
			                        <div class="social_intro">
                                         <router-link :to="{path:''}">
			                        <h4>2019环球自然日决赛日程</h4>
			                            <p>活动时间：2020年10月26日—27日</p>
			                            <p><span>正在预约</span>已预约12人</p>
                                         </router-link>
                                           <button class="appoint_search_detail" data="show_faedb67451c840f2ad9de23ba844e933" style="margin-right:20px;background:#333333;font-family:'Microsoft'" @click="bespeak()">预约详情</button> <button id="cancelBtn" @click="cancelBespeak('faedb67451c840f2ad9de23ba844e933')">取消预约</button>
			                        </div>
                                    
			                  
                                
			                </li>
			           </ul>        
			
		</div>
	
		<div class="comWidth items" v-if="num==1">			
		            <ul class="social_ul">
                        <li class="clearfix">
			                <a href="/socialisation/activeDetail?lmType=L0502&amp;resType=ActiveCmsDataDTO&amp;resId=be5102393a2d42d0b410a11fa18672d5">
			                	<div class="social_img"><img src="http://shenbo.artup.com/p/userfiles/uploadFile/20180523144251.jpg" onerror="this.src='/static/img/bg-1-1.png'" alt=""></div> 
			                        <div class="social_intro">
			                        <h4>2019环球自然日决赛日程1111111</h4>
			                            <p>活动时间：2020年10月26日—27日</p>
			                            <p><span>正在预约</span>已预约12人</p>
			                            <button class="appoint_search_detail" data="show_faedb67451c840f2ad9de23ba844e933" style="margin-right:20px;background:#333333;font-family:'Microsoft'">预约详情</button> <button id="cancelBtn" @click="cancelBespeak()">取消预约</button>
			                        </div>
			                    </a>
			                </li>
				 </ul>        
			
		</div>
</div>
<div class="appoint_pop" id="show_faedb67451c840f2ad9de23ba844e933">
	<div class="appoint_detail">
		 <ul class="social_ul">
		 	<li class="clearfix">
		 		<a href="javascript:void(0)">
		 			<div class="social_img"><img src="http://shenbo.artup.com/p/userfiles/uploadFile/20180523144251.jpg" alt=""></div> 
                       <div class="social_intro">
	                        <h4>2019环球自然日决赛日程</h4>
                          <p>活动时间：2020年10月26日—27日</p>
                          <p><span>正在预约</span>已预约12人</p>
                         <button id="cancelBtn" @click="cancelBespeak('faedb67451c840f2ad9de23ba844e933')">取消预约</button>
                     </div>
		 		 </a>
		 	</li>	
	 	
		 </ul> 
		 <div class="person_infor">
		 	<p>姓<em style="display:inline-block;width:32px;"></em>名：<span>李幸</span></p>
		 	<p>手<em style="display:inline-block;width:8px;"></em>机<em style="display:inline-block;width:8px;"></em>号：<span>13811381088</span></p>
		 	<p>预约人数：<span>1人</span></p>
		 </div>
		 <div class="clear Qr_code">
		 	<div class="Qr_img">
		 		<img name="img" src="/qrcreate?bg=ffffff&amp;fg=000000&amp;gc=222222&amp;el=L&amp;w=320&amp;m=10&amp;text=CmsActiviteBespeak-faedb67451c840f2ad9de23ba844e933">
		 	</div>
		 	<div class="Qr_infor">
		 		<p>预约成功后请将此二维码截图、另存、或打印，参加活动时请向工作人员出示</p>
		 		<p>或进入“活动--&gt;活动预约--&gt;查询预约”可再次获取二维码</p>
		 	</div>
		 </div>  
		 <div class="appoint_close" @click="close"><img alt="" src="../../assets/img/close.png"></div>     
	</div>
</div>
        <footer-bottom></footer-bottom>
    </div>
</template>
<script>
import header from "../components/header";
import footer from "../components/footer";
import socialisitionNav from "../components/socialisation/socialisitionNav"
import ammouncerleft from "../components/socialisation/ammouncerleft"
import ammouncerright from "../components/socialisation/ammouncerright"
import * as API from "api/demo";
export default {
    data() {
        return {
            lang:this.$store.getters.getlang,
            isBanner: false,
            isPage: false,
            isShow: false,
            totlePage: 1,
            bandata:'',
            volunteerList:'',
            actList:'',
            sctitle:['未开始','已开始/已结束'],
            num:0,
        };
    },
    mounted() { 
      this.totlePage <= 10 ? this.isPage = false : this.isPage = true;
      this.getBaner();
    },
    computed: {},
    methods: {
        //获取banner 社交banner
        getBaner(){
            let data ={
                lang:this.lang,
                pageNo:1,
                pageSize:3,
                platform:0
            };
            API.get2('slidePic/page/L0503',data).then(res => {
                if (res.code == 0) {
                    this.bandata = res.data.list;
                    //console.log(this.bandata)
                }
            }).catch(err => {
                
            })
        },
        bespeak(){
            $('.appoint_pop').show();
        },
        cancelBespeak(){
            alert("确定取消预约")
             $('.appoint_pop').hide();
        },
        close(){
            $('.appoint_pop').hide();
        },
       
       
    },
    components: {
        "header-top": header,
        "footer-bottom": footer,
        'so-nav': socialisitionNav,
    }
};
</script>
<style scoped>
.mainWrap{
    min-height: 500px;
    background-color: #f3f3f3;
}
.mt120{margin-top: 120px; min-height: 160px;}
.collection-reservation-tab{text-align: center; border-bottom:1px solid #e9e9e9;}   
.collection-reservation-tab ul{display: inline-block;font-size:0;}
.collection-reservation-tab ul li{
   display: inline-block;
    background-size:14px 14px;
    padding:0 98px;
    height: 100px;
    line-height: 100px;
    position: relative;
}
.collection-reservation-tab  a{
    font-size: 26px;
    color:#999999;
    border-bottom: 4px solid #fff;
    line-height: 46px;
    display: inline-block;
    padding-left:34px;
}
.collection-reservation-tab  li.line{width:1px ;height: 26px; background:#e9e9e9; overflow: hidden;padding:0;}
.collection-reservation-tab li.col >a{
    background:url(../../assets/base/img/collection.png) no-repeat 0 center;  
}
.collection-reservation-tab li.col > a:hover,.collection-reservation-tab  li.col a.active{
    background:url(../../assets/base/img/collection-bg.png) no-repeat 0 center;  
}
.collection-reservation-tab li.res > a{
    background:url(../../assets/base/img/reservation.png) no-repeat 0 center;  
}
.collection-reservation-tab li.res > a:hover,.collection-reservation-tab  li.res a.active{
    background:url(../../assets/base/img/reservation-active.png) no-repeat 0 center;  
}
.collection-reservation-tab ul a:hover,.collection-reservation-tab ul a.active{
    border-bottom: 4px solid #333333; color:#333333;
}

.colletion-main{padding-top:40px;}
.collection-reservation-tab .sec-nav-yy{height: 60px;background:#fff;position: absolute;top:101px;left:400px;width:420px;font-size: 0;}
.collection-reservation-tab .sec-nav-yy span{background:none;float:left; margin-right: 70px;margin-top: 30px; cursor: pointer;}
.collection-reservation-tab .sec-nav-yy span{font-size:15px; color:#333333; line-height: 30px;display: inline-block;border-bottom:1px solid transparent; background: none;padding-left:0;}

.collection-reservation-tab .sec-nav-yy span:hover,.collection-reservation-tab .sec-nav-yy  span.active {border-bottom:1px solid #000;background:none;}

.collections-collection{margin-top: 50px;}
.social_ul li{
    margin-bottom: 40px;
    background:#e9e9e9;
    margin-top: 50px;
}
.social_ul li a{
    display:block;
}

.social_ul li .social_img{
    height: 240px;
    width: 360px;
    float: left;
    font-size: 0;
    text-align:center;
    line-height:240px;
}
.social_ul li .social_img img{
    max-width: 360px;
    max-height: 240px;
}
.social_ul li .social_intro{
    width: 800px;
    height: 240px;
    float: right;
    box-sizing:border-box;
    padding-left:40px;
}
.social_ul li .social_intro h3{
    font-size: 20px;
    color:#ff6900;
    margin:21px 0;
}
.social_ul li .social_intro h4{
    font-size:18px;
    color:#464646;
    height:40px;
    line-height: 40px;
}
.social_ul li .social_intro p{
    font-size:15px;
    color:#717171;
    height:36px;
    line-height: 36px;
}
.social_ul li .social_intro p span{
    color:#4bac35;
    margin-right:25px;
}
.social_ul li .social_intro button{
    height:30px;
    width: 120px;
    background:#666666;
    color:white;
    font-size:16px;
    border: none;
    border-radius: 8px;
    margin-top:10px;
    outline:none;
}
.social_page{
    width: 780px;
    height:50px;
    line-height: 50px;
    margin: 50px auto;
}
.social_page ul li{
    float: left;
    margin:0 25px;
}
.appoint_pop{
	position:fixed;
	top:80px;
	left:0;
	width:100%;
	height:100%;
	background:rgba(0,0,0,0.9);
	z-index:999;
	overflow-y:scroll;
	display:none;
}
.appoint_detail{
	width:1200px;
	margin:0 auto;
	background:#e9e9e9;
	position:relative;
	box-sizing:border-box;
	padding-bottom:60px;
}
.appoint_detail ul{
	box-sizing:border-box;
	padding:40px 0 0 40px;
}

.person_infor{
	margin-left:440px;
}
.person_infor p{
	color:#666666;
	font-size:16px;
}
.person_infor p span{
	color:#333333;
	margin-left:30px;
}
.Qr_code{
	margin-top:36px;
}
.Qr_code div{
	float:left;
}
.Qr_code .Qr_img{
	width:200px;
	height:200px;
	margin-left:440px;
}
.Qr_code div img{
	width:200px;
	height:200px;
}
.Qr_code div p{
	font-size:16px;
	color:#666666;
	width:316px;
	margin-left:40px;
}
.appoint_close{
	position:absolute;
	top:20px;
	right:20px;
}
.appoint_close img{
	width:20px;
	height:20px;
	cursor:pointer;
}
</style>