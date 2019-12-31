<template>
  <div class="roomContent">
    <header-top :isBanner="isBanner"></header-top>
    <div id="goTop" v-show="gotop" @click="toTop">
      <p>回到顶部</p>
    </div>
    <div class="news_main">
      <div class="navPath_new">
        <div class="navPath clear">
          <p class="clear">
            <i></i>
            <a href="/intangible">非遗</a>
            <i></i>
          </p>
          <p class="clear">
            <i></i>
            <a href="/intangible/pictureAll?pLm=L04&amp;lmType=L0406">图片库</a>
            <i></i>
          </p>
          <p class="clear">
            <i></i>
            <a href="javascript:;">文化和自然遗产日</a>
            <i></i>
          </p>
        </div>
     
      </div>
         <div class="intang_picture_title clear" style="margin-top:30px;">
          <p v-for="(item,index) in yearAll" :key="index" @click="num =index" :class="{active:num==index}">
            <a href="#">{{item}}</a>
          </p>
          <span></span>
          
        </div>
     <!--图片切换组件-->
        <div class="tabimg" v-for="(item,index) in yearAll" :key="index" v-show="num ==index">{{item}}------此处文字是为了显示切换效果可删除
            <tab-img></tab-img>
        </div>
    </div>
 <div class="yeartab">
      <div class="picture_type_list">
    <ul class="swiper-wrapper">
            <li class="swiper-slide">
                <a class="" href="#">
                    <div class="picImg">
                        <img src="https://www.shenzhenmuseum.com/p/userfiles//pf//2018/01/16/20180116092622764.jpg" onerror="this.src='/static/img/bg-1-1.png'">
                        <p>2017</p>
                    </div>
	             </a>
            </li>
            <li class="swiper-slide">
                <a class="" href="#">
                    <div class="picImg">
                        <img src="https://www.shenzhenmuseum.com/p/userfiles//pf//2018/01/16/20180116092622764.jpg" onerror="this.src='/static/img/bg-1-1.png'">
                        <p>2018</p>
                    </div>
	             </a>
            </li>
             <li class="swiper-slide">
                <a class="" href="#">
                    <div class="picImg">
                        <img src="https://www.shenzhenmuseum.com/p/userfiles//pf//2018/01/16/20180116092622764.jpg" onerror="this.src='/static/img/bg-1-1.png'">
                        <p>2019</p>
                    </div>
	             </a>
            </li>
             <li class="swiper-slide">
                <a class="" href="#">
                    <div class="picImg">
                        <img src="https://www.shenzhenmuseum.com/p/userfiles//pf//2018/01/16/20180116092622764.jpg" onerror="this.src='/static/img/bg-1-1.png'">
                        <p>2027</p>
                    </div>
	             </a>
            </li>
             <li class="swiper-slide">
                <a class="" href="#">
                    <div class="picImg">
                        <img src="https://www.shenzhenmuseum.com/p/userfiles//pf//2018/01/16/20180116092622764.jpg" onerror="this.src='/static/img/bg-1-1.png'">
                        <p>2037</p>
                    </div>
	             </a>
            </li>
             <li class="swiper-slide">
                <a class="" href="#">
                    <div class="picImg">
                        <img src="https://www.shenzhenmuseum.com/p/userfiles//pf//2018/01/16/20180116092622764.jpg" onerror="this.src='/static/img/bg-1-1.png'">
                        <p>2047</p>
                    </div>
	             </a>
            </li>
             <li class="swiper-slide">
                <a class="" href="#">
                    <div class="picImg">
                        <img src="https://www.shenzhenmuseum.com/p/userfiles//pf//2018/01/16/20180116092622764.jpg" onerror="this.src='/static/img/bg-1-1.png'">
                        <p>20176</p>
                    </div>
	             </a>
            </li>
             <li class="swiper-slide">
                <a class="" href="#">
                    <div class="picImg">
                        <img src="https://www.shenzhenmuseum.com/p/userfiles//pf//2018/01/16/20180116092622764.jpg" onerror="this.src='/static/img/bg-1-1.png'">
                        <p>2017</p>
                    </div>
	             </a>
            </li>
    </ul>
     <!-- Add Arrows -->
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>
  
 </div>
    <footer-bottom></footer-bottom>
  </div>
</template>
<script>
import header from "../components/header";
import footer from "../components/footer";
import tabimg from "../components/intangible/tabimg";
import * as API from "api/demo";
export default {
  data() {
    return {
      isBanner: false,
      gotop: false,
      isPage: false,
      totlePage: 20,
      news: [],
      toice: [],
      curNumber:0,
      num:0,
      yearAll:['2019','2018','2017','2016','2015','2014','2013','2012','2011','2010'],
      dataImg:[
          {
              imgSrc :'https://www.shenzhenmuseum.com/p/userfiles/uploadPic/20180116092419.jpg',
              name:'1111',
          },
          {
              imgSrc :'https://www.shenzhenmuseum.com/p/userfiles/uploadPic/20180116092354.jpg',
              name:'2222',
          },
          {
              imgSrc :'https://www.shenzhenmuseum.com/p/userfiles/uploadPic/20180116092427.jpg',
              name:'33333',
          },
          {
            imgSrc :'https://www.shenzhenmuseum.com/p/userfiles/uploadPic/20180116092354.jpg',
              name:'114444411',
          },
          {
              imgSrc :'https://www.shenzhenmuseum.com/p/userfiles/uploadPic/20180116092419.jpg',
              name:'55555',
          },
          {
              imgSrc :'https://www.shenzhenmuseum.com/p/userfiles/uploadPic/20180116092427.jpg',
              name:'66666',
          },
          {
             imgSrc :'https://www.shenzhenmuseum.com/p/userfiles/uploadPic/20180116092354.jpg',
              name:'77777',
          },
          {
              imgSrc :'https://www.shenzhenmuseum.com/p/userfiles/uploadPic/20180116092427.jpg',
              name:'88888',
          },
          {
              imgSrc :'https://www.shenzhenmuseum.com/p/userfiles/uploadPic/20180116092419.jpg',
              name:'99999',
          }
      ]
    };
  },
  mounted() {
    //页数显示与否
    this.totlePage <= 5 ? (this.isPage = false) : (this.isPage = true);
    window.addEventListener("scroll", this.handleScroll, true);
    //
    this.init();
    this.tabimg();
  },
  computed: {},
  methods: {
   
 init(){
    $('#curImg img').attr('src',this.dataImg[0].imgSrc);
    $('.picture_title').html(this.dataImg[0].name);
    $('.icurrpage').html(this.curNumber+1);
    $('.totleimg').html(this.dataImg.length)
     $('.small_frame ul li').eq(0).addClass('active')
 },
//     //大图点击上一张
//   bto_prev(){
//       let pCurr = Number($(".bto_left").attr("curN")) - 1;
//       if(pCurr <=0){
//           pCurr =0;
//           this.curNumber = pCurr;
//       }
//       if(pCurr<this.dataImg.length && pCurr>=0){
//            this.curNumber = pCurr;
//              $('.icurrpage').html(pCurr+1);
//           //console.log(pCurr);
//           $('#curImg img').attr('src',this.dataImg[pCurr].imgSrc)
//           $('.picture_title').html(this.dataImg[pCurr].name)
//         $('.small_frame ul').css({
//               left: -pCurr *116+'px',
//           })
//           $('.small_frame ul li').eq(pCurr).addClass('active').siblings().removeClass('active');
//       }
//   },
//   //大图点击下一张
//   bto_next(){
//        let nCurr = Number($(".bto_left").attr("curN")) + 1;
//       if(nCurr >=this.dataImg.length){
//           nCurr =this.dataImg.length-1;
//           this.curNumber = nCurr;
//       }
//       if(nCurr<this.dataImg.length){
//            this.curNumber = nCurr;
//            // console.log(nCurr);
//           $('.icurrpage').html(nCurr+1);
//           $('#curImg img').attr('src',this.dataImg[nCurr].imgSrc)
//           $('.picture_title').html(this.dataImg[nCurr].name);
//           $('.small_frame ul').css({
//               left: -nCurr *116+'px',
//           })
//           $('.small_frame ul li').eq(nCurr).addClass('active').siblings().removeClass('active');
//       }
//   },
//     //点击缩略小图
//   curImg(i,val){
//          this.curNumber =i;
//          $('.icurrpage').html(i+1);
//           $('#curImg img').attr('src',this.dataImg[i].imgSrc)
//           $('.picture_title').html(this.dataImg[i].name)
//           $('.small_frame ul li').eq(i).addClass('active').siblings().removeClass('active');
//   },
//tabimg切换
tabimg(){
    tabSwiper="";
    var tabSwiper= new Swiper('.picture_type_list',{
      slidesPerView: 4,
      spaceBetween: 30,
      slidesPerGroup: 1,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    })
},
    handleScroll() {
      let scrolltop =
        document.documentElement.scrollTop || document.body.scrollTop;

      scrolltop > 30 ? (this.gotop = true) : (this.gotop = false);
    },
    toTop() {
      let top = document.documentElement.scrollTop || document.body.scrollTop;
      // 实现滚动效果
      const timeTop = setInterval(() => {
        document.body.scrollTop = document.documentElement.scrollTop = top -= 50;
        if (top <= 0) {
          clearInterval(timeTop);
        }
      }, 10);
    }
  },
  components: {
    "header-top": header,
    "footer-bottom": footer,
    'tab-img':tabimg,
  }
};
</script>
<style scoped>
body {
  overflow-x: hidden;
}
.intang_picture_title {
  width: 1200px;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 0 60px;
}
.intang_picture_title > p {
  float: left;
  font-size: 14px;
  height: 32px;
  line-height: 30px;
  width: 160px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  margin-bottom: 20px;
}
.intang_picture_title > p a {
  color: #666666;
  font-size: 14px;
  display: inline-block;
}
.intang_picture_title > p::after{
  float: right;
  height: 8px;
  margin: 11px 30px;
  width: 1px;
  background: #dddddd;
  display: block;
  content: '';
}
.intang_picture_title span:nth-of-type(5n) {
  display: none;
}
.intang_picture_title > p:hover a {
  color: #333333;
  border-bottom: 1px solid #333333;
}

.intang_picture_title > p.active a {
  color: #333333;
  border-bottom: 1px solid #333333;
}
.yeartab{
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
}
.picture_type_list {
  width: 1100px;
  margin: 0 auto;
  overflow: hidden;
}
.picture_type_list ul li.swiper{
    width: 237px;
}
.picture_type_list ul li a {
  display: block;
  width: 236px;
  height: 237px;
  background: url(../../assets/img/picture_bg.png) no-repeat center center;
  background-size: 100% 100%;
  text-align: center;
  box-sizing: border-box;
  padding: 18px 0 0 18.5px;
}
.picture_type_list ul li a:hover,
.picture_type_list ul li a.active {
  background: url(../../assets/img/picture_hover.png) no-repeat center center;
  background-size: 100% 100%;
}

.picture_type_list ul li a img {
  max-width: 200px;
  max-height: 200px;
  vertical-align: middle;
}
.picImg {
  width: 200px;
  height: 200px;
  line-height: 200px;
  text-align: center;
  position: relative;
}
.picImg p {
  position: absolute;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  color: #fff;
  width: 200px;
  line-height: 36px;
  height: 36px;
  text-align: left;
  box-sizing: border-box;
  padding: 0 10px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: 16px;
}

.picture_type_list .swiper-button-prev{
  width: 40px;
  height: 80px;
  background: url(../../assets/img/icons/index-prev.png) no-repeat center center;
  background-size: 40px 80px;
}
.picture_type_list .swiper-button-prev:hover {
  background: url(../../assets/img/icons/index-prev-active.png) no-repeat center
    center;
}
.picture_type_list .swiper-button-next {
  width: 40px;
  height: 80px;
  background: url(../../assets/img/icons/index-next.png) no-repeat center center;
  background-size: 40px 80px;
}
.picture_type_list .swiper-button-next:hover {
  background: url(../../assets/img/icons/index-next-active.png) no-repeat center
    center;
}
.picture_type_list .swiper-wrapper{
    width: 1000px!important;
}

</style>
