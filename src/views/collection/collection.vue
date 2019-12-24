<template>
  <div class="roomContent">
    <header-top :isBanner="isBanner"></header-top>
    <div class="collect_count">
      <p>
        <a href="/index/to?path=web/collection/collect_count">深圳博物馆藏品总目</a>
      </p>
    </div>
    <div class="wrap">
      <div class="collectionWrap">
        <div class="collection comWidth" style="padding-top:10px;">
          <div class="titleBar pb-10">
            <div class="comTitle">
              <a href="#">
                <span class="titleIcon"></span>
                <strong class="titleName">改革开放史</strong>
              </a>
            </div>
           <router-link :to="{path:'/collectionList'}" class="more">查看更多</router-link>
          </div>
          <collection-list></collection-list>
        </div>
      </div>
       <div class="collectionWrap">
        <div class="collection comWidth" style="padding-top:10px;">
          <div class="titleBar pb-10">
            <div class="comTitle">
              <a href="#">
                <span class="titleIcon"></span>
                <strong class="titleName">古代艺术</strong>
              </a>
            </div>
            <a href="#" class="more">查看更多</a>
          </div>
          <collection-list></collection-list>
        </div>
      </div>
       <div class="collectionWrap">
        <div class="collection comWidth" style="padding-top:10px;">
          <div class="titleBar pb-10">
            <div class="comTitle">
              <a href="#">
                <span class="titleIcon"></span>
                <strong class="titleName">深圳历史文化</strong>
              </a>
            </div>
            <a href="#" class="more">查看更多</a>
          </div>
          <collection-list></collection-list>
        </div>
      </div>
       <div class="collectionWrap">
        <div class="collection comWidth" style="padding-top:10px;">
          <div class="titleBar pb-10">
            <div class="comTitle">
              <a href="#">
                <span class="titleIcon"></span>
                <strong class="titleName">自然标本</strong>
              </a>
            </div>
            <a href="#" class="more">查看更多</a>
          </div>
          <collection-list></collection-list>
        </div>
      </div>
    </div>
    <footer-bottom></footer-bottom>
  </div>
</template>
<script>
import header from "../components/header";
import footer from "../components/footer";
import collection from "../components/collection/collectionCount";
import * as API from "api/demo";
export default {
  data() {
    return {
      isBanner: true,
      isPage: false,
      totlePage: 1
    };
  },
  mounted() {this.totlePage<=10?this.isPage = false :this.isPage =true;},
  computed: {},
  methods: {},
  components: {
    "header-top": header,
    "footer-bottom": footer,
    "collection-list": collection
  }
};
</script>
<style scoped>
.collectionWrap {
  background-color: #ffffff;
  position: relative;
  z-index: 2;
}

.collect_count {
  width: 1200px;
  margin: 40px auto 10px;
  border-bottom: 1px solid #bdbdbd;
}
.collect_count p {
  line-height: 20px;
  margin-bottom: 22px;
}
.collect_count p a {
  font-size: 20px;
  color: #333333;
}
.collect_count p:hover a {
  color: #666666;
}

.collect_c {
  opacity: 0.6;
}
.wrap .collectionWrap:nth-child(4) {
  margin-bottom: 40px;
}
</style>
