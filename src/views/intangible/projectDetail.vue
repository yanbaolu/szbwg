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
	<p class="clear"><i></i><a href="javascript:;">{{indata.name}}</a><i></i></p>
	    </div>
    </div>
		<div class="news_detail_main">
			<div class="news_main" style="margin-bootom:40px;">
        <div class="news_message">
        <p class="inheri_name">
       		{{indata.name}}</p>
        <div class="inheri_title">
			<p>项目类别：{{indata.itemCategory}}</p>
 	 			</div>
        <div class="project_content deputy_text">
           <p v-html="indata.content"></p>
        </div>
 <div class="inheri_video videoList" style="height: 325px;" v-show="isVideo">
            <p class="clear">相关视频:<router-link :to="{path:'intangiblevideo'}">查看更多</router-link></p>
           <!--相关视频-->
           <div class="mt30">
             <in-video :data='data'></in-video>
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
      isVideo:false,
      totlePage: 20,
      news:[],
      toice:[],
      indata:'',
      data:'',
    };
  },
  mounted() {
    //页数显示与否
    this.totlePage <=5 ? (this.isPage = false) : (this.isPage = true);
       window.addEventListener("scroll", this.handleScroll, true);
        this.getDetail();
  },
  computed: {},
  methods: {
      getDetail(){
            let data =this.$route.query;
            //console.log(data)
            API.get2('intangible/items/get',data).then(res => {
                if (res.code == 0) {
                    this.indata = res.data;
                    console.log(this.indata)
                    //console.log(this.data.dateStr)
                    //console.log(res,44444)
                    //是否有视频
                    
                    if(res.data.videoList.length == 0){
                        this.isVideo = false
                    }else{
                        this.isVideo = true;
                        this.data =res.data.videoList;
                        //console.log(this.data)
                    }
                }
            }).catch(err => {
                
            })
        },
     videoClose(){
            
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
