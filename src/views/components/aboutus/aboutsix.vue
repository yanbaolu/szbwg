<template>
  <div>
  <ul id="list1" class="expect_team clear">
    <li><router-link :to="{path:'aboutpdetial'}">
    <div class="expect_img"><img src="https://www.shenzhenmuseum.com/p/userfiles//pf//2017/09/26/20170926111401107.jpg"></div>
    <div class="expext_intro"><p>姓<em style="display:inline-block;width:32px;"></em>名：叶杨</p><p>职<em style="display:inline-block;width:32px;"></em>称：研究馆员</p><p><span style="float:left;">职<em style="display:inline-block;width:32px;"></em>务：</span><span style="float:left;width:250px;">深圳博物馆馆长、深圳市非物质文化遗产保护中心主任</span></p><p class="clear"><span style="float:left;">研究方向：</span><span style="float:left;width:250px;">考古学、博物馆学、历史学、文物保护、博物馆建设及管理</span></p></div></router-link></li>
    </ul>
  </div>
</template>
<script>
export default {
  props:['isPage'],
  data(){
    return{}
  }
};
</script>
<style scoped>
.expect_team{
	width: 1200px;
}
.expect_team li{
	float:left;
	margin-bottom:60px;
}
.expect_team li a{
	display:block;
	width: 530px;
	height: 205px;
	overflow: hidden;
}
.expect_team li:nth-child(even){
	margin-left:80px;
}
.expect_img{
	float:left;
	width: 148px;
	height: 198px;
	border:1px solid #dddddd;
}
.expect_img img{
	width: 100%;
	height: 100%;
 }

.expext_intro{
	float:left;
	width: 380px;
}
.expext_intro>p{
	line-height:36px;
	width:330px;
	font-size:16px;
	text-indent:0 !important;
	color:#666666;
	margin-left:40px;
}
</style>