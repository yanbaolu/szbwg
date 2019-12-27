<template>
  <div class="roomContent">
    <header-top :isBanner="isBanner"></header-top>
   <div id="goTop"  v-show="gotop" @click="toTop"><p>回到顶部</p></div>
   <div class="news_main" style="margin-bottom:60px;">
<div class="navPath_new" style="margin-bottom:44px;">
		<div class="navPath clear">
	    	<p class="clear">
	   		   <i></i><a href="/intangible/index">非遗</a><i></i>
	  		 </p>
   		<p true="">
			<i></i>
			<a href="/intangible/intangibleProject?&amp;pLm=:L04:L0402">非遗代表性项目</a>
			<i></i>
		 </p>
	<p class="clear"><i></i><a href="javascript:;">陈仙姑的故事</a><i></i></p>
	    </div>
    </div>
		<div class="news_detail_main">
			<div class="news_main" style="margin-bootom:40px;">
        <div class="news_message">
        <p class="inheri_name">
       		陈仙姑的故事</p>
        <div class="inheri_title">
			<p>项目类别：
		   	 				民间音乐</p>
 	 			</div>
        <div class="project_content deputy_text">
           <p></p><p style="text-indent:37px;line-height:150%"><span style="line-height: 150%; font-family: 微软雅黑, 'Microsoft YaHei'; font-size: 14px;">这是一个以真人真事写成的故事,在宝安、东莞一带流传了一百多年。故事的主人公陈仙姑原名陈端和,生于清代咸丰年间的公明水贝村（现深圳市宝安区西部），当时水贝村的大沘河河水泛滥，瘟疫盛行。陈端和年纪虽小，但看到民不聊生的惨状，立志要改变村民们长期受疾病侵害的现状，不顾家人的反对，经常到东莞、增城一带求医问药，为当地群众驱除病魔的折磨。</span></p><p style="text-indent:37px;line-height:150%"><span style="font-family: 微软雅黑, 'Microsoft YaHei'; line-height: 150%; font-size: 14px;">传说在同治年间，陈端和死后升天成为仙人,惩治了大沘河二河神到家，使当地乡亲摆脱了水灾之害和瘟疫之患。乡亲们为了颂扬她那种舍已为众、不畏艰难的崇高情操与无私奉献的品格，为她修建了一座庙,并编成故事，代代相传。</span></p><p style="text-indent:37px;line-height:150%"><span style="font-family: 微软雅黑, 'Microsoft YaHei'; line-height: 150%; font-size: 14px;"><br></span></p><p style="text-align: center;"><img src="https://www.shenzhenmuseum.com//szbwg-cms/userfiles/ueditor/jsp/upload/image/20171019/1508404925692080248.jpg" title="1508404925692080248.jpg" alt="陈仙姑庙全景.jpg"></p><p></p>
        </div>
 <div class="inheri_video videoList" style="height: 325px;">
            <p class="clear">相关视频:<a href="/intangible/intangibleVideo?lmType=L0402&amp;name=应人石的传说&amp;entityId=82409dbb7500403c833e572156ad2c2e&amp;className=CmsHeritagePro">查看更多</a></p>
           <!--相关视频-->
           <div class="mt30">
             <in-video></in-video>
           </div>
        </div>
 		</div>
</div>
		
           
			</div>
       <div class="video_Mask">	
			<div class="video_Wrap">
				<video src="index" poster="index" id="video_" controls="" autoplay="autoplay"></video>
			</div>
			<div class="close" id="video-close" @click="videoClose()"></div>
	</div>
	</div>
    <footer-bottom></footer-bottom>
  </div>
</template>
<script>
import header from "../components/header";
import footer from "../components/footer";
import intangibleNewsList from "../components/intangible/intangibleNewsList";
import intangiblevideo from "../components/intangible/intangiblevideo";
import * as API from "api/demo";
export default {
  data() {
    return {
      isBanner: false,
      gotop: false,
      isPage: false,
      totlePage: 20,
      news:[],
      toice:[],
    };
  },
  mounted() {
    //页数显示与否
    this.totlePage <=5 ? (this.isPage = false) : (this.isPage = true);
       window.addEventListener("scroll", this.handleScroll, true);
  },
  computed: {},
  methods: {
     videoClose(){
                console.log(1111)
		        $('.video_Mask').hide();
		        $('#video_').get(0).pause();
		   
        },
       handleScroll() {

       let scrolltop = document.documentElement.scrollTop || document.body.scrollTop;

      scrolltop > 30 ? (this.gotop = true) : (this.gotop = false);
    },
      toTop() {
      let top = document.documentElement.scrollTop || document.body.scrollTop;
      // 实现滚动效果 
      const timeTop = setInterval(() => {
        document.body.scrollTop = document.documentElement.scrollTop = top -= 50;
        if (top <= 0) {
          clearInterval(timeTop);
        }
      }, 10);
    }
  },
  components: {
    "header-top": header,
    "footer-bottom": footer,
    'in-newslist':intangibleNewsList,
    'in-video':intangiblevideo,
  }
};
</script>
<style scoped>
.mt30{margin-top: 30px;}
.news_detail_main{
    width: 1200px;
    margin: 0 auto;
    box-sizing: border-box;
}
.news_detail_main h1{
    text-align: center;
    font-size:26px;
    color:#333333;
}
.news_detail_main>p{
    line-height:30px;
    /*margin:20px 0;*/
    font-size:16px;
    color:#666666;
}
.news_detail_content{
    width: 800px;
    height: 100%;
    margin: 0 auto 30px;

}
.inheri_name{
    text-align:center;
    font-size:26px;
    height:48px;
    line-height: 48px;
    color:#5d5d5d;
}
.inheri_title{
    margin:20px 0 0 0;
}
.inheri_title p{
    font-size:16px;
    line-height:16px;
    margin-bottom:20px;
    color:#666666;
}
.inheri_title p a{
    font-size:16px;
    color:#3c72c2;
    margin-right:20px;
}
.inheri_name{
    text-align:center;
    font-size:26px;
    height:48px;
    line-height: 48px;
    color:#5d5d5d;
}
.inheri_title{
    margin:20px 0 0 60px;
}
.inheri_title p{
    font-size:16px;
    line-height:16px;
    margin-bottom:20px;
    color:#666666;
}
.inheri_title p a{
    font-size:16px;
    color:#3c72c2;
    margin-right:20px;
}
.inheri_content{
    width: 1080px;
    margin:0 auto;
    height:auto;
}
.inheri_content span{
	font-size:16px;
	color:#666666;
}
.inheri_content p{
    font-size:16px;
    color:#989898;
    line-height: 30px;
    /* position:relative;
    top:-26px;
    text-indent:87px !important; */
}
.inheri_detail_img{
    width: 800px;
    height: 616px;
    margin: 30px auto;
}
.inheri_detail_img img{
    width: 100%;
    height: 100%;
}
/*相关图片*/
.inheri_picture{
    margin:60px 0 20px;
}
.inheri_picture p{
    font-size:15px;
     color:#5d5d5d;
}
.inheri_picture div{
    height: 270px;
    width: auto;
    line-height: 270px;
    position: relative;
    text-align: center;
}
.inheri_picture p a{
    float:right;
    color: #6e6e6e;
    font-size: 15px;
}
.inheri_picture ul li{
    float:left;
    margin:20px 40px 0 0;
}
.inheri_picture ul li:nth-child(4n){
	margin-right:0;
}
.inheri_picture ul li a{
    display:block;
    width: 270px;
    height: 270px;
    position:relative;
}
.inheri_picture img{
    max-width: 100%;
    max-height: 100%;
    
}
.inheri_picture ul li p{
    position:absolute;
    bottom:0;
    height:48px;
    line-height:48px;
    background:rgba(0,0,0,0.4);
    color:#fff;
    font-size: 15px;
    text-indent: 30px;
    width: 270px;
    text-align: left;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
/*相关视频*/
.inheri_video{
    margin:30px 0 100px;
}
.inheri_video .videoWrap{
	height: 220px;
}
.inheri_video .itemText{
	width: 392px;
}
.inheri_video p{
    font-size:15px;
    color:#5d5d5d;
}
.inheri_video p a{
    float:right;
    color: #6e6e6e;
    font-size: 15px;
}
.inheri_video ul li{
    float:left;
    margin:20px 30px 0 0;
}
.inheri_video ul li a{
    display:block;
    width: 392px;
    height: 280px;
    position:relative;
}
.inheri_video ul li a video{
    width: 392px;
    height: 220px;
}
.inheri_video ul li a p{
    position:absolute;
    bottom:0;
    height:60px;
    line-height:60px;
    background:#e9e9e9;
    color:#575757;
    font-size: 15px;
    text-indent: 30px;
    width: 100%;
}
/*项目详情*/
.project_content{
    width: 1080px;
    margin:36px auto 0;
    height:auto;
}
.project_content p{
    font-size:15px;
    color:#666666;
    line-height: 30px;
}
.project_intro{
    text-align: center;
    font-size:15px;
    color:#333333;
}
/*视频*/
.videoList .videoTitle h3{
    font-weight: normal;
    width: 270px;
}

</style>
