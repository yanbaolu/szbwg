<template>
  <div class="roomContent">
    <header-top :isBanner="isBanner"></header-top>
  <div class="news_main" style="margin-bottom:40px;">
       <div class="navPath_new" style="margin-bottom:44px;">
		<div class="navPath clear">
        	<p class="clear">
	   		   <i></i><router-link :to="{path:'socialisation'}">社教</router-link><i></i>
	  		 </p>
   		<p true="">
			<i></i>
			<router-link :to="{path:'ammouncer'}">小讲解员</router-link>
			<i></i>
		 </p>
	     <p class="clear"><i></i><a href="javascript:;">{{data.name}}</a><i></i></p>
        </div>
        </div>
        <div class="little_people_m">
            <div class="little_infor clear">
                <div class="little_infor_left  video_content videoList">
                    <h3>{{data.name}}</h3>
                    <p>
	                    	<span>
	                    			{{data.sex}}
		                        </span>
	                    	<span>
	                    		{{data.name}}岁
	                    		</span>
	                    	<span></span>
	                    </p>
	                 <div class="person_info">
                    	<label>个人简介</label><p>：2016年7月加入深博小讲解员团队，现已掌握野生动物标本展览。2016年至2017年5月共为观众讲解110场次，接待团体1场次。</p>
                	</div>
                    </div>
				<div class="little_infor_right">
					<img :src="data.photo" onerror="this.src='/static/img/bg-3-4.png'">
                </div>
            </div>
            
        </div>
        <div class="talk_introduce deputy_text">
           	 <div class="talk_tittle">
	                <h3>讲解介绍</h3>
	            </div>
	            <p></p><p dir="ltr" style="text-align: center;"><img src="https://www.shenzhenmuseum.com/szbwg-cms/userfiles/ueditor/jsp/upload/image/20171026/1509005102355083756.png" title="1509005102355083756.png" alt="image.png"></p><p style="text-align: center;"><strong>胡凌霄现场讲解图</strong></p><p></p>
	          </div>
        <div class="talk_introduce ">
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
      totlePage:1,
      data:'',
    };
  },
  mounted() {this.totlePage<=10?this.isPage = false :this.isPage =true;
  this.getDetail()},
  computed: {},
  methods: { getDetail(){
            let data =this.$route.query;
           // console.log(data)
            API.get2('volunteer/get',data).then(res => {
                if (res.code == 0) {
                    this.data = res.data;
                   
                }
            }).catch(err => {
                
            })
        }},
  components: {
    "header-top": header,
    "footer-bottom": footer,
   
  }
};
</script>
<style scoped>
.little_people_m{
    width: 100%;
    height: 500px;
    background:url(../../assets/img/little_bg.jpg) no-repeat center center;
    background-size:cover;
}
.little_infor{
    width: 1200px;
    margin: 0 auto;
}
.little_infor_left{
    float:left;
    margin:20px 0 0 60px;
    width: 725px;
}
.little_infor_right{
    float:left;
}
.little_infor_left h3{
    line-height:35px;
    font-size:16px;
    color:#333333;
}
.person_info{
    height:144px;
    overflow-y: auto;
}
.person_info>p{
    display: inline-block;
}
.little_infor_left p{
    font-size:16px;
    color:#666666;
    line-height:35px;
    overflow-y:auto; 
}
.little_infor_left>p:first-of-type{
    height:48px;
    line-height: 48px;
}
.little_infor_left p:first-of-type span{
    margin-right:25px;
}
.little_infor_left label{
	font-family:"Microsoft Yahei" !important;
    font-size:16px;
    color:#666666;
    height:35px;
    display:inline-block;
    line-height:35px;
    vertical-align: top;
}
.little_infor_left   .person_info p:last-of-type{
    display:inline-block;
    width: 635px;
    white-space: pre-wrap;
}
.little_infor_right{
    margin:65px 0 0 55px;
    width: 300px;
    height: 400px;
}
.little_infor_right img{
    width: 100%;
    height: 100%;
    border-radius:10px;
}
.infor_video{
    position: relative;
}
.infor_video .play{
    left:32%;
    top:45%;
}
.infor_video video{
    width: 300px;
    height: 168px;
    margin-top:10px;
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
.introduce_img{
    width: 793px;
    height: 602px;
    margin: 30px auto;
}
.introduce_img img{
    width: 100%;
    height: 100%;
}
.introduce_video ul li{
    float:left;
    margin-right:8px;
}
.introduce_video ul li a{
    display:block;
    width: 392px;
    height: 280px;
    position:relative;
}
.introduce_video ul li a video{
    width: 392px;
    height: 220px;
}
.introduce_video ul li a p{
    position:absolute;
    bottom:0;
    height:60px;
    width: 100%;
    line-height:60px;
    font-size:16px;
    background:#e9e9e9;
    text-indent: 30px;
    color:#464646;
}
.active_related{
    margin:5px 0 60px;
}
.active_related h3{
    height:38px;
    line-height:38px;
    font-size:18px;
    color:#333333;
    margin-top:20px;
}
.active_related h3 a{
    float: right;
    color: #6e6e6e;
    font-size: 16px;
}
.active_related ul li{
    float:left;
    margin-right:40px;
}
.active_related ul li:nth-child(4n){
    margin-right:0;
}
.active_related ul li a{
    display:block;
    width: 270px;
    height: 270px;
    line-height:270px;
    text-align:center;
    position:relative;
}
.active_related ul li a img{
    max-width: 270px;
    max-height: 270px;
}
.active_related ul li a p{
    position:absolute;
    bottom:0;
    height:48px;
    width: 100%;
    font-size:16px;
    line-height:48px;
    text-indent: 30px;
    color:#fff;
    background:rgba(0,0,0,0.4);
}
/* 志愿者团队详情 */
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
.team_video video{
	max-width:1200px;
	max-height:600px;
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
</style>
