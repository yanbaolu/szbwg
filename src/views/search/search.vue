<template>
  <div class="roomContent">
    <header-top :isBanner="isBanner"></header-top>
  <div class="search-result-bar-wrap">
	<div class="search-result-bar">
			<form action="/search" method="post" id="searchForm">
					<p class="input-keyword">
						<input type="text" placeholder="请输入搜索关键词" autocomplete="off" name="qKey" id="searchKeywords" value="深圳">
						<input type="hidden" name="resType" id="_resType">
						<input type="hidden" name="pageNo" id="pageNo">
						<input type="hidden" name="pageSize" value="10" id="pageSize">
						
					 	<button class="search-btn"></button>
						
					</p>
			</form>
		<ul class="clear">
               <li v-for="(item,index) in titleNav" @click="num = index" :class="{active:num ==index}" :key="index">
                   <a href="javascript:;">{{item}}</a>
               </li>
	    </ul>
    </div>	
</div>
      <s-list :isPage="isPage"></s-list>
    <footer-bottom></footer-bottom>
  </div>
</template>
<script>
import header from "../components/header";
import footer from "../components/footer";
import searchlist from "../components/search/searchlist"
import * as API from "api/demo";
export default {
  data() {
    return {
      isBanner:false,
      isPage: false,
      totlePage: 12,
      titleNav:['全部','展览','典藏','非遗','新闻'],
      num:0,
    };
  },
  mounted() {this.totlePage<=10?this.isPage = false :this.isPage =true;},
  computed: {},
  methods: {},
  components: {
    "header-top": header,
    "footer-bottom": footer,
    "s-list":searchlist
  }
};
</script>
<style scoped>

.search-result-bar-wrap{width:100%;background-color:#ffffff;padding-bottom:20px;}
.search-result-bar{padding-top:40px;width:1200px; margin:0 auto;}
.search-result-bar .input-keyword{width:500px;height:58px; font-size:0;position: relative; border:1px solid #dddddd;margin-bottom:30px;overflow: hidden;}
.search-result-bar input{font-size:20px;line-height:58px; text-indent: 20px;background:#fff; color:#999999;border:none;width:410px;height: 58px;display: inline-block;vertical-align: middle;padding:0;}
.search-result-bar .search-btn{width:90px;height: 60px;border:none;background: url(../../assets/img/icons/search-1.png) no-repeat center center #ffffff;display: inline-block;vertical-align: middle; position: absolute;}
.search-result-bar-wrap{
    width: 100%;
    margin: 80px auto;
}
.search-result-bar-wrap ul li{
    float: left;
    background:url(../../assets/img/icons/title-icon.png) no-repeat left center;
    background-size:14px 14px;
    padding:0 50px;
}
.search-result-bar-wrap  li{
    font-size: 26px;
    color:#999999;
    border-bottom: 4px solid #fff;
    line-height: 46px;
    display: block;
    cursor: pointer;
}

.search-result-bar-wrap ul li:first-child{
    background:none;    padding-right: 40px;padding-left:10px;
}
.search-result-bar-wrap  li a:hover,.search-result-bar-wrap  li.active a{
    border-bottom: 4px solid #333333; color:#333333;
}

</style>
