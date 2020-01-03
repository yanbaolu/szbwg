<template>
    <div>
       <div class="winer_honor">
        <ul id="list3" class="clear"> 
            <li>
               <router-link :to="{path:'newsDetail'}">
                   <div class="honor_img"><img src="https://www.shenzhenmuseum.com/p/userfiles/uploadFile/20180209152849.JPG" onerror="this.src=&quot;/static/img/bg-1-1.png&quot;"><p class="honor_title">文创产品优秀奖和参展优秀组织奖</p></div>
               </router-link></li>
            </ul>
    </div>
       <div class=" paginationWrap" style="z-index: 1001;position: relative;" v-if="isPage">
		<div class="pagination">
			 <div class="clear leavePage" id="pageContent"><div class=" pagination comWidth "><p class="pages"><a class="active" href="javascript:;" onclick="page1(1)">1</a> </p><p class="pages"><a href="javascript:;" onclick="page1(2)">2</a> </p>
             <p class="pages"><a href="javascript:;" onclick="page1(3)">3</a> </p>  <span class="page-last" onclick="page1(2)">下一页</span></div></div>
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
.winer_honor{
    width:1200px;
    margin: 0 auto;
}
.winer_honor ul li{
    float:left;
    margin-right:40px;
    margin-bottom:40px;
}
.winer_honor ul li:nth-child(4n){
    margin-right:0;
}
.winer_honor ul li a{
    display:block;
}
.winer_honor ul li a .honor_img{
    position:relative;
    height:270px;
    width: 270px;
    display:table-cell;
    text-align:center;
    vertical-align: middle;
}
.winer_honor ul li a img{
    max-width:270px;
    max-height:270px;
}
.winer_honor ul li a .honor_title{
    height:48px;
    line-height:48px;
    text-align:left;
    box-sizing:border-box;
    padding:0 50px 0 30px;
    background:rgba(0,0,0,0.4);
    color:#fff;
    font-size:16px;
    position:absolute;
    bottom:0;
    width:100%;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
}
</style>