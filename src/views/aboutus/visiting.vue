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
               <div class="aboutUsTextTab ">
                   <ul class="classIndexP aboutUsTextTab-1-tabs">
                       <li  v-for="(item,index) in titleNav" :key="index" @click="num = index" :class="{active:num ==index}">{{item}}</li>
                   </ul>
                <div class="mannger_content" >
                   <div v-show="num ==0" >
                       <div class="visit-service-main deputy_text active">
						<div><h3>一、开放时间</h3>
                        <p>深圳博物馆历史民俗馆、东江游击队指挥部旧址纪念馆、深圳改革开放展览馆</p>
                        <p>开放时间10:00-18:00（17:30停止入场，周一闭馆，重要节假日期间开放，重要节假日后的第一天闭馆）</p>
                        <p>深圳博物馆古代艺术馆暂时闭馆</p></div>
                       <div> <h3>二、观众须知</h3>
                        <p>（1）衣冠不整谢绝进馆。</p>
                        <p>（2）禁止携带宠物进馆。</p>
                        <p>（3）请勿触摸展品。</p>
                        <p>（4）馆内请勿大声喧哗，追逐嬉戏；进入展厅请将移动电话调至静音或震动模式。</p>
                        <p>（5）请保持环境卫生，勿在展厅饮食、吸烟、乱丢废弃物。</p>
                        <p>（6）听从工作人员的安排，保持参观秩序。</p>
                        <p>（7）在展厅内拍摄，禁止使用闪光灯、自拍杆、三脚架，如有需要应向馆方申请许可。</p>
                        <p>（8）大件行李请寄存。</p></div>
                       <div><h3> 三、服务指南 （历史民俗馆）</h3>

<p>（1）借用轮椅、婴儿车，观众可在博物馆大堂服务台咨询和办理。</p>

<p>（2）纪念品商店、书店位于一楼入口旁，出售博物馆相关纪念品、专题书刊。</p>

<p>（3）茶社位于一楼出口旁，可供小憩、用餐。</p></div>
<div><h3>四、定点讲解时间安排（暂时取消）</h3>

<h4>历史民俗馆</h4>

<p>定点讲解服务，具体安排如下：</p>

<p>10:30　古代深圳展览，二楼专题展览</p>

<p>11:00　近代深圳展览，一楼专题展览</p>

<p>14:30　深圳民俗文化展览</p>

<p>15:00　二楼专题展览</p>

<p>15:30　深圳改革开放史展览</p>

<p>16:30　一楼专题展览</p>

<h4>东江游击队指挥部旧址纪念馆</h4>


<p>11:00  叶挺将军与深圳</p>

<p>15:00  叶挺将军与深圳</p>

<p>感兴趣的观众可在规定时间前往相应展厅。如果讲解场次增加、取消或讲解时间调整，请留意广播通知。</p></div>



<div><h3>五、团体预约讲解</h3>


<p>1、20人以上参观团体可通过发函方式向深圳博物馆预约团体讲解。</p>

<p>2、请提前至少3天来函预约，须告知参观团体名称、人数、参观时间、参观内容、讲解语种（普通话、英语）等信息，以及联络人和联络电话，工作人员会致电确认团体讲解的具体事宜（以电话联系内容为准）。</p>

<p>3、团体参观情况如有变更，请提前通知，若无提前通知或迟到15分钟视为放弃预约讲解。</p>

<p>4、我馆将按照收到预约函的先后顺序安排讲解服务，如不符合预约条件或该时段预约名额已满，我馆可提供免费租借的语音导览设备供观众使用。</p>

 

<p>预约传真：历史民俗馆、东江游击队指挥部旧址纪念馆：0755-88125226，深圳改革开放展览馆：0755-82735438</p></div>
						</div>
					</div>
                     <div v-show="num ==1" >
                       <div class="history_main">
		<h3>一、开放时间</h3>
		<p>深圳博物馆历史民俗馆 : 开放时间10:00-18:00（17:30停止入场，周一闭馆，重要节假日期间开放，重要节假日后的第一天闭馆）
		</p>
		<h3>二、交通指引</h3>
		<p>自驾：车辆可停放在市民广场停车场。</p>
		<p>地铁：市民中心站B出口（2号线、4号线）</p>
		<p>公交：市民中心东站（34路、38路、60路、64路、371路、373路、398路、e28路、m347路、m390路、m454路、m459路、m500路、n9路、高峰专线17路）；市民中心站（107路、123路、234路、236路、m262路）</p>
		<h3>三、参观及服务设施指引</h3>
		<div class="service_equip">
			<h4>服务设施</h4>
			<ul>
				<li><span></span>卫生间</li>
				<li><span></span>自动扶梯</li>
				<li><span></span>直梯</li>
				<li><span></span>直饮水</li>
				<li><span></span>消防通道</li>
				<li><span></span>志愿者办公室</li>
				<li><span></span>服务台</li>
				<li><span></span>母婴室</li>
				<li><span></span>自助储物室</li>
				<li><span></span>过道</li>
			</ul>
		</div>
	</div>
					</div>
                     <div v-show="num ==2" >
                       <p>暂时闭馆中</p>
					</div>
                     <div v-show="num ==3" >
                       <div class="history_main">
							<h3>一、开放时间</h3>
							<p>东江游击队指挥部旧址纪念馆: 开放时间10:00-18:00（17:30停止入场，周一闭馆，重要节假日期间开放，重要节假日后的第一天闭馆）</p>
							<h3>二、交通指引</h3>
							<p>地铁：老街地铁站A出口（1号线、3号线）</p>
						</div>
					</div>
                     <div v-show="num ==4" >
                       <div class="history_main">
							<h3>一、开放时间</h3>
							<p>周二至周日10:00-18:00（17:30停止入场，周一闭馆；重要节假日期间开放，节后第一天闭馆。）</p>
							<h3>二、交通指引</h3>
							<p>自驾：车辆可停放在市民广场地下停车场、中心书城地下停车场或路边指定停车位。</p>
							<p>地铁：少年宫站A2出口（3号线、4号线）</p>
							<p>公交:少年宫东站(34路、41路、640路、371路、m459路)</p>
						</div>
					</div>
                </div>
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
import magelist from "../components/aboutus/magelist";
import * as API from "api/demo";
export default {
  data() {
    return {
      isBanner:true,
      isPage: false,
      totlePage: 12,
      num:0,
      titleNav:['参观服务','历史民俗馆','古代艺术馆（暂时闭馆）','东江游击队指挥部旧址纪念馆','深圳改改开放展览馆']
    };
  },
  mounted() {this.totlePage<=10?this.isPage = false :this.isPage =true;},
  computed: {},
  methods: {},
  components: {
    "header-top": header,
    "footer-bottom": footer,
    'ab-nav':aboutnav,
    'mage-list':magelist
  }
};
</script>
<style scoped>
.aboutUsTextTabs{padding: 2px 30px 60px 30px;}
.wrapbox{width: 1200px; margin: 30px auto;border-top: 1px solid #e9e9e9; padding-top: 30px;}
.aboutText{width: 1140px; margin: 0 auto;}
.aboutUsTextWrap{padding:60px 0;position: relative;background: #f3f3f3;}
.aboutUsText {  width: 1200px;margin: 0 auto;}
.aboutUsTextTab-1-tabs{margin-bottom:24px;}
.aboutUsTextTab-1-tabs li{line-height: 54px;color:#999999;font-size:14px;padding:16px;display: inline; cursor: pointer;}
.aboutUsTextTab-1-tabs li:first-child{padding-left:10px;}
.aboutUsTextTab-1-tabs li:hover,.aboutUsTextTab-1-tabs li.active{color:#333333; display: inline;}
.aboutUsTextTab-1-tabs-text{display: none;font-size:16px;color:#333333;line-height: 30px;}
.aboutUsTextTab-1-tabs-text.active{display: block;}
.visit-service-main div{margin-bottom: 30px; line-height:42px; font-size: 16px; color: #666;}
.visit-service-main h3,.visit-service-main h4{ font-weight: bold; font-size: 16px; }
.history_main>h3{
	font-size:16px;
	line-height:40px;
	color:#666666;
	font-weight:bold;
}
.history_main>p{
	font-size:16px;
	color:#666666;
	padding-left:10px;
	line-height:36px;
}
.service_equip{
	width:1140px;
	height:2045px;
	background:url(../../assets/img/history.png) no-repeat center center;
	box-sizing:border-box;
	padding:30px 30px 0;
}
.service_equip h4{
	font-size:20px;
	color:#333333;
	line-height:20px;
}
.service_equip ul{
	padding:30px;
}
.service_equip ul li{
	text-align:left;
	font-size:16px;
	line-height:24px;
	padding-left:22px;
	color:#666666;
	width:140px;
	margin-bottom:20px;
}

.service_equip ul li span{
	display:inline-block;
	width:1px;
	height:10px;
	background:#666666;
	margin:7px 10px 0;
}
</style>
