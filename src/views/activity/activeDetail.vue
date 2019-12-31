<template>
  <div class="roomContent">
    <header-top :isBanner="isBanner"></header-top>

    <div class="news_main" style="margin-bottom:40px;">
       <div class="navPath_new" style="margin-bottom:44px;">
			<div class="navPath clear">
	         	<p class="clear">
	   		   <i></i><a href="/socialisation/index?socialIndex=0&amp;curIndex=0">社教</a><i></i>
	  		 </p>
   		<p true="">
			<i></i>
			<a href="/socialisation/index?type=socialisation&amp;curIndex=0&amp;pLm=:L05:L0501">活动</a>
			<i></i>
		 </p>
	<p class="clear"><i></i><a href="javascript:;">《传承之道——深圳博物馆藏史部古籍善本（上）》策展人导赏</a><i></i></p>
	       	</div>
       </div>
        <div class="active_content clear">
            <div class="active_left">
                <img src="https://www.shenzhenmuseum.com/p/userfiles/uploadFile/20191114151456.jpg" onerror="this.src='/static/img/bg-4-3.png'">
            </div>
            <div class="active_right">
            	<h4>《传承之道——深圳博物馆藏史部古籍善本（上）》策展人导赏</h4>
                <p>活动时间：2019年11月17日(周日)下午15:30-16:30</p>
               	<p title="深圳博物馆历史民俗馆（市民中心A区）二楼专题展厅">活动地点：深圳博物馆历史民俗馆（市民中心A区）二楼专题展厅</p>
               	</div>
        </div>
        <div class="active_descript">
           <div class="active_title">
	                <h3>活动详情</h3>
	            </div>
	            <div class="deputy_text">
	                <p></p><p><strong>主讲嘉宾：</strong>洪斌</p><p><strong>活动内容：</strong>策展人带着观众品鉴古籍之美，讲述展览中众多面貌近似的古籍各自的来源及其背后的故事。</p><p><strong>活动人数：</strong>30人/场</p><p><strong>活动对象：</strong>10周岁以上</p><p><strong>参与方式：</strong>现场参与</p><p><strong>主讲嘉宾简介：</strong></p><p>　　洪斌，中山大学历史学博士，主要研究方向为魏晋南北朝史，现任职于深圳博物馆历史文化研究部，从事深圳古代史研究及相关策展活动，是本次《传承之道——深圳博物馆藏史部古籍善本展（上）》展览策展团队成员。</p><p><br></p><p></p>
	            </div>
	          </div>
        </div>
    <footer-bottom></footer-bottom>
  </div>
</template>
<script>
import header from "../components/header";
import footer from "../components/footer";
import activity from "../components/activity/activitylist";
import * as API from "api/demo";
export default {
  data() {
    return {
      isBanner:false,
      isPage: false,
      totlePage: 12
    };
  },
  mounted() {this.totlePage<=10?this.isPage = false :this.isPage =true;},
  computed: {},
  methods: {},
  components: {
    "header-top": header,
    "footer-bottom": footer,
  }
};
</script>
<style scoped>
.active_content{
    box-sizing: border-box;
    width: 1200px;
    margin: 0 auto;
    background:#e9e9e9;
}
.active_content ul li a{
    display:block;
    height:240px;
}
.active_left{
    float:left;
    width: 360px;
    height: 240px;
    line-height:240px;
    text-align:center;
}
.active_left img{
    max-width:360px;
    max-height:240px;
}
.active_right{
    float:left;
    margin-left:40px;
    width:800px;
}
.active_right h3{
    font-size: 20px;
    color:#333333;
    line-height: 20px;
    height:20px;
    margin:30px 0 0 -10px;
    font-weight:normal;

}
.active_right h4{
    font-size:18px;
    color:#333333;
    height:18px;
    line-height: 18px;
    margin-top: 20px;
    font-weight:normal;
    width:800px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.active_right p{
    font-size:16px;
    color:#666666;
    height:16px;
    line-height: 16px;
    margin-top:22px;
    width:630px;
    overflow:hidden;
    white-space: nowrap;
    text-overflow:ellipsis;
}
.active_right p span{
    color:#4bac35;
    margin-right:25px;
}
.active_right button{
    height:30px;
    line-height: 30px;
    width: 120px;
    background:#666666;
    color:white;
    font-size:16px !important;
    border: none;
    border-radius: 8px;
    margin-top:30px;
    outline:none;
}

.active_descript{
    width: 1200px;
    margin: 60px auto;
}





</style>
