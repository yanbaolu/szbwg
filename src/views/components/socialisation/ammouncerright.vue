<template>
    <div>

    <ul>
        <li style="margin-top: 20px"><router-link :to="{path:'newsDetail'}">“我讲解·您点赞——我最喜爱的深博小讲解员”评选活动开始啦</router-link></li>
        <li style="margin-top: 20px"><router-link :to="{path:'newsDetail'}">“我讲解·您点赞——我最喜爱的深博小讲解员”评选活动开始啦</router-link></li>
        <li style="margin-top: 20px"><router-link :to="{path:'newsDetail'}">“我讲解·您点赞——我最喜爱的深博小讲解员”评选活动开始啦</router-link></li>
        <li style="margin-top: 20px"><router-link :to="{path:'newsDetail'}">“我讲解·您点赞——我最喜爱的深博小讲解员”评选活动开始啦</router-link></li>
                  
      </ul>
    </div>
</template>
<script>
export default {
   
    data(){
        return{}
    }
}
</script>
<style scope>


.little_ammou_right{
    float:left;
    width: 360px;
    margin-left:120px;
}
.little_ammou_right ul li{
    margin-top:40px;

}
.little_ammou_right ul li a{
    font-size: 14px;
    display:block;
    width: 350px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    color:#414141;
    background: url(../../../assets/img/li_pre.png) no-repeat left center;
    background-size: 2px 2px;
    padding-left:20px;
}
.little_ammou_right ul li a img{
    max-width: 360px;
    max-height: 240px;
}
.little_ammou_right ul li a div{
    position:absolute;
    bottom:-2px;
    width: 100%;
    text-align:left;
    background:rgba(0,0,0,0.6);
}
.little_child_talk p{
    font-size:15px;
    text-indent: 30px;
    color:#fff;
    height: 30px;
    line-height:30px;
}
</style>