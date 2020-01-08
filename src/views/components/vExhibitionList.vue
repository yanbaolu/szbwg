<template>
  <div class="comWidth">
   <ul class="v-frame clear">
    	<li v-for="(item,index) in vList" :key="index">
            <a :href="item.panorama">
                <div class="v-img" :style="'background:url('+imgurl+item.thumbPic+') no-repeat center center;background-size:100%;'">
                    <div class="v-title">
                        <h3>{{item.name}}</h3>
                        <p>　{{item.exhibitIntroduce}}</p>
                    </div>
                </div>
            </a>
        </li>
        </ul>
	
  </div>
</template>
<script>
export default {
  props:['vList'],
  data() {
    return {
         imgurl:this.$store.getters.getImgUrl,
	};
  },
  mounted() {
	//console.log(this.vList,11111)
  }
};
</script>
<style scoped>
.v-exhibition{
    width: 1200px;
    margin: 35px auto 0;
}
.com_nav{
    box-sizing: border-box;
    padding:40px 0 45px 0;
    font-size:16px;
}
.com_nav a{
    margin:0 10px;
}
.v-frame{
    width: 996px;
    margin: 40px auto;
}
.v-frame li{
    float:left;
    margin:0 20px 60px;
}
.v-frame li a{
    display: block;
}
.v-img{
    width: 292px;
    height: 292px;
    position: relative;
    -moz-transition:200ms;
    -webkit-transition:200ms;
    transition: 200ms;
}
.v-title{
    position: absolute;
    bottom: 0px;
    left: 0;
    width: 100%;
    height: 44px;
    overflow: hidden;
    background: rgba(0,0,0,0.4);
    -moz-transition: 200ms;
    -webkit-transition: 200ms;
    transition: 200ms;
}
.v-title h3{
     font-size: 15px;
     line-height: 44px;
     color: #ffffff;
     width: 228px;
     padding-left:28px;
     text-overflow: ellipsis;
     white-space: nowrap;
     overflow: hidden
 }
.v-title p{
     line-height: 24px;
     font-size: 15px;
     color: #ffffff;
     width: 238px;
     padding-left: 28px;
     padding-bottom: 6px;
 }
.v-frame li a:hover .v-title{
    height:97px;
}
.v-frame li a:hover .v-img{
    -webkit-transform: scale(1.1);-moz-transform: scale(1.1);transform: scale(1.1);
}
</style>