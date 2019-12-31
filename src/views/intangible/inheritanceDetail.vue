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
 
 		</div>
</div>
		
           
			</div>
	</div>
    <footer-bottom></footer-bottom>
  </div>
</template>
<script>
import header from "../components/header";
import footer from "../components/footer";
import intangibleNewsList from "../components/intangible/intangibleNewsList";
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
  }
};
</script>
<style scoped>
.news_detail_main{
    width: 1200px;
    margin: 0 auto;
    box-sizing: border-box;
    padding:0 60px;
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
</style>
