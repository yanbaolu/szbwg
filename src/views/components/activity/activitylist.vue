<template>
    <div>
        <div class="social_main_content">
            <div class="social_active active">
                <ul class="social_ul">
                	<li class="clearfix">
	                 		<router-link :to="{path:'activeDetail'}"><div class="social_img"><img src="https://www.shenzhenmuseum.com/p/userfiles/uploadFile/20191114151456.jpg" alt=""></div></router-link>
	                            <div class="social_intro">
	                            	<router-link :to="{path:'activeDetail'}">
		                                <h4>《传承之道——深圳博物馆藏史部古籍善本（上）》策展人导赏</h4>
		                                <p>活动时间：2019年11月17日(周日)下午15:30-16:30</p>
		                               	<p class="activeP"><span>活动已结束</span></p>
	                            	</router-link></div>
                      </li>
                     	<li class="clearfix">
	                 		<router-link :to="{path:'activeDetail'}"><div class="social_img"><img src="https://www.shenzhenmuseum.com/p/userfiles/uploadFile/20191114151456.jpg" alt=""></div></router-link>
	                            <div class="social_intro">
	                            	<router-link :to="{path:'activeDetail'}">
		                                <h4>《传承之道——深圳博物馆藏史部古籍善本（上）》策展人导赏</h4>
		                                <p>活动时间：2019年11月17日(周日)下午15:30-16:30</p>
		                               	<p class="activeP"><span>活动已结束</span></p>
	                            	</router-link></div>
                      </li>
                      	<li class="clearfix">
	                 		<router-link :to="{path:'activeDetail'}"><div class="social_img"><img src="https://www.shenzhenmuseum.com/p/userfiles/uploadFile/20191114151456.jpg" alt=""></div></router-link>
	                            <div class="social_intro">
	                            	<router-link :to="{path:'activeDetail'}">
		                                <h4>《传承之道——深圳博物馆藏史部古籍善本（上）》策展人导赏</h4>
		                                <p>活动时间：2019年11月17日(周日)下午15:30-16:30</p>
		                               	<p class="activeP"><span>活动已结束</span></p>
	                            	</router-link></div>
                      </li>
                      	<li class="clearfix">
	                 		<router-link :to="{path:'activeDetail'}"><div class="social_img"><img src="https://www.shenzhenmuseum.com/p/userfiles/uploadFile/20191114151456.jpg" alt=""></div></router-link>
	                            <div class="social_intro">
	                            	<router-link :to="{path:'activeDetail'}">
		                                <h4>《传承之道——深圳博物馆藏史部古籍善本（上）》策展人导赏</h4>
		                                <p>活动时间：2019年11月17日(周日)下午15:30-16:30</p>
		                               	<p class="activeP"><span>活动已结束</span></p>
	                            	</router-link></div>
                      </li>
                      	<li class="clearfix">
	                 		<router-link :to="{path:'activeDetail'}"><div class="social_img"><img src="https://www.shenzhenmuseum.com/p/userfiles/uploadFile/20191114151456.jpg" alt=""></div></router-link>
	                            <div class="social_intro">
	                            	<router-link :to="{path:'activeDetail'}">
		                                <h4>《传承之道——深圳博物馆藏史部古籍善本（上）》策展人导赏</h4>
		                                <p>活动时间：2019年11月17日(周日)下午15:30-16:30</p>
		                               	<p class="activeP"><span>活动已结束</span></p>
	                            	</router-link></div>
                      </li>
                      	<li class="clearfix">
	                 		<router-link :to="{path:'activeDetail'}"><div class="social_img"><img src="https://www.shenzhenmuseum.com/p/userfiles/uploadFile/20191114151456.jpg" alt=""></div></router-link>
	                            <div class="social_intro">
	                            	<router-link :to="{path:'activeDetail'}">
		                                <h4>《传承之道——深圳博物馆藏史部古籍善本（上）》策展人导赏</h4>
		                                <p>活动时间：2019年11月17日(周日)下午15:30-16:30</p>
		                               	<p class="activeP"><span>活动已结束</span></p>
	                            	</router-link></div>
                      </li>
					</ul>
            </div>
        </div>
        <div class=" paginationWrap" v-if="isPage">
                <div class=" pagination">
                    <div class="clear leavePage" id="pageContent"><div class=" pagination comWidth "><p class="pages"><a class="active" href="javascript:;" onclick="page(1)">1</a> </p><p class="pages"><a href="javascript:;" onclick="page(2)">2</a> </p><p class="pages"><a href="javascript:;" onclick="page(3)">3</a> </p><p class="pages"><a href="javascript:;" onclick="page(4)">4</a> </p><p class="pages"><a href="javascript:;" onclick="page(5)">5</a> </p><p class="pages"><a href="javascript:;" onclick="page(6)">6</a> </p><p class="pages"> </p><p class="pages"><a href="javascript:;" onclick="page(47)">47</a> </p>  <span class="page-last" onclick="page(2)">下一页</span>
                </div>
             </div>
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
.social_active{
    width:1200px;
    margin: 46px auto 0;
}

.active_lecture{
    width:1200px;
    margin: 46px auto 0;
}

.social_ul li{
    margin-bottom: 40px;
    background:#e9e9e9;
}
.social_ul li a{
    display:block;
}
.social_ul li:hover{
    background:#fff;
    box-shadow: 0 40px 40px #e9e9e9;
}
.social_ul li .social_img{
    height: 240px;
    width: 360px;
    float: left;
    font-size: 0;
    line-height:240px;
    text-align:center;
}
.social_ul li .social_img img{
    max-width:360px;
    max-height: 240px;
}
.social_ul li .social_intro{
    width: 800px;
    height: 240px;
    float: right;
    padding-left:40px;
}
.social_ul li .social_intro h3{
    font-size: 20px;
    height:20px;
    line-height:20px;
    color:#ff6900;
    margin:30px 0 0 -10px;
    font-weight: normal;
}
.social_ul li .social_intro h4{
    font-size:18px;
    color:#464646;
    height:18px;
    line-height:18px;
    margin-top:20px;
    font-weight: normal;
}
.social_ul li .social_intro p{
    font-size:15px;
    height:15px;
    line-height:15px;
    color:#717171;
    margin-top:20px;
}
.social_ul li .social_intro p span{
    color:#4bac35;
    margin-right:25px;
}
.social_ul li .social_intro p.activeP{
	width:120px;
	height:30px;
	background:#fff;
	border-radius:5px;
	text-align:center;
	line-height:30px;
}
.social_ul li .social_intro p.activeP span{
	color:#999999;
	font-size:16px;
	margin-right:0;
}
.social_ul li:hover .social_intro p.activeP{
	background:#e9e9e9;
}
.social_ul li:hover .social_intro p.activeP span{
	color:#fff;
}
.social_ul li .social_intro button{
    height:30px;
    line-height: 30px;
    width: 120px;
    background:#333333;
    color:white;
    font-size:15px;
    border: none;
    border-radius: 8px;
    margin-top:30px;
    outline:none;
}
.social_page{
    width: 780px;
    height:50px;
    line-height: 50px;
    margin: 50px auto 0;
}
.social_page ul li{
    float: left;
    margin:0 25px;
}

</style>
