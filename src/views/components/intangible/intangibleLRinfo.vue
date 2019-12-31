<template>
  <div>
        <ul>
            <li>
            <router-link :to="{path:'/lawsregulatDetail'}"><h3>广东省文化厅关于省级非物质文化遗产项目代表性传承人认定与管理暂行办法</h3><span>2014-09-29</span></router-link>
            </li>
            <li>
            <router-link :to="{path:'/lawsregulatDetail'}"><h3>广东省非遗保护专项资金管理办法2014年修订版</h3><span>2014-08-15</span></router-link>
            </li>
            <li>
            <router-link :to="{path:'/lawsregulatDetail'}"><h3>广东省非物质文化遗产条例</h3><span>2011-07-29</span></router-link>
            </li>
            <li>
            <router-link :to="{path:'/lawsregulatDetail'}"><h3>广东省实施《中华人民共和国文物保护法》的办法</h3><span>2008-11-28</span></router-link>
            </li>
        </ul>
  </div>
</template>
<script>
export default {
    props:['cnews','ctoice'],
    data() {
        return {
            
        }
    },
    mounted() {    		
    	
    }
}
</script>
<style scoped>
.laws_content ul li{
    border-bottom: 1px solid #dddddd;
}
.laws_content ul li:last-child{
    border-bottom:none;
}

.laws_content ul li a{
    display: block;
    overflow: hidden;
    font-size: 15px;
    color:#333333;
    height: 48px;
    line-height: 48px;
    background: url(../../../assets/img/li_pre.png) no-repeat left center;
    background-size: 2px 2px;
}
.laws_content ul li a:hover{
    color:#999999;
}
.laws_content ul li a:hover span{
	color:#999999;
}
.laws_content ul li a h3{
    float:left;
    font-weight: normal;
    font-size:15px;
    text-indent: 20px;
    width: 900px;
    white-space: nowrap;
    overflow:hidden;
    text-overflow: ellipsis;
}
.laws_content ul li a span{
    float: right;
    color:#666666;
    font-size:14px;
}
</style>