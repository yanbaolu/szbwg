<template>
    <div>
        <ul class="magelist">
            <li><router-link :to="{path:'newsDetail'}" class="clear"><p>深圳博物馆第一党支部开展“不忘初心、牢记使命” 主题教育活动</p><span>2019-12-16</span></router-link></li>
            <li><router-link :to="{path:'newsDetail'}" class="clear"><p>深圳博物馆第一党支部开展“不忘初心、牢记使命” 主题教育活动</p><span>2019-12-16</span></router-link></li>
            <li><router-link :to="{path:'newsDetail'}" class="clear"><p>深圳博物馆第一党支部开展“不忘初心、牢记使命” 主题教育活动</p><span>2019-12-16</span></router-link></li>
            <li><router-link :to="{path:'newsDetail'}" class="clear"><p>深圳博物馆第一党支部开展“不忘初心、牢记使命” 主题教育活动</p><span>2019-12-16</span></router-link></li>
            <li><router-link :to="{path:'newsDetail'}" class="clear"><p>深圳博物馆第一党支部开展“不忘初心、牢记使命” 主题教育活动</p><span>2019-12-16</span></router-link></li>
        </ul>
        <div class="paginationWrap" v-if="isPage">
            <div class="pagination comWidth">
                    <div class="clear leavePage" id="pageContent1"><div class=" pagination comWidth "><p class="pages"><a class="active" href="javascript:;" onclick="page1(1)">1</a> </p><p class="pages"><a href="javascript:;" onclick="page1(2)">2</a> </p>  <span class="page-last" onclick="page1(2)">下一页</span></div></div>
            </div>
	 </div>
    </div>
</template>
<script>
export default {
    props:['isPage']
}
</script>
<style scoped>
.mannger_content>div ul {margin-bottom: 30px;}
.mannger_content>div ul li{
	border-bottom:1px solid #dddddd;
}
.mannger_content>div ul li a{
	display: block;
    color: #333333;
    height: 48px;
    line-height: 48px;
    text-indent:10px;
    font-size: 14px;
    background: url(../../../assets/img/li_pre.png) no-repeat left center;
    background-size: 2px 2px;
    color:#333333;
}
.mannger_content>div ul li a:hover{
	color:#999999;
}
.mannger_content>div ul li a:hover span{
	color:#999999;
}
.mannger_content>div ul li a p{
	float:left;
	font-size:14px;
	width:950px;
	overflow:hidden;
	text-overflow:ellipsis;
	white-space:nowrap;
}
.mannger_content>div ul li a span{
	float:right;
	color:#666666;
	font-size:14px;
}
</style>