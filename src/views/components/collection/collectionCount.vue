<template>
  <div class="imgList7" >
    <ul class="clear">
      <li class="item">
       <router-link :to="{path:'collectiondetial'}">
          <div class="itemImg L0302">
            <img
              src="https://www.shenzhenmuseum.com/p/resize_500x500/userfiles//pf//2017/09/23/20170923113549307.jpg"
              onerror="this.src='/static/img/bg-1-1.png'"
              alt
            />
            <div class="itemText">
              <h3>1987年深圳土地有偿使用拍卖槌</h3>
            </div>
          </div>
       </router-link>
      </li>
      <li class="item">
        <router-link :to="{path:'collectiondetial'}">
          <div class="itemImg L0302">
            <img
              src="https://www.shenzhenmuseum.com/p/resize_500x500/userfiles//pf//2017/10/30/20171030020008453.jpg"
              onerror="this.src='/static/img/bg-1-1.png'"
              alt
            />
            <div class="itemText">
              <h3>1984年邓小平视察深圳时所乘的丰田中巴车</h3>
            </div>
          </div>
        </router-link>
      </li>
      <li class="item">
      <router-link :to="{path:'collectiondetial'}">
          <div class="itemImg L0302">
            <img
              src="https://www.shenzhenmuseum.com/p/resize_500x500/userfiles//pf//2017/09/18/20170918042452276.jpg"
              onerror="this.src='/static/img/bg-1-1.png'"
              alt
            />
            <div class="itemText">
              <h3>1964年马思聪在深圳演出时用“依巴赫”三角钢琴</h3>
            </div>
          </div>
        </router-link>
      </li>
      <li class="item">
       <router-link :to="{path:'collectiondetial'}">
          <div class="itemImg L0302">
            <img
              src="https://www.shenzhenmuseum.com/p/resize_500x500/userfiles//pf//2017/10/30/20171030015315659.jpg"
              onerror="this.src='/static/img/bg-1-1.png'"
              alt
            />
            <div class="itemText">
              <h3>国际贸易中心主楼施工日志</h3>
            </div>
          </div>
         </router-link>
      </li>
    </ul>
     <!--page-->
    <div class="paginationWrap mt50" style="z-index: 2;position: relative;" v-if="isPage">
      <div class="pagination">
        <div class="cultural_page" id="pageContent">
          <div class="pagination comWidth">
            <p class="pages">
              <a class="active" href="javascript:;" onclick="page(1)">1</a>
            </p>
            <p class="pages">
              <a href="javascript:;" onclick="page(2)">2</a>
            </p>
            <p class="pages">
              <a href="javascript:;" onclick="page(3)">3</a>
            </p>
            <p class="pages">
              <a href="javascript:;" onclick="page(4)">4</a>
            </p>
            <p class="pages">
              <a href="javascript:;" onclick="page(5)">5</a>
            </p>
            <p class="pages">
              <a href="javascript:;" onclick="page(6)">6</a>
            </p>
            <span class="page-last" onclick="page(2)">下一页</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</template>
<script>
export default {
  props: ["isPage"],
  data() {
    return {};
  },
  mounted() {}
};
</script>
<style scoped>
.mt50{margin-top: 50px;}
.imgList7 {
  width: 1280px;
  margin: 0 auto;
}
.imgList7 ul li {
  margin-right: 26px;
}
.imgList7 ul li:nth-of-type(4n) {
  margin-right: 0;
}
</style>