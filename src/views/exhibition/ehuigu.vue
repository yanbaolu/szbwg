<template>
	<div class="roomContent">
		<header-top :isBanner="isBanner" :bandata="bandata"></header-top>
		<div class="mainWarp">
			
			<div class="permanent" id="exhlist">
				<div class="active_title">
					<h3>展览回顾</h3>
				</div>
				<e-time></e-time>
			</div>
			
		</div>
		<footer-bottom></footer-bottom>
	</div>
</template>
<script>
import header from '../components/header'
import footer from '../components/footer'
import timeline from '../components/timeline'
import * as API from 'api/demo';
export default {
    data() {
        return {
        	lang:this.$store.getters.getlang,
        	//是否有banner图
			isBanner: false,
			isPageTopic:false,
			totlePageTopic:1,
			totlePage:1,
			//轮播数据
			bandata:'',
			
        }
    },
    mounted() {
		//页数显示与否
		this.totlePage<=10?this.isPage = false :this.isPage =true;
		this.totlePageTopic<=10?this.isPageTopic = false :this.isPageTopic =true;
		//获取banner
		this.getBaner()
    },
    methods: {
		//获取banner
		getBaner(){
		    let data ={
		        lang:this.lang,
		        pageNo:1,
		        pageSize:3,
		        platform:0
		    };
		    API.get2('slidePic/page/L0201',data).then(res => {
		        if (res.code == 0) {
		            this.bandata = res.data.list;
		            //console.log(this.bandata)
		        }
		    }).catch(err => {
		        
		    })
		},
	
    },
    components: {
        'header-top': header,
        'footer-bottom': footer,
        'e-time':timeline,
    }
}
</script>
<style scoped>
    .mainWarp{ background: #fff;}
	.topinfo{width:1200px;margin: 0 auto;}
	.topinfo .active_title{padding-left:40px;line-height:56px;background:url(../../assets/img/icons/title-icon.png) no-repeat left center;margin-top:30px;margin-bottom:10px;display:flex;}
	.topinfo .active_title h3{font-size:26px;font-weight:normal;color:#333;}
	.topinfo .infoCont{display: flex;}
	.topinfo .infoCont p{width:684px;font-size:18px;color:#666666;text-align:justify;line-height:35px;padding-left:40px;margin-bottom:15px;display:flex;}
	.topinfo .infoCont p span{text-align:justify;display: block;}
	.topinfo .infoCont p label{width:110px;font-size:16px;max-width:78px;}
	.topinfo .infoCont dt{width:400px;height:400px;margin-left:60px;cursor:pointer;border-radius:5px;}
	.topinfo .infoCont dt img{width:100%;height:100%;object-fit:100%;border-radius:5px;}
	.forenotice{width:1200px;position: relative;z-index: 2;margin:0 auto 20px;padding-bottom:20px;border-bottom:1px solid #bdbdbd;}
	.forenotice p{color:#333333; font-size:20px;line-height: 20px; padding-top: 40px;}
	.forenotice p:hover{color:#999999;}
	.permanent{width:100%;background:#f0f0f0;background-size:100%;}
	.permanent .active_title{padding-left:40px;line-height:56px;background:url(../../assets/img/icons/title-icon.png) no-repeat left center;width:1200px;margin: 30px auto 10px;}
	.permanent .active_title h3{font-size:26px;font-weight:normal;color:#333;}
	.special{width:100%;padding-top:30px;}
	.special .active_title{padding-left:40px;line-height:56px;background:url(../../assets/img/icons/title-icon.png) no-repeat left center;margin-top:30px;margin-bottom:10px;width:1200px;margin: 0 auto;}
	.special .active_title h3{font-size:26px;font-weight:normal;color:#333;}
	.title_list{display:flex;width:1200px;margin:0 auto;}
	.title_list li{height:56px;line-height:56px;font-size:26px;background:url(../../assets/img/icons/title-icon.png) no-repeat left center;padding-left:40px;margin-right:30px;cursor:pointer;color:#333333;}
	.title_list li:nth-child(2){background:none;color: #ff6900;}
</style>
