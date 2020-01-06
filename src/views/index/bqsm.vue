<template>
  <div class="roomContent">
    <header-top :isBanner="isBanner"></header-top>
     <div id="goTop" v-show="gotop" @click="toTop">
            <p>回到顶部</p>
    </div>
    <div class="navPath_new" style="margin-bottom:47px;">
		<div class="navPath clear">
			 <p class="clear"><i></i><router-link :to="{path:'index'}" href="/">首页</router-link><i></i></p>
			 <p class="clear"><i></i><router-link :to="{path:'bqsm'}">版权声明</router-link><i></i></p>
		 </div>
	</div>
    <div class="declare_main" style="margin-bootom:40px;">
		<div class="declare_content" style="font-family:'微软雅黑'">
			<p>欢迎您浏览和使用深圳博物馆网站（www.shenzhenmuseum.com，以下称“本网站”），请在使用本网站时，遵从下列条款。 网站包含的所有内容，包括但不限于整个网站、网站的设计、文字、图片和音视频作品等网上内容，版权均属于深圳博物馆及或相关权利人所有，任何媒体、网站、单位或个人未经深圳博物馆或有关权利人的正式书面授权之前，仅供您浏览，不得擅自以下述方式使用，包括但不限于转载、摘编、链接、转贴、复制、出版、公布、传送、分发或以其他方式使用本网站的任何内容，并严禁使用本网站未经授权的网页和内容进行商业活动。如果您从本网站下载您所需的材料作非商业用途（含有版权和其他专有权的所属信息除外），请告知本站，并经过本网站允许。</p>
			<p>任何转载、引用发表于本网站的版权文章须符合以下规范：</p>
			<p>（1）用于非商业、非盈利、非广告性目的时需注明作者及文章及图片的出处为“深圳博物馆网站”或“http://www. shenzhenmuseum.com”。</p>
			<p>（2）用于商业、盈利、广告性目的时需征得文章或图片原作者的同意，并注明作者姓名、授权范围及原作出处为“深圳博物馆网站”或“http://www.shenzhenmuseum.com”。</p>
			<p>（3）任何文章或图片的修改或删除均应保持作者原意并征求原作者同意，并注明授权范围。</p>
			<p>本网站及深圳博物馆不承担因您使用或不能使用本网站信息所导致的任何直接的、间接的、意外的损害责任。也不承担因您违反本网站规定或触犯中华人民共和国法律而引起的任何刑事或者民事责任。 本网站如因系统维护或升级而需暂停服务时，将事先公告。若因硬件故障或其它不可抗力而导致暂停服务，于暂停服务期间造成的一切不便与损失，本网站及深圳博物馆不承担任何责任。 本网站所包含所有内容的最终解释权归深圳博物馆。 对于违反本声明的违法和侵权行为，深圳博物馆将依法追究其责任；对于本网站刊载、转载内容涉及版权等问题的，请作者在两周内与本网站联系。</p>
			<p class="end_ms">深圳博物馆</p>
			<p class="end_ms">2008年12月18日</p>
		</div>
    </div>
    <footer-bottom></footer-bottom>
  </div>
</template>
<script>
import header from "../components/header";
import footer from "../components/footer";
import * as API from "api/demo";
export default {
  data() {
    return {
      isBanner:false,
      isPage: false,
      totlePage: 12,
       gotop: false,
    };
  },
  mounted() {this.totlePage<=10?this.isPage = false :this.isPage =true;},
  computed: {},
  methods: {
      handleScroll() {

            let scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
            //console.log(scrolltop)
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
  }
};
</script>
<style scoped>
    .declare_main{
        width: 1200px;
        margin: 30px auto 0;
      }  
      .declare_main p{
        font-size:16px;
        line-height:30px;
        margin:8px 0;
        text-indent:2em;
      }
       .declare_main p.end_ms{
       	text-align:right;
       }
      .intang_c{
		opacity:0.6;
	}
</style>
