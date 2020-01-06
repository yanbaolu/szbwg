<template>
  <div class="roomContent">
    <header-top :isBanner="isBanner"></header-top>
     <div id="goTop" v-show="gotop" @click="toTop">
            <p>回到顶部</p>
    </div>
    <div class="navPath_new" style="margin-bottom:47px;">
		<div class="navPath clear">
			 <p class="clear"><i></i><router-link :to="{path:'index'}" href="/">首页</router-link><i></i></p>
			 <p class="clear"><i></i><router-link :to="{path:'yqlj'}">友情链接</router-link><i></i></p>
		 </div>
	</div>
    <div class="bwgConnect clear">
			<!-- <p><a class="active">国内博物馆</a><span></span></p>
			<p><a class="">国外博物馆</a></p> -->
            <p v-for="(item,index) in titlenav" :key="index" :class="{active:num==index}" @click="num = index">
{{item}}
            </p>
		</div>
        <div class="bwg_content">
			<div class="friend_con"  v-if="num==0">
				<ul class="clear">
					<li title="澳门艺术博物馆"><a target="_black" href="http://www.mam.gov.mo/c/index"><img src="https://www.shenzhenmuseum.com/p/resize_600x448/userfiles/uploadFile/20180611135517.png"></a></li>
					<li title="澳门博物馆"><a target="_black" href="http://www.macaumuseum.gov.mo/"><img src="https://www.shenzhenmuseum.com/p/resize_600x448/userfiles/uploadFile/20180611135438.png"></a></li>
					<li title="广东民间工艺博物馆"><a target="_black" href="http://gdgyg.orgcc.com/"><img src="https://www.shenzhenmuseum.com/p/resize_600x448/userfiles/uploadFile/20180611135233.png"></a></li>
					<li title="香港历史博物馆"><a target="_black" href="http://hk.history.museum/"><img src="https://www.shenzhenmuseum.com/p/resize_600x448/userfiles/uploadFile/20180611135122.png"></a></li>
					<li title="孙中山故居纪念馆"><a target="_black" href="http://www.sunyat-sen.org/"><img src="https://www.shenzhenmuseum.com/p/resize_600x448/userfiles/uploadFile/20180611135040.png"></a></li>
					<li title="重庆中国三峡博物馆"><a target="_black" href="http://www.3gmuseum.cn/"><img src="https://www.shenzhenmuseum.com/p/resize_600x448/userfiles/uploadFile/20180611134954.png"></a></li>
					<li title="国立故宫博物院"><a target="_black" href="https://www.npm.gov.tw/"><img src="https://www.shenzhenmuseum.com/p/resize_600x448/userfiles/uploadFile/20180611134912.png"></a></li>
					<li title="金沙遗址博物馆"><a target="_black" href="http://www.jinshasitemuseum.com/"><img src="https://www.shenzhenmuseum.com/p/resize_600x448/userfiles/uploadFile/20180611134834.png"></a></li>
					<li title="四川博物院"><a target="_black" href="http://www.scmuseum.cn/"><img src="https://www.shenzhenmuseum.com/p/resize_600x448/userfiles/uploadFile/20180611134806.png"></a></li>
					<li title="福建博物院"><a target="_black" href="http://museum.fjsen.com/"><img src="https://www.shenzhenmuseum.com/p/resize_600x448/userfiles/uploadFile/20180611134701.png"></a></li>
					<li title="成都博物馆"><a target="_black" href="http://www.cdmuseum.com"><img src="https://www.shenzhenmuseum.com/p/resize_600x448/userfiles/uploadFile/20180611134534.png"></a></li>
					<li title="西汉南越王博物馆"><a target="_black" href="http://www.gznywmuseum.org/"><img src="https://www.shenzhenmuseum.com/p/resize_600x448/userfiles/uploadFile/20180611134303.png"></a></li>
					<li title="山西博物院"><a target="_black" href="http://www.shanximuseum.com/"><img src="https://www.shenzhenmuseum.com/p/resize_600x448/userfiles/uploadFile/20180611134233.png"></a></li>
					<li title="辽宁省博物馆"><a target="_black" href="http://www.lnmuseum.com.cn/"><img src="https://www.shenzhenmuseum.com/p/resize_600x448/userfiles/uploadFile/20180611134155.png"></a></li>
					<li title="浙江省博物馆"><a target="_black" href="http://www.zhejiangmuseum.com/zjbwg/index.html"><img src="https://www.shenzhenmuseum.com/p/resize_600x448/userfiles/uploadFile/20180611134118.png"></a></li>
					<li title="陕西历史博物馆"><a target="_black" href="http://www.sxhm.com/"><img src="https://www.shenzhenmuseum.com/p/resize_600x448/userfiles/uploadFile/20180611134017.png"></a></li>
					<li title="河南博物院"><a target="_black" href="http://www.chnmus.net/"><img src="https://www.shenzhenmuseum.com/p/resize_600x448/userfiles/uploadFile/20180611133941.png"></a></li>
					<li title="湖南省博物馆"><a target="_black" href="http://www.hnmuseum.com/"><img src="https://www.shenzhenmuseum.com/p/resize_600x448/userfiles/uploadFile/20180611133909.png"></a></li>
					<li title="湖北省博物馆"><a target="_black" href="http://www.hbww.org/home/Index.aspx"><img src="https://www.shenzhenmuseum.com/p/resize_600x448/userfiles/uploadFile/20180611133724.png"></a></li>
					<li title="广东省博物馆"><a target="_black" href="http://www.gdmuseum.com/"><img src="https://www.shenzhenmuseum.com/p/resize_600x448/userfiles/uploadFile/20180611133604.png"></a></li>
					<li title="苏州博物馆"><a target="_black" href="http://www.szmuseum.com/"><img src="https://www.shenzhenmuseum.com/p/resize_600x448/userfiles/uploadFile/20180611133535.png"></a></li>
					<li title="上海博物馆"><a target="_black" href="http://www.shanghaimuseum.net/museum/frontend/"><img src="https://www.shenzhenmuseum.com/p/resize_600x448/userfiles/uploadFile/20180611133453.png"></a></li>
					<li title="首都博物馆"><a target="_black" href="http://www.capitalmuseum.org.cn/"><img src="https://www.shenzhenmuseum.com/p/resize_600x448/userfiles/uploadFile/20180611133333.png"></a></li>
					<li title="南京博物院"><a target="_black" href="http://www.njmuseum.com/html/default.html"><img src="https://www.shenzhenmuseum.com/p/resize_600x448/userfiles/uploadFile/20180611133243.png"></a></li>
					<li title="故宫博物院"><a target="_black" href="http://www.dpm.org.cn/Home.html"><img src="https://www.shenzhenmuseum.com/p/resize_600x448/userfiles/uploadFile/20180611133202.png"></a></li>
					<li title="中国国家博物馆"><a target="_black" href="http://www.chnmuseum.cn/default.aspx?AspxAutoDetectCookieSupport=1"><img src="https://www.shenzhenmuseum.com/p/resize_600x448/userfiles/uploadFile/20180611133108.png"></a></li>
					<li><a></a></li>
					</ul>
			</div>
			<div class="wgfriend_con" v-if="num==1">
				<ul class="clear">
					<li title="Seoul museum htstory"><a target="_black" href="http://chi.museum.seoul.kr/chi/index.do"><img src="https://www.shenzhenmuseum.com/p/resize_600x448/userfiles/uploadFile/20180611145325.png"></a></li>
					<li title="Louvre"><a target="_black" href="https://www.louvre.fr"><img src="https://www.shenzhenmuseum.com/p/resize_600x448/userfiles/uploadFile/20180611135737.png"></a></li>
					<li title="국립중앙박물관"><a target="_black" href="http://www.museum.go.kr/site/main/home"><img src="https://www.shenzhenmuseum.com/p/resize_600x448/userfiles/uploadFile/20180611141048.png"></a></li>
					<li title="东京国立博物馆"><a target="_black" href="http://www.tnm.jp/"><img src="https://www.shenzhenmuseum.com/p/resize_600x448/userfiles/uploadFile/20180611140939.png"></a></li>
					<li title="京都国立博物馆"><a target="_black" href="http://www.kyohaku.go.jp/eng/index.html"><img src="https://www.shenzhenmuseum.com/p/resize_600x448/userfiles/uploadFile/20180611140808.png"></a></li>
					<li title="The State Hermitage Museum"><a target="_black" href="http://www.hermitagemuseum.org"><img src="https://www.shenzhenmuseum.com/p/resize_600x448/userfiles/uploadFile/20180611140611.png"></a></li>
					<li title="V&amp;A"><a target="_black" href="https://www.vam.ac.uk/"><img src="https://www.shenzhenmuseum.com/p/resize_600x448/userfiles/uploadFile/20180611140258.png"></a></li>
					<li title="THEMET"><a target="_black" href="https://www.metmuseum.org/visit/met-app"><img src="https://www.shenzhenmuseum.com/p/resize_600x448/userfiles/uploadFile/20180611140026.png"></a></li>
					<li title="The British Museum"><a target="_black" href="http://www.britishmuseum.org/"><img src="https://www.shenzhenmuseum.com/p/resize_600x448/userfiles/uploadFile/20180611135559.png"></a></li>
					</ul>
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
       num:0,
       titlenav:['国内博物馆','国外博物馆']
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

.friend_con ul li a img {
    max-height: 200px;
    max-width: 400px;
}
</style>
