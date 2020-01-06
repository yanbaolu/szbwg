<template>
  <div class="roomContent">
    <header-top :isBanner="isBanner"></header-top>
     <div id="goTop" v-show="gotop" @click="toTop">
            <p>回到顶部</p>
    </div>
    <div class="navPath_new" style="margin-bottom:47px;">
		<div class="navPath clear">
			 <p class="clear"><i></i><a href="/">首页</a><i></i></p>
			 <p class="clear"><i></i><a href="javascript:;">网站地图</a><i></i></p>
		 </div>
	</div>
    <div class="map-list clear">
		<ul class="clear">
			<!-- 首页 -->
					<li>
						<div class="titleBar">
							<div class="comTitle">
                                 <li><router-link :to="{path:'/'}"><span class="titleIcon"></span><strong class="titleName">首页</strong></router-link></li>
							</div>					
						</div>
						<p class="links">
							<a href="https://itunes.apple.com/cn/app/掌上深博/id1274825452?mt=8" target="_blank">iOS下载</a>
							<a href="http://sj.qq.com/myapp/detail.htm?apkName=com.artron.szm" target="_blank">安卓下载</a>
							</p>
					</li>
					<li><img src="https://www.shenzhenmuseum.com/userfiles//pf//2017/10/31/20171031025948815.jpg" alt="" onerror="javascript:this.src='/static/img/600x300.jpg'"></li>
				<!-- 展览 -->
					<li><img src="https://www.shenzhenmuseum.com/userfiles/uploadFile/20180118143725.jpg" alt="" onerror="javascript:this.src='/static/img/600x300.jpg'"></li>
					<li>			
						<div class="titleBar">
							<div class="comTitle">
								<router-link :to="{path:'exhlist'}"><span class="titleIcon"></span><strong class="titleName">展览</strong></router-link>
							</div>
							
						</div>
						<p class="links">
							 <a href="/exhlist#exhlist">常设展览</a><span></span>
		                       <router-link :to="{path:'topicexhibition'}">专题展览</router-link><span></span>
		                        <a href="/exhlist#review">展览回顾</a><span></span>
		                       <router-link :to="{path:'vexhibition'}">虚拟展厅</router-link>
							</p>
					</li>
				<!-- 首页 -->
					<li>
						<div class="titleBar">
							<div class="comTitle">
								<router-link :to="{path:'collection'}"><span class="titleIcon"></span><strong class="titleName">典藏</strong></router-link>
							</div>					
						</div>
						<p class="links">
							  <router-link :to="{path:'collectionList'}">改革开放史</router-link><span></span>
		                        <router-link :to="{path:'collectionList'}">古代艺术</router-link><span></span>
		                        <router-link :to="{path:'collectionList'}">深圳历史文化</router-link><span></span>
		                        <router-link :to="{path:'collectionList'}">自然标本</router-link>
							</p>
					</li>
					<li><img src="https://www.shenzhenmuseum.com/userfiles//pf//2017/10/31/20171031030804906.jpg" alt="" onerror="javascript:this.src='/static/img/600x300.jpg'"></li>
				<!-- 展览 -->
					<li><img src="https://www.shenzhenmuseum.com/userfiles//pf//2017/10/31/20171031030900045.jpg" alt="" onerror="javascript:this.src='/static/img/600x300.jpg'"></li>
					<li>			
						<div class="titleBar">
							<div class="comTitle">
								<router-link :to="{path:'intangible'}"><span class="titleIcon"></span><strong class="titleName">非遗</strong></router-link>
							</div>
							
						</div>
						<p class="links">
						 <router-link :to="{path:'intangibleNews'}">新闻资讯</router-link><span></span>
		                        <router-link :to="{path:'intangibleToice'}">通知公告</router-link><span></span>
		                        <router-link :to="{path:'intangibleProject'}">非遗项目</router-link><span></span>
		                        <router-link :to="{path:'intangibleInheritance'}">传承人</router-link><span></span>
		                        <router-link :to="{path:'intangibleLaws'}">非遗法规</router-link><span></span>
		                       <router-link :to="{path:'intangibleLaws'}">申报指南</router-link><span></span>
		                        <router-link :to="{path:'videoAll'}">视频库</router-link><span></span>
		                        <router-link :to="{path:'pictureAll'}">图片库</router-link>
							</p>
					</li>
				<!-- 首页 -->
					<li>
						<div class="titleBar">
							<div class="comTitle">
								<router-link :to="{path:'socialisation'}"><span class="titleIcon"></span><strong class="titleName">社教</strong></router-link>
							</div>					
						</div>
						<p class="links">
							 <router-link :to="{path:'socialisation'}" class="active">讲座</router-link><span></span>
		                       <router-link :to="{path:'ammouncer'}">小小讲解员</router-link><span></span>
		                       <router-link :to="{path:'volunteers'}">志愿者</router-link><span></span>
		                       <router-link :to="{path:'reservation'}">活动讲座预约</router-link>
							</p>
					</li>
					<li><img src="https://www.shenzhenmuseum.com/userfiles//pf//2017/10/31/20171031030956495.jpg" alt="" onerror="javascript:this.src='/static/img/600x300.jpg'"></li>
				<!-- 展览 -->
					<li><img src="https://www.shenzhenmuseum.com/userfiles//pf//2017/11/22/20171122033429806.jpg" alt="" onerror="javascript:this.src='/static/img/600x300.jpg'"></li>
					<li>			
						<div class="titleBar">
							<div class="comTitle">
								<router-link :to="{path:'webPublication'}" ><span class="titleIcon"></span><strong class="titleName">学术</strong></router-link>
							</div>
							
						</div>
						<p class="links">
						 <router-link :to="{path:'webPublication'}">论坛</router-link><span></span>
		                        <router-link :to="{path:'monograph'}">专著</router-link><span></span>
		                        <router-link :to="{path:'paper'}">论文</router-link><span></span>
		                        <router-link :to="{path:'library'}">馆刊</router-link><span></span>
		                        <router-link :to="{path:'motal'}">深圳前世今生</router-link>
							</p>
					</li>
				<!-- 首页 -->
					<li>
						<div class="titleBar">
							<div class="comTitle">
								<router-link :to="{path:'cultural'}"><span class="titleIcon"></span><strong class="titleName">文保</strong></router-link>
							</div>					
						</div>
						<p class="links">
							 <router-link :to="{path:'cultural'}">设备</router-link><span></span>
		                        <router-link :to="{path:'qualifications'}">资质</router-link><span></span>
		                        <router-link :to="{path:'case'}">案例</router-link><span></span>
		                        <router-link :to="{path:'project'}">项目</router-link>
							</p>
					</li>
					<li><img src="https://www.shenzhenmuseum.com/userfiles//pf//2017/10/31/20171031031122290.jpg" alt="" onerror="javascript:this.src='/static/img/600x300.jpg'"></li>
				<!-- 展览 -->
					<li><img src="https://www.shenzhenmuseum.com/userfiles//pf//2017/10/31/20171031031205985.jpg" alt="" onerror="javascript:this.src='/static/img/600x300.jpg'"></li>
					<li>			
						<div class="titleBar">
							<div class="comTitle">
								<router-link :to="{path:'publicationshop'}" class="creative_c"><span class="titleIcon"></span><strong class="titleName">文创</strong></router-link>
							</div>
							
						</div>
						<p class="links">
						   <router-link :to="{path:'publicationshop'}">创意商品</router-link><span></span>
		                         <router-link :to="{path:'edemeanor'}">展会风采</router-link><span></span>
		                         <router-link :to="{path:'honor'}">获奖荣誉</router-link><span></span>
		                        <router-link :to="{path:'meeting'}">会议培训</router-link>
							</p>
					</li>
				<!-- 首页 -->
					<li>
						<div class="titleBar">
							<div class="comTitle">
								<router-link :to="{path:'aboutus'}" class="aboutus_c"><span class="titleIcon"></span><strong class="titleName">深博</strong></router-link>
							</div>					
						</div>
						<p class="links">
							 <router-link :to="{path:'aboutus'}">关于深博</router-link><span></span>
		                        <router-link :to="{path:'management'}">管理和建设</router-link><span></span>
		                        <router-link :to="{path:'mhonor'}">博物馆荣誉</router-link><span></span>
		                        <router-link :to="{path:'listdonors'}">捐赠者名录</router-link><span></span>
		                        <router-link :to="{path:'visiting'}">参观服务</router-link><span></span>
		                        <router-link :to="{path:'contact'}">联系我们</router-link>
							</p>
					</li>
					<li><img src="https://www.shenzhenmuseum.com/userfiles//pf//2017/10/31/20171031031252625.jpg" alt="" onerror="javascript:this.src='/static/img/600x300.jpg'"></li>
				</ul></div>
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
.navPathWrap{margin-top:0;background-color: #f3f3f3;}
.map-list{margin:0 auto;width:1200px;}

.map-list ul{font-size: 0;}
.map-list li{width:600px;height: 300px; margin-bottom: 10px;display: inline-block;vertical-align: middle;text-align:center;}
.map-list li img{max-height:300px;max-width:600px;}
.map-list .links{padding-left:96px;text-align:left;line-height:40px;}
.map-list .links a{font-size:18px ;color:#333333;padding:0 20px 0 10px;white-space:nowrap;}
.titleBar{margin-top:80px;}

.titleBar .comTitle{padding-left:60px;}
</style>
