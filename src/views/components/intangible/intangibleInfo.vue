<template>
  <div>
    <ul class="intang_up">
      <li v-for="(item,index) in data" :key="index">
        <router-link :to="{name:'newsDetail',query:{clazzName:item.clazzName,resId:item.resId,index:index}}">
          <h3>{{item.name}}</h3>
          <span>2019-11-23</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
    props:['cnews','ctoice','data'],
    data() {
        return {
            
        }
    },
    mounted() {    		
    	
    }
}
</script>
<style scoped>
	.intang_up li a {
    display: block;
    height:34px;
    line-height: 34px;
    background:url(../../../assets/base/img/li_pre.png) no-repeat left center;
    background-size:2px 2px;
    font-size:14px;
    
}
.intang_up li a.active{
	background:url(../../../assets/base/img/topD.png) no-repeat left center;
	padding-left:20px;
}
.intang_up li a h3{
    float:left;
    font-weight: normal;
    width: 400px;
    color:#333333;
    font-size:14px;
    text-indent: 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.intang_up li a span{
    float:right;
    color:#666666;
    font-size:12px;
}

</style>