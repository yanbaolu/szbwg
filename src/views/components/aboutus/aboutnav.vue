<template>
    <div>
        <div class="social_nav">
            <ul class="clearfix">
                <li><router-link :to="{path:'aboutus'}" class="active">关于深博</router-link></li>
                <li><router-link :to="{path:'management'}">管理和建设</router-link></li>
                <li><router-link :to="{path:'mhonor'}">博物馆荣誉</router-link></li>
                <li><router-link :to="{path:'listdonors'}">捐赠者名录</router-link></li>
                <li><router-link :to="{path:'visiting'}">参观服务</router-link></li>
                <li><router-link :to="{path:'contact'}">联系我们</router-link></li>
             
            </ul>
           
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
          
        }
    },
    methods:{
      
    }
}
</script>
<style scope>
.social_nav{
    width: 1200px;
    height:auto;
    margin: 0 auto;
}

.social_nav ul li{
    float:left;
}
.social_nav ul li{
    background:url(../../../assets/img/icons/title-icon.png) no-repeat left center;
    background-size: 14px 14px;
    padding: 0 20px;

}
.social_nav ul li:not(:first-child){
	padding-left:54px;
}
.social_nav ul li a{
    display:block;
    height:51px;
    line-height: 51px;
    font-size:26px;
    color:#999999;
    border-bottom:4px solid #f3f3f3;
    cursor: pointer;
}

.social_nav ul li:first-child{
    background:none;
}
.social_nav ul li a:hover{
    border-bottom: 4px solid #333333;
    color:#333333;
}
.social_nav ul li .router-link-active{
    border-bottom: 4px solid #333333;
    color:#333333;
}
</style>