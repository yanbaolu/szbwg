<template>
  <div class="roomContent">
    <header-top :isBanner="isBanner"></header-top>

<div class="activity">
     <div class="social_nav">
            <ul class="clearfix">
                <li><a href="/socialisation/index?type=socialisation&amp;curIndex=0" id="lmAct0" class="active">活动</a></li>
            </ul>
     </div>
    <ac-list :isPage="isPage"></ac-list>
</div>
    <footer-bottom></footer-bottom>
  </div>
</template>
<script>
import header from "../components/header";
import footer from "../components/footer";
import activity from "../components/activity/activitylist";
import * as API from "api/demo";
export default {
  data() {
    return {
      isBanner:false,
      isPage: false,
      totlePage: 12
    };
  },
  mounted() {this.totlePage<=10?this.isPage = false :this.isPage =true;},
  computed: {},
  methods: {},
  components: {
    "header-top": header,
    "footer-bottom": footer,
    'ac-list':activity,
  }
};
</script>
<style scoped>
.activity{margin-top: 130px;}
.social_banner{
    height: 500px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    margin-top: 80px;
}
.social_main{
    width: 100%;
    background: #fbfbfb;
    position: relative;
    z-index:2;
    padding-top:55px;
}

.social_nav{
    width: 1200px;
    height:auto;
    margin: 0 auto;
}

.social_nav ul li{
    float:left;
}
.social_nav ul li{
    background:url(../../assets/img/icons/title-icon.png) no-repeat left center;
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
.social_nav ul li a.active{
    border-bottom: 4px solid #333333;
    color:#333333;
}


</style>
