<template>
	<div class="roomContent">
		<header-top :isBanner="isBanner"></header-top>
		<div class="mainWarp">
			<div class="permanent">
				<div class="active_title">
					<h3>常设展览</h3>
				</div>
				<sidee-one></sidee-one>
			</div>
			<div class="special">
				<ul class="title_list">
					<li>专题展览</li>
					<li>展览回顾</li>
					<li>虚拟展厅</li>
				</ul>
				<slide-tow></slide-tow>
			</div>
		</div>
		<footer-bottom></footer-bottom>
	</div>
</template>
<script>
import header from '../components/header'
import footer from '../components/footer'
import slideone from '../components/slideone'
import slidetow from '../components/slidetow'
import * as API from 'api/demo';
export default {
    data() {
        return {
            isBanner: true
        }
    },
    mounted() {
    	
    },
    computed:{

    },
    methods: {

    },
    components: {
        'header-top': header,
        'footer-bottom': footer,
        'sidee-one':slideone,
        'slide-tow':slidetow
    }
}
</script>
<style scoped>
	.topinfo{width:1200px;margin: 0 auto;}
	.topinfo .active_title{padding-left:40px;line-height:56px;background:url(../../assets/img/icons/title-icon.png) no-repeat left center;margin-top:30px;margin-bottom:10px;display:flex;}
	.topinfo .active_title h3{font-size:26px;font-weight:normal;color:#333;}
	.topinfo .infoCont{display: flex;}
	.topinfo .infoCont p{width:684px;font-size:18px;color:#666666;text-align:justify;line-height:35px;padding-left:40px;margin-bottom:15px;display:flex;}
	.topinfo .infoCont p span{text-align:justify;display: block;}
	.topinfo .infoCont p label{width:110px;font-size:16px;max-width:78px;}
	.topinfo .infoCont dt{width:400px;height:400px;margin-left:60px;cursor:pointer;border-radius:5px;}
	.topinfo .infoCont dt img{width:100%;height:100%;object-fit:100%;border-radius:5px;}
	.permanent{width:100%;height:800px;background:#F6F6F6;background-size:100%;padding-top:30px;}
	.permanent .active_title{padding-left:40px;line-height:56px;background:url(../../assets/img/icons/title-icon.png) no-repeat left center;margin-top:30px;margin-bottom:10px;width:1200px;margin: 0 auto;}
	.permanent .active_title h3{font-size:26px;font-weight:normal;color:#333;}
	.special{width:100%;height:710px;background:rgba(240,240,240,1);;padding-top:30px;}
	.special .active_title{padding-left:40px;line-height:56px;background:url(../../assets/img/icons/title-icon.png) no-repeat left center;margin-top:30px;margin-bottom:10px;width:1200px;margin: 0 auto;}
	.special .active_title h3{font-size:26px;font-weight:normal;color:#333;}
	.title_list{display:flex;width:1200px;margin:0 auto;}
	.title_list li{height:56px;line-height:56px;font-size:26px;background:url(../../assets/img/icons/title-icon.png) no-repeat left center;padding-left:60px;margin-right:40px;cursor:pointer;}
	.title_list li:nth-child(1){background:none;color:#333333;}
</style>
