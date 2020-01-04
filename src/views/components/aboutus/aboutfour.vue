<template>
  <div>
   <ul class="sb_zc" id="list5">
      <li><router-link :to="{path:'newsDetail'}" class="clear"><p>深圳博物馆章程</p><span>2015-04-01</span></router-link></li>
      <li><router-link :to="{path:'newsDetail'}" class="clear"><p>深圳博物馆章程</p><span>2015-04-01</span></router-link></li>
      <li><router-link :to="{path:'newsDetail'}" class="clear"><p>深圳博物馆章程</p><span>2015-04-01</span></router-link></li>
      <li><router-link :to="{path:'newsDetail'}" class="clear"><p>深圳博物馆章程</p><span>2015-04-01</span></router-link></li>
     </ul>
    <div class=" paginationWrap" v-if="isPage">
                <div class=" pagination">
                    <div class="clear leavePage" id="pageContent"><div class=" pagination comWidth "><p class="pages"><a class="active" href="javascript:;" onclick="page(1)">1</a> </p><p class="pages"><a href="javascript:;" onclick="page(2)">2</a> </p><p class="pages"><a href="javascript:;" onclick="page(3)">3</a> </p><p class="pages"><a href="javascript:;" onclick="page(4)">4</a> </p><p class="pages"><a href="javascript:;" onclick="page(5)">5</a> </p><p class="pages"><a href="javascript:;" onclick="page(6)">6</a> </p><p class="pages"> </p><p class="pages"><a href="javascript:;" onclick="page(47)">47</a> </p>  <span class="page-last" onclick="page(2)">下一页</span>
                </div>
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
};
</script>
<style scoped>
.sb_zc li{
	 border-bottom: 1px solid #dddddd;
}
.sb_zc li a{
    display: block;
    color: #333333;
    height: 48px;
    line-height: 48px;
    text-indent: 10px;
    font-size: 14px;
    background: url(../../../assets/img/li_pre.png) no-repeat left center;
    background-size: 2px 2px;
    color: #333333;
}
.sb_zc li a p{
    float: left;
    font-size: 14px;
    width: 950px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-indent:10px;
}
.sb_zc li a span{
    float: right;
    color: #666666;
    font-size: 14px;
}
.pagination{
	background:#f3f3f3;
}
</style>