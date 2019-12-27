<template>
    <div>
        <div class="news_main">
        <div class="news_message">
        <div class="news_content">
            <ul id="list1" class="clearfix">
                <li class="item"><router-link :to="{path:'newsDetail'}"><h3>首届非物质文化遗产创意作品展在深圳中心书城拉开帷幕</h3><span>2019-12-20</span></router-link></li>
                <li class="item"><router-link :to="{path:'newsDetail'}"><h3>首届非物质文化遗产创意作品展在深圳中心书城拉开帷幕</h3><span>2019-12-20</span></router-link></li>
                <li class="item"><router-link :to="{path:'newsDetail'}"><h3>首届非物质文化遗产创意作品展在深圳中心书城拉开帷幕</h3><span>2019-12-20</span></router-link></li>
                <li class="item"><router-link :to="{path:'newsDetail'}"><h3>首届非物质文化遗产创意作品展在深圳中心书城拉开帷幕</h3><span>2019-12-20</span></router-link></li>
                <li class="item"><router-link :to="{path:'newsDetail'}"><h3>首届非物质文化遗产创意作品展在深圳中心书城拉开帷幕</h3><span>2019-12-20</span></router-link></li>
                <li class="item"><router-link :to="{path:'newsDetail'}"><h3>首届非物质文化遗产创意作品展在深圳中心书城拉开帷幕</h3><span>2019-12-20</span></router-link></li>
                <li class="item"><router-link :to="{path:'newsDetail'}"><h3>首届非物质文化遗产创意作品展在深圳中心书城拉开帷幕</h3><span>2019-12-20</span></router-link></li>
                <li class="item"><router-link :to="{path:'newsDetail'}"><h3>首届非物质文化遗产创意作品展在深圳中心书城拉开帷幕</h3><span>2019-12-20</span></router-link></li>
                <li class="item"><router-link :to="{path:'newsDetail'}"><h3>首届非物质文化遗产创意作品展在深圳中心书城拉开帷幕</h3><span>2019-12-20</span></router-link></li>
                <li class="item"><router-link :to="{path:'newsDetail'}"><h3>首届非物质文化遗产创意作品展在深圳中心书城拉开帷幕</h3><span>2019-12-20</span></router-link></li>
            </ul>
        </div>
        </div>
        </div>
        <div class=" paginationWrap" style="z-index: 1001;position: relative;" v-if="isPage">
        <div class="pagination">
        <div class="clear leavePage" id="pageContent"><div class=" pagination comWidth "><p class="pages"><a class="active" href="javascript:;" onclick="page(1)">1</a> </p><p class="pages"><a href="javascript:;" onclick="page(2)">2</a> </p><p class="pages"><a href="javascript:;" onclick="page(3)">3</a> </p><p class="pages"><a href="javascript:;" onclick="page(4)">4</a> </p>  <span class="page-last" onclick="page(2)">下一页</span></div></div>
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
<style scope>
.news_main{margin-top: 0!important;}
.news_content{
    margin:25px 0;
}
.news_content ul{
    margin-left:25px;
}
.news_content ul li{
    border-bottom:1px solid #dddddd;
    text-indent: 10px;
}
.news_content ul li:last-child{
    border-bottom: none;
}
.news_content ul li a{
    display:block;
    color:#333333;
    height:48px;
    line-height: 48px;
    font-size: 14px;
    background: url(../../../assets/base/img/li_pre.png) no-repeat left center;
    background-size: 2px 2px;
}
.news_content ul li:hover a h3{
    color:#999999;
}
.news_content ul li:hover a span{
    color:#999999;
}
.news_content ul li a h3{
    float:left;
    font-weight: normal;
    width:900px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color:#333333;
    font-size:14px;
}
.news_content ul li a span{
    float:right;
    color:#666666;
    font-size:12px;
}
</style>