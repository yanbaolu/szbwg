<template>
    <div>
        <div class="social_main_content">
            <div class="social_active active">
                <ul class="social_ul">
                    <li class="clearfix" v-for="(item,index) in data" :key="index">
                        <router-link :to="{name:'activeDetail',query:{resId:item.resId,clazzName:item.clazzName,type:type}}">
                            <div class="social_img"><img :src="item.thumbPic" alt=""></div>
                        </router-link>
                        <div class="social_intro">
                            <router-link :to="{name:'activeDetail',query:{resId:item.resId,clazzName:item.clazzName,type:type}}">
                                <h4>{{item.name}}</h4>
                                <p>活动时间：{{item.dateStr}}</p>
                                <p><span>正在预约</span>已预约8/100人</p>
                                <p class="activeP" v-if="item.isOver"><span>活动已结束</span></p>
                               
                            </router-link>
                             <button @click="bespeakNow()">预约</button>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="active_pop_up">
		<div class="active_rever" style="height:750px;">
		<div class="active_content_ clear">
			<div class="active_rever_left">
				<img id="activeImg" alt="" src="http://shenbo.artup.com/p/userfiles/uploadFile/20180523144251.jpg">
			</div>
			<div class="active_rever_right">
				<div class="active_pop_up_close" @click="close">
					<img src="../../../assets/img/close.png" alt="">
				</div>
				<div class="active_pop_up_content">
					<h3 id="activeSubTitle"></h3>
					<h3 id="activeTitle">2019环球自然日决赛日程</h3>
					<input type="hidden" id="activeBeaskId" value="">
					<p>活动时间：<span id="activeTime">2020年10月26日—27日</span></p>
					<p><span>费<em style="display:inline-block;width:32px;"></em>用：</span><span id="activeConsume">免费</span></p>
					<p><span>正在预约</span>已预约<span id="activeNum" style="margin-right:0;color:#333333;">8</span>人</p>
				</div>
              
			</div>
              <div class="active_user_message">
			<ul>
				<input type="hidden" id="id" name="id">
				<li><label for="">姓<em style="display:inline-block;width:32px;"></em>名：</label> <input type="text" required="required" id="name"></li>
				<li><label for="">手<em style="display:inline-block;width:8px;"></em>机<em style="display:inline-block;width:8px;"></em>号：</label> <input type="telephone" id="telephone"><span>请确保手机号码输入正确</span></li>
				<li><label for="">预 约人数：</label>
					<select name="" id="bespeakNum"><option value="1">1</option><option value="2">2</option><option value="3">3</option></select>
					<span id="beskNum">一个手机号码最多可预约3个人</span>
				</li>
				<li><button class="determine" @click="sureyy()">确定</button><button class="cancleActive" @click="close()">取消</button></li>
			</ul>
		</div>
		</div>
		<div class="determine_rever">
			<p>预约成功</p>
			<p>姓<em style="display:inline-block;width:32px;"></em>名：<span id="bespeakName">abc</span></p>
			<p>手<em style="display:inline-block;width:32px;"></em>机<em style="display:inline-block;width:8px;"></em>号：<span id="bespeakPhone">13800138000</span></p>
			<p>预约人数：<span id="bespeakNumber">1</span></p>
			<div class="deter_message clear">
				<div class="deter_m_left">
			<img id="img" name="img" src="http://shenbo.artup.com/qrcreate?bg=ffffff&fg=000000&gc=222222&el=L&w=320&m=10&text=CmsActiviteBespeak-5de943083edb4e2badfb1b0f07c4a224">
				</div>
				<div class="deter_m_right">
					<p>预约成功后请将此二维码截图、另存、或打印，</p>
					<p>参加活动时请向工作人员出示</p>
					<p>或进入“活动--&gt;活动预约--&gt;查询预约”</p>
					<p>可再次获取二维码</p>
				</div>
			</div>
		</div>
		</div>
	</div>
    </div>
</template>
<script>
export default {
    props: ['isPage','data','type'],
    data() {
        return {
           
        }
    },
    methods:{
        bespeakNow(val){
            $('.active_pop_up').show();
        },
        close(){
            $('.active_pop_up').hide();
        },
        sureyy(val){
            $('.determine_rever').show();
            $('.active_user_message').hide();
            $('#bespeakName').html($('#name').val());
            $('#bespeakPhone').html($('#telephone').val());
            $('#bespeakNumber').html($('#bespeakNum option:selected').val());
        }
    }
}
</script>
<style scoped>
.social_active {
    width: 1200px;
    margin: 46px auto 0;
}

.active_lecture {
    width: 1200px;
    margin: 46px auto 0;
}

.social_ul li {
    margin-bottom: 40px;
    background: #e9e9e9;
}

.social_ul li a {
    display: block;
}

.social_ul li:hover {
    background: #fff;
    box-shadow: 0 40px 40px #e9e9e9;
}

.social_ul li .social_img {
    height: 240px;
    width: 360px;
    float: left;
    font-size: 0;
    line-height: 240px;
    text-align: center;
}

.social_ul li .social_img img {
    max-width: 360px;
    max-height: 240px;
}

.social_ul li .social_intro {
    width: 800px;
    height: 240px;
    float: right;
    padding-left: 40px;
}

.social_ul li .social_intro h3 {
    font-size: 20px;
    height: 20px;
    line-height: 20px;
    color: #ff6900;
    margin: 30px 0 0 -10px;
    font-weight: normal;
}

.social_ul li .social_intro h4 {
    font-size: 18px;
    color: #464646;
    height: 18px;
    line-height: 18px;
    margin-top: 20px;
    font-weight: normal;
}

.social_ul li .social_intro p {
    font-size: 15px;
    height: 15px;
    line-height: 15px;
    color: #717171;
    margin-top: 20px;
}

.social_ul li .social_intro p span {
    color: #4bac35;
    margin-right: 25px;
}

.social_ul li .social_intro p.activeP {
    width: 120px;
    height: 30px;
    background: #fff;
    border-radius: 5px;
    text-align: center;
    line-height: 30px;
}

.social_ul li .social_intro p.activeP span {
    color: #999999;
    font-size: 16px;
    margin-right: 0;
}

.social_ul li:hover .social_intro p.activeP {
    background: #e9e9e9;
}

.social_ul li:hover .social_intro p.activeP span {
    color: #fff;
}

.social_ul li .social_intro button {
    height: 30px;
    line-height: 30px;
    width: 120px;
    background: #333333;
    color: white;
    font-size: 15px;
    border: none;
    border-radius: 8px;
    margin-top: 30px;
    outline: none;
}

.social_page {
    width: 780px;
    height: 50px;
    line-height: 50px;
    margin: 50px auto 0;
}

.social_page ul li {
    float: left;
    margin: 0 25px;
}

#alReadyNum{
	font-weight:normal;
}
.active_pop_up{
    width: 100%;
    height: 100%;
    background:rgba(0,0,0,0.4);
    position:fixed;
    top:0;
    z-index:10;
    display:none;
    overflow-y: scroll;
}
.active_rever{
    width: 1200px;
    height:650px;
    margin: 0 auto;
    background:#e9e9e9;
    position:relative;
    top:80px;
}

.active_rever_left{
    width: 360px;
    height: 240px;
    float: left;
    margin: 40px 0 0 40px;
    text-align:center;
    line-height:240px;
    font-size:0;
}
.active_rever_left img{
    max-width:360px;
    max-height:240px;
}
.active_rever_right{
    float: left;
    width: 750px;
    height: 220px;
    margin-left:40px;
}
.active_pop_up_close{
    width: 18px;
    height: 18px;
    float: right;
    margin: 20px 20px 0 0;
    cursor: pointer;
}
.active_pop_up_content{
    clear:both;
}
.active_pop_up_content h3{
     height: 46px;
     line-height: 46px;
     font-size: 18px;
     font-weight: normal;
 }
.active_pop_up_content p{
        font-size: 16px;
        color: #717171;
        height: 35px;
        line-height: 35px;
    }
.active_pop_up_content p span{
    white-space: pre;
}
.active_pop_up_content p:last-child span{
    margin-right:23px;
    color:#4bac35;
}
.active_user_message{
    width: 1200px;
    margin: 30px auto;
    clear:both;
}
.active_user_message ul li{
    width: 1200px;
   text-indent: 435px;
    position:relative;
    margin:10px 0;
}
.active_user_message ul li label{
    font-size:16px;
    color:#929292;
    white-space: pre;
}
.active_user_message ul li input{
    width: 180px;
    height: 30px;
    border:1px solid #dddddd;
}
.active_user_message ul li select{
    width: 182px;
    height: 32px;
    border:1px solid #dddddd;
}
.active_user_message ul li span{
    font-size:12px;
    color:#a4a4a4;
    margin-left:30px;
}
.active_user_message ul li:last-child{
    margin-top:40px;
    text-indent: 0;
    text-align: center;
}
.active_user_message ul li button{
    width: 120px;
    height: 40px;
    line-height:40px;
    background:#333333;
    color:white;
    border-radius: 8px;
    border:none;
    outline:none;
}
.active_user_message ul li button:last-child{
    margin-left:50px;
    background:#dddddd;
    color:#7d7d7d;
}
.determine_rever{
    text-indent: 440px;
    display:none;
}
.determine_rever>p{
    height: 45px;
    line-height: 45px;
    font-size: 16px;
    white-space: pre;
}
.determine_rever>p:first-child{
    font-size:24px;
    color:#4bac35;
}
.deter_m_left{
    float: left;
    width: 200px;
    height: 200px;
}
.deter_m_right{
    float:left;
    margin-left:35px;
}
.deter_m_right p{
    height:25px;
    line-height:25px;
    font-size: 16px;
    color: #7c7c7c;
}
.cancel{
    margin-top: 25px;
}
.cancel button{
    width: 120px;
    height: 30px;
    color:#fff;
    background:#999999;
    font-size:16px;
    border:none;
    outline:none;
    border-radius:5px;
}

.active_list .active_content{
    margin-bottom:30px;
    background:#fff;
}
.active_list .active_content li{
    margin-bottom:40px;
    background:#eee;
}
.deter_message{margin-top: 30px;}
</style>