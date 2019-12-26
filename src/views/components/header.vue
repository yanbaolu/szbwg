<template>
	<div class="headerWarp">
		<div class="headerBar">
			<div class="header">
				<div class="comWidth hearderWrap">
					<div class="logo">
		                <a href="#">
		                    <img src="../../assets/img/icons/logo.png" alt="深圳博物馆"  class="logoImg"/>
		                    <img src="../../assets/img/icons/logo-txt.png" alt="深圳博物馆" class="logoTxt" />
		                </a>
            		</div>
            		<nav class="navBar">
            			<ul class="nav-first">
		                    <li><router-link :to="{path:'/'}">首页</router-link></li>
		                    <li><router-link :to="{path:'exhibition'}">展馆</router-link></li>
		                    <li><router-link :to="{path:'exhlist'}">展览</router-link></li>
		                    <li><router-link :to="{path:'collection'}">典藏</router-link></li>
		                    <li><a href="#" class="intang_c">非遗</a></li>
		                    <li><a href="#" class="social_c">社教</a></li>
		                    <li><a href="#" class="acade_c">学术</a></li>
		                    <li><a href="#" class="cultural_c">文保</a></li>
		                    <li><a href="#" class="creative_c">文创</a></li>
		                    <li><a href="#" class="aboutus_c">深博</a></li>
		                </ul>
		                <ol class="nav-sec">
		                    <li class="" style="margin-left:-174px;">
		                    </li>
		                    <!--展馆预留-->
		                    <li class="" style="margin-left:5px;">
		                    	
		                    </li>
		                    <li class="" style="margin-left:16px;">
		                        <a href="/exhlist#exhlist">常设展览</a><span></span>
		                       <router-link :to="{path:'topicexhibition'}">专题展览</router-link><span></span>
		                        <a href="/exhlist#review">展览回顾</a><span></span>
		                       <router-link :to="{path:'vexhibition'}">虚拟展厅</router-link>
		                    </li>
		                    <li class="" style="margin-left:-48px;">
		                        <router-link :to="{path:'collectionList'}">改革开放史</router-link><span></span>
		                        <router-link :to="{path:'collectionList'}">古代艺术</router-link><span></span>
		                        <router-link :to="{path:'collectionList'}">深圳历史文化</router-link><span></span>
		                        <router-link :to="{path:'collectionList'}">自然标本</router-link>
		                    </li>
		                    <li  class="" style="margin-left:-80px;">
		                        <a href="#">新闻资讯</a><span></span>
		                        <a href="#">通知公告</a><span></span>
		                        <a href="#">非遗项目</a><span></span>
		                        <a href="#">传承人</a><span></span>
		                        <a href="#">非遗法规</a><span></span>
		                        <a href="#">申报指南</a><span></span>
		                        <a href="#">视频库</a><span></span>
		                        <a href="#">图片库</a>
		                    </li>

		                    <li  class="" style="margin-left:52px;">
		                        <a href="#">活动</a><span></span>
		                        <a href="#">讲座</a><span></span>
		                        <a href="#">小讲解员</a><span></span>
		                        <a href="#">志愿者</a><span></span>
		                        <a href="#">活动讲座预约</a>
		                    </li>
		                    <li  class="" style="margin-left:250px;">
		                        <a href="#">论坛</a><span></span>
		                        <a href="#">专著</a><span></span>
		                        <a href="#">论文</a><span></span>
		                        <a href="#">馆刊</a><span></span>
		                        <a href="#">深圳前世今生</a>
		                    </li>
		                    <li  class="" style="margin-left:254px;">
		                        <a href="#">设备</a><span></span>
		                        <a href="#">资质</a><span></span>
		                        <a href="#">案例</a><span></span>
		                        <a href="#">项目</a>
		                    </li>
		                    <li class="" style="margin-left:328px;">
		                        <a href="#">创意商品</a><span></span>
		                        <a href="#">展会风采</a><span></span>
		                        <a href="#">获奖荣誉</a><span></span>
		                        <a href="#">会议培训</a>
		                    </li>
		                    <li  class="" style="margin-left:118px;">
		                        <a href="#">关于深博</a><span></span>
		                        <a href="#">管理和建设</a><span></span>
		                        <a href="#">博物馆荣誉</a><span></span>
		                        <a href="#">捐赠者名录</a><span></span>
		                        <a href="#">参观服务</a><span></span>
		                        <a href="#">联系我们</a>
		                    </li>
		                </ol>
            		</nav>
            		<div class="infos">
	                	<div class="personal-center item">
	                    	<span class=""></span>
	                    	<ul class="no-login ">
	    	                    <li class="" style="height:30px" ><a href="#"  >登录</a></li>
	    	                    <li style="height:30px" ><a href="#">注册</a></li>
	    	                </ul>
	                    </div>
	                	<div class="select-language item">
		                    <span id="langua">CN</span>
		                    <ul class="lang_ul">     
		                        <li style="height:30px;"><a href="#" id="StranLink">繁體</a></li>
		                        <li style="height:30px;"><a href="#">EN</a></li>      
		                    </ul>
	                	</div>
		                <div class="search item" id="search"> 
		                </div>
            		</div>
				</div>
			</div>
		</div>
		<!--划过导航背景-->	
		<div class="secNavWrap">
		    <div class="secNav">
				
		    </div>
		</div>
		<!--轮播图-->			
		<div class="poster_banner" v-if="isBanner">
			<div class="slider3">
				<el-carousel trigger="click" :indicator-position="indicator_position">
				    <el-carousel-item>
				        <img src="https://www.shenzhenmuseum.com/p/resize_1920x500/userfiles//pf//2017/11/02/20171102025615012.jpg" alt="">		
				    </el-carousel-item>
				    <el-carousel-item>
				        <img src="https://www.shenzhenmuseum.com/p/resize_1920x500/userfiles//pf//2017/11/02/20171102025615012.jpg" alt="">		
				    </el-carousel-item>
				</el-carousel>
			</div>
		</div>
	</div>
</template>
<script>
    export default {
    	props:['isBanner'],
    	data(){
    		return{
    			indicator_position:''//轮播图只有一张时设置成none
    		}
    	},
    	mounted(){
    		var timernavfirst = null;
		    var _index = 0;
		    var curTag = '';
		    $('.nav-first li').on("mouseenter mouseleave",function(event){
		       if(event.type == "mouseenter"){
		           //鼠标悬浮
		             curTag = $(this).find('a').attr('class'); 
		             _index = $(this).index();
		             //console.log(_index)
		             var len = $('.nav-sec li').eq(_index).find('a').length;
		             clearTimeout(timernavfirst);
		             if(len!=0){ 
		                 $(this).addClass('active');
		                 $('.nav-sec li').eq(_index).addClass('active').siblings().removeClass('active');
		                 $('.secNavWrap').show(); 
		             }else{          

		                 $('.secNavWrap').hide();    
		                 $('.nav-sec li').removeClass('active');
		             }
		          }else if(event.type == "mouseleave"){
		              //鼠标离开
		               clearTimeout(timernavfirst);
		                var _this = this;
		                timernavfirst = setTimeout(function(){  
		                    $('.nav-sec li').eq(_index).removeClass('active');      
		                    $(_this).removeClass('active');
		                    $('.secNavWrap').hide();
		                },500)  
		                if(curTag =="active"){          
		                    $('.nav-first li').eq(_index).find('a').addClass('active')
		                    $('.nav-first li').eq(_index).removeClass('active')
		                }else{
		                    $('.nav-first li').eq(_index).removeClass('active')
		                    $('.nav-first li').eq(_index).find('a').removeClass('active')
		                }
		             }
		    })

		    $('.nav-sec').on("mouseenter mouseleave",function(event){
	             if(event.type == "mouseenter"){
	              //鼠标悬浮
	                clearTimeout(timernavfirst);        
	                $('.nav-first li').eq(_index).addClass('active')
	                $('.nav-first li').eq(_index).find('a').addClass('active');
	             }else if(event.type == "mouseleave"){
	              //鼠标离开
	                $('.secNavWrap').hide();
	                $('.nav-sec li').eq(_index).removeClass('active');      
	                if(curTag =="active"){          
	                    $('.nav-first li').eq(_index).removeClass('active')
	                    $('.nav-first li').eq(_index).find('a').addClass('active');
	                }else{
	                    $('.nav-first li').eq(_index).removeClass('active')
	                    $('.nav-first li').eq(_index).find('a').removeClass('active');
	                }        
	             }
	        })
    	}
    }
</script>
<style>
	a{text-decoration: none;}
	img{width:100%;object-fit:contain;}
	.slider3{height:100%;min-height:300px;}
	.el-carousel--horizontal{height:100%;min-height:300px;}
	.el-carousel__container{height:100%;min-height:300px;}
	.el-carousel__indicator button{background: rgba(0,0,0,0.4);text-indent: -9999px;display: block;width: 30px;height: 8px;margin: 0 5px;outline: 0;-moz-border-radius: 5px;-webkit-border-radius: 5px;border-radius: 5px;}
	.el-carousel__indicator.is-active button{background:#e6b770;text-indent: -9999px;display: block;width: 30px;height: 8px;margin: 0 5px;outline: 0;-moz-border-radius: 5px;-webkit-border-radius: 5px;border-radius: 5px;}
</style>