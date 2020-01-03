<template>
     <!-- 展览照片 -->
     <div>
       <div class="c_imgList">
            <ul class="clear">
              <li class="item" v-for="(item,index) in imgList" :key="index">
                  <router-link :to="{name:'detailByView',query:{resResClazzName:imgqqD.resResClazzName,resId:imgqqD.resId,lang:imgqqD.lang,platform:0,refResClazzName:'CmsPf',id:item.id,pageSize:'',index:index}}">
                  <div class="itemImg">
                    <img
                      alt
                      :src="item.thumbPic"
                      onerror=""
                    />
                  </div>
                </router-link>
              </li>
            </ul>
          </div>
      </div>
</template>
<script>
export default {
  props: ["isPage","imgList","imgqqD"],
  data() {
    return {};
  },
  mounted() {

  }
};
</script>
<style scoped>
/**图片列表 292*292*4**/
.imgList{width:1198px;height: 292px; overflow: hidden;margin-top:15px;}
.imgList li{float:left;width:292px;height: 292px; margin-right: 10px; }

.imgList .itemImg{width:292px; height: 292px; position: relative;line-height:292px;text-align:center}
.imgList .itemImg img{max-width:292px;max-height:292px;}
.imgList ul{width:1210px;}
.imgList .itemText{position: absolute;bottom:-54px;left:0;height:100px;width:100%;background:rgba(0,0,0,0.4);-moz-transition:200ms;-webkit-transition:200ms;transition: 200ms;text-align:left;}
.imgList h3{font-size:16px;line-height: 44px;color:#ffffff;width:292px;box-sizing:border-box;padding:0 30px;white-space:nowrap;overflow: hidden;text-overflow: ellipsis;}
.imgList p{line-height: 24px; font-size:14px;color:#ffffff;width:292px;box-sizing:border-box;padding:0 30px;}

.imgList a:hover .itemText{bottom:0;}

.c_imgList{
	width:1198px;margin-top:15px;
}
.video_box_{
	margin-top:20px;
}
.c_imgList ul{width:1210px;}
.c_imgList li{
	float:left;width:292px;height: 220px; margin-right: 10px;line-height:220px;text-align:center;margin-bottom:30px;
}
.c_imgList li img{
	max-width:292px;
	max-height:220px;
}
</style>