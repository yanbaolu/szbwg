<template>
    <div>
        <div class="exhibit-meeting-list">
    	 <ul id="list1" class="clear"><li> 
             <router-link :to="{path:'newsDetail'}"><div class="meeting-img"><img src="https://www.shenzhenmuseum.com/p/userfiles/uploadFile/20190913131454.jpg" onerror="this.src=&quot;/static/img/bg-4-3.png&quot;"></div>
             <div class="meeting-infor">
                 <h3>绽放丝路风采 凸显美美与共  ——深博文创亮相敦煌“一会一节”活动</h3>
                 <p>　　第四届丝绸之路（敦煌）国际文化博览会于2019年8月31日至9月5日在敦煌国际会展中心举行。深圳博物馆应邀参展并获赞誉。　　敦煌“一会一节”活动，即第四届丝绸之路（敦煌）国际文化博览会和第九届敦煌行·丝绸之路国际旅游节。其由国家文化和旅游部、国家广播电视总局、中国国际贸易促进委员会、甘肃省人民政府共同主办，以“文旅繁荣丝路、美丽战胜贫困”为主题，活动从7月30日开幕到9月5日闭幕，历时一个多月。　　本次展会上，深圳博物馆展出“改革开放40周年”和馆藏文物系列文创产品，以及“千年马约里卡——意大利法恩扎国际陶瓷博物馆典藏”“自然的力量——洛杉矶郡艺术博物馆藏古代玛雅艺术品”等专题展览文创产品。其中“时间效率”金万年历、地标建筑充电宝等文创产品备受瞩目，各款精美丝巾也给观众带来丰富的视觉体验，吸引众多专业机构代表和观众到我馆展位参观。　　展会期间，甘肃省人民政府党组成员、副省长何伟等领导到我馆展位参观指导，并对深圳博物馆文创工作给予高度肯定。甘肃广播电视台、酒泉日报等多家媒体对我馆展位进行了采访拍摄。&nbsp;深圳博物馆展位&nbsp;深圳博物馆参展文创产品&nbsp;甘肃广播电视台对深圳博物馆展位进行采访拍摄观众参观深圳博物馆展位</p>
                 </div></router-link></li></ul>
       </div>
       <div class=" paginationWrap" style="z-index: 1001;position: relative;" v-if="isPage">
		<div class="pagination">
			 <div class="clear leavePage" id="pageContent"><div class=" pagination comWidth "><p class="pages"><a class="active" href="javascript:;" onclick="page1(1)">1</a> </p><p class="pages"><a href="javascript:;" onclick="page1(2)">2</a> </p>
             <p class="pages"><a href="javascript:;" onclick="page1(3)">3</a> </p>  <span class="page-last" onclick="page1(2)">下一页</span></div></div>
		</div>
	</div>
    </div>
</template>
<script>
export default {
    props:['isPage'],
    data(){
        return{}
    }
}
</script>
<style scoped>
.exhibit-meeting-list{
    width:1200px;
    margin: 0 auto;
}
.exhibit-meeting-list ul li{
    margin-bottom:40px;
    background:#e9e9e9;
}
.exhibit-meeting-list ul li:hover{
    background:#ffffff;
    box-shadow: 0 40px 40px #e9e9e9;
}
.meeting-infor p{
    font-size:16px;
    line-height:30px;
    color:#666666;
    position: relative; 
    max-height: 120px;
    overflow: hidden;
}
.exhibit-meeting-list ul li:hover .meeting-infor p::after{content: "..."; position: absolute; bottom: 0; right: 0; padding-left: 40px;
background: -webkit-linear-gradient(left, transparent, #fff 55%);
background: -o-linear-gradient(right, transparent, #fff 55%);
background: -moz-linear-gradient(right, transparent, #fff 55%);
background: linear-gradient(to right, transparent, #fff 55%);
}
.exhibit-meeting-list ul li a{
    display:block;
}
.meeting-img{
   float:left;
    width:360px;
    height:240px;
    line-height:238px;
    text-align: center;
}
.meeting-img img{
	max-width:360px;
	max-height:240px;
}
.meeting-infor{
    float:left;
    width: 840px;
    height: 240px;
    box-sizing:border-box;
    padding:25px 40px 0;
}
.meeting-infor h3{
    font-size: 20px;
    color:#333333;
    line-height:50px;
    width:760px;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
}

.meeting-infor p::after{content: "..."; position: absolute; bottom: 0; right: 0; padding-left: 40px;
background: -webkit-linear-gradient(left, transparent, #e9e9e9 55%);
background: -o-linear-gradient(right, transparent, #e9e9e9 55%);
background: -moz-linear-gradient(right, transparent, #e9e9e9 55%);
background: linear-gradient(to right, transparent, #e9e9e9 55%);
}
</style>