<template>
  <div>
  <div class="sb_even">
		<ul class="clear">
		<li v-for="(item,index) in stroy" :key="index"  @click="num = index" :class="{active:num ==index}">
				<div>
					<p class="even">博物馆记事</p><p>
					</p><p class="year_event">{{item}}</p>
				</div>
				<button>查看</button>
		</li>
		</ul>
	</div>
	<div class="sb_event_main" >
		   <div class="sb_content clear" v-for="(item,index) in stroy" :key="index"  @click="num = index" :class="{active:num ==index}">
			   <!-- {{item}} -->
		       <ev-list></ev-list>
		</div>
		
	</div>
  </div>
</template>
<script>
import eventlist from "./eventlist";
export default {
  props:['isPage'],
  data(){
    return{
		num:0,
		stroy:['1981-1985','1986-1990','1991-1995','1996-2000','2001-2005','2006-2010','2011-2015','2016-2020']
	}
  },
	components: {
		'ev-list':eventlist
	}
};
</script>
<style scoped>
.sb_even{margin-left: 30px;}
.sb_event_main .sb_content{
    display: none;
}
.sb_event_main .sb_content.active{
	display:block;
}
.sb_even ul{
	margin-left:0;
	padding-top:24px;
	width:100%;
}
.sb_even ul li{
	width:124px;
	height:196px;
	margin-right:12px;
	border:4px solid #fff;
	float:left;
	cursor:pointer;	padding-bottom: 8px;
}
.sb_even ul li:nth-child(8){
	margin-right:0;
}
.sb_even ul li div{
	width:116px;
	height:142px;
	border-bottom:1px solid #dddddd;
	margin:0 auto;
	text-align:center;
	box-sizing:border-box;
	padding-top:34px;
}
.sb_even ul li div p{
	text-indent:0 !important;
	font-size:14px;
	color:#333333;
	line-height:14px;
}
.sb_even ul li div .year_event{
	color:#333333;
	margin-top:40px;
}
.sb_even ul li button{
	width:108px;
	height:34px;
	text-align:center;
	line-height:34px;
	margin:6px 4px;
	border:none;
	background:#f3f3f3;
	color:#333333;
	outline:none;

}
.sb_even ul li.active{
	background:#fff;
	border:1px solid #dddddd;
}
.sb_even ul li.active button{
	background:#fff;
}
.sb_even ul li:hover button{
	background:#fff;
}
.sb_event_main{
	margin-top:40px;
}


</style>