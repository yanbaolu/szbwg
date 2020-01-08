<template>
    <div>
        <div class="searchResultWrap">
	<p class="keyword-bar">搜索关键词：
	<span class="keyword">深圳</span>
	<span class="total-result">共1763条搜索结果</span>
	</p>
	<ul class="result-list">
		<li>
			<h3>
				<strong>【展览】</strong><i>&nbsp;</i>
				<span title="古代深圳"><a href="/exhibition/detail?resId=1c131aeac07542cfb10de015a5a94e08&amp;resType=CmsExhibition&amp;resSubType=1">古代<span style="color:red">深圳</span></a></span>
			</h3>
			<div class="clear text-img">
				<div class="imgWrap"><img src="http://shenbo.artup.com/p/userfiles//pf//2017/10/11/20171011060055750.jpg" alt=""></div>
				<p class="con">
					当你陶醉在今日<span style="color:red">深圳</span>的辉煌时，是否曾想到勤劳勇敢的先辈为开拓这方热土洒下多少血汗？是否曾看见历史的车轮在这方热土上留下的斑斑轨迹？
<span style="color:red">深圳</span>文博工作者经过多年的艰辛劳动，拂去蒙在历史表面的尘埃，以丰富的文物古迹、人文史料，拾掇出“先民足迹”、“城市开端”、“海洋经济”、“海防重镇”、“古代移民”五个部分的陈列，展示了地处南海之滨的<span style="color:red">深圳</span>，有着6000多年的人类开发史和海洋经济发展史、1700多年的城市史、600多年的海防史、悠久的广府民系和客家移民史，勾勒出古代<span style="color:red">深圳</span>的历史轮廓。</p>	

			</div>				
		</li>
		
		<li>
			<h3>
				<strong>【展览】</strong><i>&nbsp;</i>
				<span title="贞干表微——深圳博物馆馆藏牌匾精品"><a href="/exhibition/detail?resId=52a3325c0f45401d9dca9d3ebae5d67f&amp;resType=CmsExhibition&amp;resSubType=2">贞干表微——<span style="color:red">深圳</span>博物馆馆藏牌匾精品</a></span>
			</h3>
			<div class="clear text-img">
				<!-- 新闻列表有的没有图片这个标签就不显示<div class="imgWrap"></div> -->
				<p class="con">
					匾额是最具中国特色的的文化符号之一。匾额白古为建筑之目，凡有厅堂亭榭之处，都要配上匾额，否则建筑就少了点睛之笔，缺乏灵动之气。其广泛应用于关隘城堡、宫阔王府、园林名胜、坛观寺庙、名门宅第、工商店铺的显赫位置;既有悬挂室外的，也有悬挂室内的，是建筑装饰的重要组成部分。匾额向人们传递历史、政治、文化、风俗、信仰、人物、家族、世系、商业等信息，是中华民族优秀传统文化的重要物证和载体。
作为我国独特的民俗文化现象，匾额白古与仕民文化生活密不可分，其集字、印、雕、色之大成，以凝练的文辞、精湛的书法、深远的寓意，指点江山、减否人物，无论是屋舍装饰、写景状物，还是旌表贺颂、言表抒情，都反映了当时当地社会生活的多元文化内容。
<span style="color:red">深圳</span>博物馆现有匾额藏品五百多块，题词多引经据典，用典多出白经史子集，上下款用语、行文讲究，格式、章</p>	

			</div>				
		</li>
		</ul>
        <div class=" paginationWrap" style="z-index: 2;position: relative;margin-top:30px;" v-if="isPage">
			<div class=" pagination">
	           <div class="cultural_page" id="pageContent"><div class=" pagination comWidth "><p class="pages"><a class="active" href="javascript:;" onclick="page(1)">1</a> </p><p class="pages"><a href="javascript:;" onclick="page(2)">2</a> </p><p class="pages"><a href="javascript:;" onclick="page(3)">3</a> </p><p class="pages"><a href="javascript:;" onclick="page(4)">4</a> </p><p class="pages"><a href="javascript:;" onclick="page(5)">5</a> </p><p class="pages"><a href="javascript:;" onclick="page(6)">6</a> </p><p class="pages"> </p><p class="pages"><a href="javascript:;" onclick="page(177)">177</a> </p>  <span class="page-last" onclick="page(2)">下一页</span>  <span class="page-last" onclick="page(177)">尾页</span></div></div>
		   </div>
	</div>
</div>
    </div>
</template>
<script>
export default {
    props:['isPage'],
    data(){
        return{}
    }
}
</script>
<style scoped>
.searchResultWrap{width:100%;min-height: 550px; background-color:#e9e9e9; padding-bottom: 50px;}
.result-list{width:1200px; margin:0 auto; overflow: hidden;}
.result-list li {border-bottom:1px solid #dddddd;padding-top:16px;padding-bottom:16px;}
.result-list h3{font-size: 20px; color:#333333;line-height: 35px;}
.result-list strong{font-weight: normal;}
.result-list h3 strong{font-weight: normal;margin-left:-10px;}
.result-list span{}
.result-list a{font-size: 20px; color:#333333;}
.result-list .text-img{overflow: hidden;margin-top:10px;width:1200px;}
.result-list .con{font-size: 16px; color:#666666; padding-bottom:12px; line-height: 20px;}
.con{max-height:160px;overflow:hidden;text-overflow:ellipsis;}
.result-list .imgWrap{width:120px;height: 120px;float:left;margin-right: 20px;line-height:120px;text-align:center;}
.result-list .imgWrap img{max-width:120px;max-height:120px;}

.keyword-bar{font-size: 16px; color:#666666;line-height:36px; border:none;width:1200px;margin:20px auto 20px; padding-top: 20px;}
.keyword-bar .keyword{font-size: 16px; color:#ff6900;padding:0 10px; }

.keyword-bar .total-result{font-size: 16px; color:#999999;padding-left:28px;}


</style>