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
		                    <li><router-link :to="{path:'intangible'}">非遗</router-link></li>
							<li><router-link :to="{path:'activity'}">活动</router-link></li>
		                    <li><router-link :to="{path:'socialisation'}" class="social_c">社教</router-link></li>
		                    <li><router-link :to="{path:'webPublication'}" class="acade_c">学术</router-link></li>
		                    <li><router-link :to="{path:'publicationshop'}" class="creative_c">文创</router-link></li>
		                    <li><router-link :to="{path:'aboutus'}" class="aboutus_c">深博</router-link></li>
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
		                        <router-link :to="{path:'intangibleNews'}">新闻资讯</router-link><span></span>
		                        <router-link :to="{path:'intangibleToice'}">通知公告</router-link><span></span>
		                        <router-link :to="{path:'intangibleProject'}">非遗项目</router-link><span></span>
		                        <router-link :to="{path:'intangibleInheritance'}">传承人</router-link><span></span>
		                        <router-link :to="{path:'intangibleLaws'}">非遗法规</router-link><span></span>
		                       <router-link :to="{path:'intangibleLaws'}">申报指南</router-link><span></span>
		                        <router-link :to="{path:'videoAll'}">视频库</router-link><span></span>
		                        <router-link :to="{path:'pictureAll'}">图片库</router-link>
		                    </li>
                            <!--活动预留-->
		                    <li class="" style="margin-left:5px;">
		                    	
		                    </li>
		                    <li  class="" style="margin-left:280px;">
		                       	<router-link :to="{path:'socialisation'}" class="active">讲座</router-link><span></span>
		                       	<router-link :to="{path:'ammouncer'}">小小讲解员</router-link><span></span>
		                       	<router-link :to="{path:'volunteers'}">志愿者</router-link><span></span>
		                       	<router-link :to="{path:'reservation'}">活动讲座预约</router-link>
		                    </li>
		                    <li  class="" style="margin-left:250px;">
		                    	<router-link :to="{path:'cultural'}">文保</router-link><span></span>
		                        <router-link :to="{path:'webPublication'}">论坛</router-link><span></span>
		                        <router-link :to="{path:'monograph'}">专著</router-link><span></span>
		                        <router-link :to="{path:'paper'}">论文</router-link><span></span>
		                        <router-link :to="{path:'library'}">馆刊</router-link><span></span>
		                        <router-link :to="{path:'motal'}">深圳前世今生</router-link>
		                    </li>
		                    <li class="" style="margin-left:480px;">
		                        <router-link :to="{path:'publicationshop'}">创意商品</router-link><span></span>
		                         <router-link :to="{path:'edemeanor'}">展会风采</router-link><span></span>
		                         <router-link :to="{path:'honor'}">获奖荣誉</router-link><span></span>
		                        <router-link :to="{path:'meeting'}">会议培训</router-link>
		                    </li>
		                    <li  class="" style="margin-left:258px;">
		                        <router-link :to="{path:'aboutus'}">关于深博</router-link><span></span>
		                        <router-link :to="{path:'management'}">管理和建设</router-link><span></span>
		                        <router-link :to="{path:'mhonor'}">博物馆荣誉</router-link><span></span>
		                        <router-link :to="{path:'listdonors'}">捐赠者名录</router-link><span></span>
		                        <router-link :to="{path:'visiting'}">参观服务</router-link><span></span>
		                        <router-link :to="{path:'contact'}">联系我们</router-link>
		                    </li>
		                </ol>
            		</nav>
            		<div class="infos">
	                	<div class="personal-center item">
	                    	<span class=""></span>
	                    	<ul class="no-login ">
	    	                    <li class="" style="height:30px" ><router-link :to="{path:'login'}" >登录</router-link></li>
	    	                    <li style="height:30px" ><router-link :to="{path:'register'}">注册</router-link></li>
	    	                </ul>
							<ul class="no-login ">
	    	                    <li class="" style="height:30px" ><router-link :to="{path:'collectExhibit'}" >某某</router-link></li>
	    	                    <li style="height:30px" ><router-link :to="{path:'collectExhibit'}">我的收藏</router-link></li>
								<li style="height:30px" ><router-link :to="{path:'reservation'}">我的预约</router-link></li>
								<li style="height:30px" ><router-link :to="{path:'modifypassword'}">修改密码</router-link></li>
								<li style="height:30px" ><a href="javascript:;">退出</a></li>
	    	                </ul>
	                    </div>
	                	<div class="select-language item">
		                    <span id="langua">CN</span>
		                    <ul class="lang_ul">     
		                        <li style="height:30px;"><a href="#" id="StranLink">繁體</a></li>
		                        <li style="height:30px;"><a href="#">EN</a></li>      
		                    </ul>
	                	</div>
		                <div class="search item" id="search" @click="search()"> 
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
				    <el-carousel-item v-for="(item,index) in bandata">
				        <img :src="imgurl+item.thumbPic" alt="">		
				    </el-carousel-item>
				</el-carousel>
			</div>
		</div>
		<!--搜索-->
		<div class="searchWrap search_hide" >            
		<form action="http://shenbo.artup.com/search" method="post" id="solrSearchForm">
       <p>
        <input type="text" placeholder="请输入搜索关键词" name="qKey" autocomplete="off">
    	  <router-link :to="{path:'search'}" class="search-btn"></router-link>
          </p>
        </form>
      </div>
	</div>
</template>
<script>
    export default {
    	props:['isBanner','bandata'],
    	data(){
    		return{
    			indicator_position:'',//轮播图只有一张时设置成none
				imgurl:this.$store.getters.getImgUrl,
				onoff :true,
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
		},
		methods:{
			search(){
				if(this.onoff){
					$('.searchWrap').show();
				}else{
					$('.searchWrap').hide();
				}
				this.onoff = !this.onoff
			}
		}
    }
</script>
<style>
	a{text-decoration: none;}
	img{width:100%;height:100%;object-fit:contain;}
	.slider3{height:100%;min-height:300px;}
	.el-carousel--horizontal{height:100%;min-height:300px;}
	.el-carousel__container{height:100%;min-height:300px;}
	.el-carousel__indicator button{background: rgba(0,0,0,0.4);text-indent: -9999px;display: block;width: 30px;height: 8px;margin: 0 5px;outline: 0;-moz-border-radius: 5px;-webkit-border-radius: 5px;border-radius: 5px;}
	.el-carousel__indicator.is-active button{background:#e6b770;text-indent: -9999px;display: block;width: 30px;height: 8px;margin: 0 5px;outline: 0;-moz-border-radius: 5px;-webkit-border-radius: 5px;border-radius: 5px;}
</style>