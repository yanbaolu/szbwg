<template>
    <div>
        	<div class="now_year">
				<div class="now_year_" v-for="(item,index) in year" :key="index" @click="num = index" :class="{active:num ==index}">
						<p>{{item}}</p>
						<span>|</span>
					</div>
				
				</div>
			<div class="sb_content_right">
				<div class="now_year_content deputy_text"  v-for="(item,index) in year" :key="index" @click="num = index" :class="{active:num ==index}">
					<p>{{item}}</p>
                </div>
			</div>
     
    </div>
</template>
<script>
export default {
    data(){
        return{
            num:0,
            year:['1981','1982','1983','1984','1985'],
        }
    }
}
</script>
<style scoped>
.now_year .now_year_ p{
	text-indent:38px;
	color:#666666;
	line-height: 44px;
}

.now_year{
	width:160px;
	float:left;
}
.now_year div{
	margin-left:36px;
	font-size:16px;
}
.now_year div.now_year_:first-child{
	margin-top:0;
}
.now_year div.now_year_:last-child span{
	display:none;
}
.now_year div:hover p{
	font-size:20px;
	color:#333333;
	cursor:pointer;
	text-indent:33px;
}

.now_year div.active p{
	font-size:20px;
	color:#333333;
	cursor:pointer;
	text-indent:33px;
}
.sb_content_right{
	float:left;
	width:980px;
	margin-top:20px;
}
.now_year span{
	margin-left:54px;
	
}
.now_year_content{
	display:none;
}
.now_year_content p{
	color:#666666 !important;
	font-size:16px !important;
}
.now_year_content.active{
	display:block;
	box-sizing:border-box;
	padding-top:12px;
}
.now_year_content.active p{
	font-family:Arial,Helvetica,"PingFang SC","Microsoft Yahei","Microsoft Yahei"!important;
	font-size:16px !important;
	color:#666666 !important;
}
.now_year_content.active p span{
	font-family:"MicrosoftYaHei,Arial" !important;
	font-size:16px !important;
	color:#666666 !important;
}
</style>