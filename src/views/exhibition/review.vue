<template>
	<div class="reviewContent">
		<header-top :isBanner="isBanner"></header-top>
		<div class="reviewWarp">
			<div class="active_title">
				<h3>展览回顾</h3>
			</div>
			<time-line></time-line>
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
        'time-line':timeline
    }
}
</script>
<style scoped>
	.active_title{padding-left:40px;line-height:56px;background:url(../../assets/img/icons/title-icon.png) no-repeat left center;margin-top:30px;margin-bottom:10px;width:1200px;margin: 0 auto;margin-top:30px;}
	.active_title h3{font-size:26px;font-weight:normal;color:#333;}
</style>
