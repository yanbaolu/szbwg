<template>
    <div>
        <div class="social_nav">
            <ul class="clearfix">
                <li><router-link :to="{path:'socialisation'}" class="active">讲座</router-link></li>
                <li><router-link :to="{path:'ammouncer'}">小讲解员</router-link></li>
                <li><router-link :to="{path:'volunteers'}">志愿者</router-link></li>
                <li><router-link :to="{path:'reservation'}">活动讲座预约</router-link></li>
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
    padding: 0 40px;

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
    border-bottom:4px solid #fbfbfb;
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