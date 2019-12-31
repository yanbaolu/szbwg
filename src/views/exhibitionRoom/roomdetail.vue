<template>
	<div class="roomContent">
		<header-top :isBanner="isBanner" :bandata="bandata"></header-top>
		<div class="mainWarp">
			<div class="topinfo">
				<div class="active_title">
					<h3>展馆介绍</h3>
				</div>
				<dl class="infoCont">
					<dd>
						<p>位于深圳市民中心A区。建筑用地1.25万平方米，建筑面积3.36万平方米，2008年12月建成开馆。展楼共3层，包括5个基本陈列和2个专题展厅，展览面积1万多平方米。地下一层为文物库房。此外，展楼还建有多功能报告厅、贵宾厅、茶社、纪念品商店等配套服务设施。</p>
						<p>
							<label>开放时间</label> ：
							<span>开放时间10:00-18:00（17:30停止入场，周一闭馆，重要节假日期间开放，重要节假日期间开放）</span>	
						</p>
						<p>
							<label>地　　址</label> ：
							<span>开放时间10:00-18:00（17:30停止入场，周一闭馆）</span>	
						</p>
						<p>
							<label>编　　辑</label> ：
							<span>518026</span>	
						</p>
						<p>
							<label>电　　话</label> ：
							<span>518026-123456789（电话中的内容是什么呢？）</span>	
						</p>
					</dd>
					<dt><img src="../../assets/img/wx_qr.jpg" alt=""></dt>
				</dl>
			</div>
			<div class="permanent">
				<div class="active_title">
					<h3>常设展览</h3>
				</div>
				<sidee-one></sidee-one>
			</div>
			<div class="special">
				<div class="active_title">
					<h3>专题展览</h3>
				</div>
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
            isBanner: true,
			bandata:[{
				thumbPic:'/userfiles//pf//2017/11/29/20171129095418978.jpg'
			}]
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
	.topinfo .active_title{padding-left:40px;line-height:56px;background:url(../../assets/img/icons/title-icon.png) no-repeat left center;margin-top:30px;margin-bottom:10px;}
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
</style>