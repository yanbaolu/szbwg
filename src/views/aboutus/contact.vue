<template>
  <div class="roomContent">
    <header-top :isBanner="isBanner"></header-top>
   
     
    <div class="aboutUsTextWrap">
       <div class="social_main mt50">
     <!--导航-->
         <div class="social_nav">
           <ab-nav></ab-nav>
        </div>
      
        
    </div>
     <!--关于深博-->
           <div class="wrapbox">
              <div class="aboutUsTextTabs">
             <div class="aboutUsTextTab aboutUsTextTab-2 deputy_text active" style="padding-top:16px;">
            <div>
            <h2> 联系我们</h2>
            <p>微信：iszbwg</p>
            <p>微博：weibo.com/shenzhenmuseum</p>
            <p>邮箱：shenzhenmuseum@qq.com</p>
            </div>



<div><h2>历史民俗馆</h2>

<p>地址：广东省深圳市福田区福中路市民中心A区</p>

<p>邮编：518026</p>

<p>电话：0755-88125550 (服务时间：非闭馆日10:00-18:00)</p>

<p>传真：0755-88125226、0755-88125829</p></div>

 

<div><h2>古代艺术馆（暂时闭馆）</h2>

<p>地址：广东省深圳市福田区同心路6号</p>

<p>邮编：518027</p></div>

 

<div>
    <h2>东江游击队指挥部旧址纪念馆</h2>

<p>地址：广东省深圳市罗湖区南庆街13号</p>

<p>邮编：518001</p>

<p>电话：0755-25100385 (服务时间：非闭馆日10:00-18:00)</p>
</div>

 

<div><h2>深圳改革开放展览馆</h2>

<p>地址：深圳市福田区福中路184号（深圳市当代艺术与城市规划馆四楼、五楼）</p>

<p>邮编：518026</p>

<p>电话：0755-82738315/0755-83254753 (服务时间：非闭馆日10:00-18:00)</p>

<p>传真：0755-82735438</p></div>
			 </div>
            </div>
           </div>
        </div>
    <footer-bottom></footer-bottom>
  </div>
</template>
<script>
import header from "../components/header";
import footer from "../components/footer";
import aboutnav from "../components/aboutus/aboutnav";
import * as API from "api/demo";
export default {
    data() {
        return {
            isBanner: true,
            isPage: false,
            totlePage: 12,
            lang:this.$store.getters.getlang,
            bandata:'',
        };
    },
    mounted() { 
      this.totlePage <= 10 ? this.isPage = false : this.isPage = true;
      this.getBaner()
    },
    computed: {},
    methods: {
        //获取banner 
        getBaner(){
            let data ={
                lang:this.lang,
                pageNo:1,
                pageSize:3,
                platform:0
            };
            API.get2('slidePic/page/L0902',data).then(res => {
                if (res.code == 0) {
                    this.bandata = res.data.list;
                    //console.log(this.bandata)
                }
            }).catch(err => {
                
            })
        },
    },
    components: {
        "header-top": header,
        "footer-bottom": footer,
        'ab-nav': aboutnav,
    }
};
</script>
<style scoped>
.aboutUsTextTabs {
    padding: 2px 30px 60px 30px;
}

.wrapbox {
    width: 1200px;
    margin: 30px auto;
    border-top: 1px solid #e9e9e9;
    padding-top: 30px;
}

.aboutText {
    width: 1140px;
    margin: 0 auto;
}

.aboutUsTextWrap {
    padding: 60px 0;
    position: relative;
    background: #f3f3f3;
}

.aboutUsText {
    width: 1200px;
    margin: 0 auto;
}

.aboutUsTextTab-1-tabs {
    margin-bottom: 24px;
}

.aboutUsTextTab-1-tabs li {
    line-height: 54px;
    color: #999999;
    font-size: 14px;
    padding: 16px;
    display: inline;
    cursor: pointer;
}

.aboutUsTextTab-1-tabs li:first-child {
    padding-left: 10px;
}

.aboutUsTextTab-1-tabs li:hover,
.aboutUsTextTab-1-tabs li.active {
    color: #333333;
    display: inline;
}

.aboutUsTextTab-1-tabs-text {
    display: none;
    font-size: 16px;
    color: #333333;
    line-height: 30px;
}

.aboutUsTextTab-1-tabs-text.active {
    display: block;
}

.aboutUsTextTab div {
    margin-top: 30px;
}

.aboutUsTextTab div h2 {
    font-size: 16px;
    color: #666;
    font-weight: bold;
    margin-bottom: 10px;
}
</style>