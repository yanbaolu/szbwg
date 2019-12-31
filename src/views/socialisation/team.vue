<template>
  <div class="roomContent">
    <header-top :isBanner="isBanner"></header-top>
   <div class="news_main" style="margin-bottom:40px;">
       <div class="navPath_new mb-48">
			<div class="navPath clear">
	        	<p class="clear">
	        		<i></i>
					<a href="/socialisation?socialIndex=0&amp;curIndex=0">社教</a>
					<i></i>
				 </p>
	        	<p class="clear">
	        		<i></i>
					<a href="/socialisation/index?type=socialisation&amp;curIndex=3">志愿者</a>
					<i></i>
				 </p>
	        	<p class="clear"><i></i><a href="javascript:;">深博志愿者团队</a><i></i></p>
	        </div>
        </div>
        <div class="team_head">
		        <div class="team_video">
		        	<video width="100%" id="teamVideo" src="https://www.shenzhenmuseum.com/p/userfiles/c581bf9bfb904e70bf6fb271206e24d5/20180116/20180116135521209.mp4" poster="https://www.shenzhenmuseum.com/p/userfiles/uploadFile/20180116121008.jpg"></video>
		        	<span class="play" @click="play('https://www.shenzhenmuseum.com/p/userfiles/c581bf9bfb904e70bf6fb271206e24d5/20180116/20180116135521209.mp4')"></span>
		        </div>
			</div>     
	        <div class="talk_introduce deputy_text">
		            <div class="talk_tittle">
		                <h3>深博志愿者团队</h3>
		            </div>
		            <p></p><p style="white-space: normal;"><span style="font-size: 14px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">　　从2007年起，在深圳博物馆就活跃着一支优秀的志愿者团队。经过10年的发展壮大，志愿者已达到一千多人，其中，个人注册志愿者877人，团体志愿者队伍11支。</span></p><p style="white-space: normal;"><span style="font-size: 14px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">　　深博志愿者团队有一套规范的管理制度。报名者须经过面试、培训，考核合格者才能注册成为正式的志愿者。2011年，深圳博物馆成立志愿者自治管理委员会，引导志愿者自主进行招新、培训、考核、宣传策划等。近年，深圳博物馆开创了分级式培训、档案式管理等新方式，还经常举办高质量的培训、讲座、文艺展演以及外出交流学习活动。经过培训，他们发挥专长，为观众提供具有针对性的讲解导览，其中包括为残障观众提供特殊讲解服务，受到广泛赞扬。2010年起，深圳博物馆每年免费举办小讲解员培训班，建立了300多人的小志愿者讲解员团队,为广大青少年树立了榜样。</span></p><p style="white-space: normal;"><span style="font-size: 14px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">　　自治管理委员会下设讲解导览、综合管理、宣传教育推广、活动策划、文体艺术等9个小组，为志愿者量身定做服务计划，为全市志愿者工作提供了重要的经验。</span></p><p style="white-space: normal;"><span style="font-size: 14px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">　　目前，志愿者已全面参与深圳博物馆的咨询引导、秩序维护、展览讲解、教育推广、外出巡展、资料整理等工作，成为博物馆的重要力量和补充。2017年，深圳博物馆新增志愿者186人，参与服务达1万多人次，共计2.1万多小时，讲解场次达到7270场次，接待观众148716人次。在此期间，许多志愿者脱颖而出，成为“专家志愿者”。他们主持历史文化讲座、为其他志愿者辅导英语口语、深入全市基层开展服务，得到媒体的广泛报道。</span></p><p style="white-space: normal;"><span style="font-size: 14px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">　　凭借高质量的志愿者工作和突出的业绩，深圳博物馆近年获得多项表彰及荣誉称号，包括省、市两级“巾帼文明岗”，“2012-2013年度文明示范窗口”，2014年度和2016年度深圳市文化志愿服务“先进单位”和“示范项目”，2016年度“中国博物馆十佳志愿者之星”提名奖。此外，志愿者个人也获得了许多奖项，如“中国博物馆十佳志愿者之星”提名奖，省、市“优秀文化志愿者”，深圳市五星级文化义工，深圳百名优秀志愿者，共青团深圳市直机关优秀志愿者等。</span></p><p></p>
	        </div>
       	<div class="talk_introduce ">
		<!--视频弹窗  -->
        <div class="video_Mask">	
			<div class="video_Wrap">
				<video src="" poster="" id="video_" controls="" autoplay="autoplay"></video>
			</div>
			<div class="close" id="video-close" @click="close()"></div>
		</div>
			
		<div class="active_related">
			</div>
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
      isShow:false,
      totlePage:1
    };
  },
  mounted() {this.totlePage<=10?this.isPage = false :this.isPage =true;},
  computed: {},
  methods: {
     
		   
            close(){
                  $('.video_Mask').hide();
		        $('#video_').get(0).pause();
            },
	
            play(url) {
                    $('.video_Mask').show();
                    $('#video_').attr("src",url);
                    $('#video_').play;
                }
  },
  components: {
    "header-top": header,
    "footer-bottom": footer,
   
  }
};
</script>
<style scoped>
.team_head{
	margin:0 auto;
	width:1200px;
}
.team_video{
	margin:0 auto;
	width:1200px;
	height:600px;
	text-align:center;
	display:table-cell;
	vertical-align:middle;
	position:relative;
}
.team_video .play{
	display:block;
	width:120px;
	height:120px;
	position:absolute;
	left:540px;
	top:240px;
	background:url(../../assets/img/onplay.png) no-repeat center center;
	cursor:pointer;
}
.talk_introduce{
    width: 1200px;
    margin: 25px auto 0;
    clear: both;
}
.talk_tittle{
    padding-left: 40px;
    margin:0 0 20px 10px;
    height: 56px;
    line-height: 56px;
    background: url(../../assets/img/icons/title-icon.png) no-repeat left center;
}
.talk_tittle h3{
    font-size: 26px;
    color: #333333;
    font-weight: normal;
}
.talk_tittle p{
	font-size:16px;
	color:#333333;
}
.talk_tittle h3 a{
    float: right;
    color: #6e6e6e;
    font-size: 14px;
    vertical-align: text-top;
}
.talk_introduce>p{
    width: 1140px;
    line-height:30px;
    font-size:16px;
    padding:0 60px !important;
    color:#666666 !important;
    white-space: pre-wrap;
}
.talk_introduce>p span{
	color:#666666 !important;
}
/*志愿者团队详情*/
.team_video{
	width:1200px;
	height:600px;
	text-align:center;
	line-height:600px;
}
.team_video video{
	max-width:1200px;
	max-height:600px;
}
.news_title a {
    float: right;
    font-size: 15px;
    color: #767676;
}
.little_ammouncer{
    width: 1200px;
    margin: 40px auto 0;
    /* display:none; */
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
</style>
