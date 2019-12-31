<template>
    <div>
         <div class="picture_detail_main">
        <h1>文化和自然遗产日</h1>
        <h3>—— 2016</h3>
        <div class="picture_img">
          <div class="picture_frame">
            <ul class="clear">
              <li id="curImg">
                <img src=""  /> 
                 <div class="carousel-caption picture_title"></div>
              </li>
            </ul>
          </div>
          <div class="bto_left" @click="bto_prev()"  :curN="curNumber"></div>
          <div class="bto_right" @click="bto_next()" :curN="curNumber"></div>
          <p class="img_page">
            <span class="icurrpage"></span>/<span class="totleimg"></span>
          </p>
        </div>
        <div class="small_picture">
          <div class="small_frame">
            <ul class="clear">
            <li v-for="(item,i) in dataImg" :key="i" @click="curImg(i,item)">
                <img :src="item.imgSrc"/> 
                 <div class="carousel-caption picture_title">{{item.name}}</div>
              </li>
              
            </ul>
          </div>
          <div class="small_btn_left" @click="bto_prev()" :curN="curNumber"></div>
          <div class="small_btn_right" @click="bto_next()" :curN="curNumber"></div>
        </div>
      </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            curNumber:0,
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
        }
    },
 
   
 methods:{
   init(){
    $('#curImg img').attr('src',this.dataImg[0].imgSrc);
    $('.picture_title').html(this.dataImg[0].name);
    $('.icurrpage').html(this.curNumber+1);
    $('.totleimg').html(this.dataImg.length)
     $('.small_frame ul li').eq(0).addClass('active')
 },
    //大图点击上一张
  bto_prev(){
      let pCurr = Number($(".bto_left").attr("curN")) - 1;
      if(pCurr <=0){
          pCurr =0;
          this.curNumber = pCurr;
      }
      if(pCurr<this.dataImg.length && pCurr>=0){
           this.curNumber = pCurr;
             $('.icurrpage').html(pCurr+1);
          //console.log(pCurr);
          $('#curImg img').attr('src',this.dataImg[pCurr].imgSrc)
          $('.picture_title').html(this.dataImg[pCurr].name)
        $('.small_frame ul').css({
              left: -pCurr *116+'px',
          })
          $('.small_frame ul li').eq(pCurr).addClass('active').siblings().removeClass('active');
      }
  },
  //大图点击下一张
  bto_next(){
       let nCurr = Number($(".bto_left").attr("curN")) + 1;
      if(nCurr >=this.dataImg.length){
          nCurr =this.dataImg.length-1;
          this.curNumber = nCurr;
      }
      if(nCurr<this.dataImg.length){
           this.curNumber = nCurr;
           // console.log(nCurr);
          $('.icurrpage').html(nCurr+1);
          $('#curImg img').attr('src',this.dataImg[nCurr].imgSrc)
          $('.picture_title').html(this.dataImg[nCurr].name);
          $('.small_frame ul').css({
              left: -nCurr *116+'px',
          })
          $('.small_frame ul li').eq(nCurr).addClass('active').siblings().removeClass('active');
      }
  },
    //点击缩略小图
  curImg(i,val){
         this.curNumber =i;
         $('.icurrpage').html(i+1);
          $('#curImg img').attr('src',this.dataImg[i].imgSrc)
          $('.picture_title').html(this.dataImg[i].name)
          $('.small_frame ul li').eq(i).addClass('active').siblings().removeClass('active');
  },
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
    }
}
</script>
<style>

.picture_detail_main {
  width: 1200px;
  margin: 0 auto 20px;
}
.picture_detail_main h1 {
  margin-top: 20px;
  height: 46px;
  line-height: 46px;
  font-size: 26px;
  text-align: center;
  font-weight: normal;
  color: #333333;
  width: 1200px;
}
.picture_detail_main h3 {
  height: 46px;
  line-height: 46px;
  font-size: 24px;
  text-align: center;
  font-weight: normal;
  color: #666666;
  width: 1200px;
}
.picture_img {
  width: 1200px;
  height: 652px;
  box-sizing: border-box;
  position: relative;
}
.picture_frame {
  width: 700px;
  height: 702px;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 26px 25px;
  overflow: hidden;
  background: url(../../../assets/img/icons/bg_frame.jpg) no-repeat center center;
}
.picture_img ul {
  width: 24000px;
  height: 650px;
  overflow: hidden;
}
.picture_img ul li {
  float: left;
  width: 650px;
  height: 650px;
  margin-right: 30px;
  text-align: center;
  line-height: 650px;
}
.picture_frame ul li {
  display: none;
}
.picture_frame ul li:first-child {
  display: block;
}
.picture_img ul li img {
  max-width: 650px;
  max-height: 650px;
  vertical-align: middle;
}
.bto_left {
  position: absolute;
  left: 0;
  top: 305px;
  width: 40px;
  height: 80px;
  background: url(../../../assets/img/icons/index-prev.png) no-repeat center center;
  background-size: 40px 80px;
}
.bto_left.active,
.bto_right.active {
  display: none;
}
.bto_left:hover {
  background: url(../../../assets/img/icons/index-prev-active.png) no-repeat center
    center;
  background-size: 40px 80px;
}
.bto_right {
  position: absolute;
  right: 0;
  top: 305px;
  width: 40px;
  height: 80px;
  box-sizing: border-box;
  background: url(../../../assets/img/icons/index-next.png) no-repeat center center;
  background-size: 40px 80px;
}
.bto_right:hover {
  background: url(../../../assets/img/icons/index-next-active.png) no-repeat center
    center;
  background-size: 40px 80px;
}
.img_page {
  width: 100%;
  font-size: 14px;
  color: #333333;
  text-align: center;
  position: absolute;
  bottom: -70px;
}

.picture_title {
  font-size: 14px;
  color: #666666;
  position: absolute;
  bottom: -365px;
  width: 650px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.small_picture {
  width: 800px;
  height: 140px;
  margin: 64px auto 0;
  position: relative;
  box-sizing: border-box;
  padding: 25px 0;
}

.small_frame {
  width: 580px;
  height: 92px;
position: relative;
  margin: 0 auto;
  overflow: hidden;
}
.small_frame ul {
  width: 3420px;
  height: 92px;
  position: absolute;
  left: 0;
  transition: left .3ms;
}
.small_picture ul li {
  width: 90px;
  height: 90px;
  text-align: center;
  line-height: 90px;
  float: left;
  margin: 0 12px;
  cursor: pointer;
}
.small_picture ul li img {
  max-width: 86px;
  max-height: 86px;
}
.small_picture ul li:hover,
.small_picture ul li.active {
  border: 1px solid #999999;
}

.small_btn_left {
  position: absolute;
  left: 0;
  top: 44px;
  width: 27px;
  height: 50px;
  background: url(../../../assets/img/icons/index-prev.png) no-repeat center center;
  background-size: 27px 50px;
}
.small_btn_left:hover {
  background: url(../../../assets/img/icons/index-prev-active.png) no-repeat center
    center;
  background-size: 27px 50px;
}
.small_btn_right {
  position: absolute;
  right: 0;
  top: 44px;
  width: 27px;
  height: 50px;
  background: url(../../../assets/img/icons/index-next.png) no-repeat center center;
  background-size: 27px 50px;
}
.small_btn_right:hover {
  background: url(../../../assets/img/icons/index-next-active.png) no-repeat center
    center;
  background-size: 27px 50px;
}
.small_btn_left.active,
.small_btn_right.active {
  display: none;
}
</style>