<template>
	<div class="reviewContent">
		<header-top :isBanner="isBanner"></header-top>
		<div class="reviewWarp">
			<div class="active_title">
				<h3>虚拟展厅</h3>
			</div>
			<v-exhi-list :vList='vList'></v-exhi-list>
			
		</div>	
		 <div class="paginationWrap" style="z-index: 1001;position: relative;" v-if="isPage">
            <div class="pagination">
                <div class="clear leavePage" id="pageContent">
                    <div class=" pagination comWidth ">
                        <span class="page-last" @click="getDetail(pageNum-1)" v-if="pageNum>1">上一页</span>
                        <p class="pages" v-for="(item,index) in dataAll.navigatepageNums">
							<a :class="{active:num==index}" href="javascript:;" @click="getDetail(item)">{{item}}</a> </p>
                        <span class="page-last" @click="getDetail(pageNum+1)">下一页</span>
                    </div>
                </div>
            </div>
            </div>
		<footer-bottom></footer-bottom>
	</div>
</template>
<script>
import header from '../components/header'
import footer from '../components/footer'
import timeline from '../components/timeline'
import vExhibitionList from '../components/vExhibitionList'
import * as API from 'api/demo';
export default {
    data() {
        return {
            lang:this.$store.getters.getlang,
            //是否有banner图
            isBanner: false,
            isPage:false,
            totlePage:14,
			vList:'',
            num:0,
            dataAll:'',
            pageNum:1
        }
    },
    mounted() {
    	//页数显示与否
        this.totlePage<=10?this.isPage = false :this.isPage =true;
		this.getVlist();
		this.getDetail(1)
    },
    computed:{

    },
    methods: {
		 getDetail(item){
            this.num=item-1;
            this.pageNum=item;
            let data ={
                 lang:this.lang,
                 pageNum:this.pageNum,
                 pageSize:6,
                 platform:0,
            };
            API.get2('/exhibition/vr/page/L0103',data).then(res=>{
                if (res.code==0) {
                    this.vList=res.data.list;
                    this.dataAll=res.data;
                   // console.log(this.vList)
                }
            }).catch(err => {

            }) 
		},
		
    //获取虚拟展厅
		getVlist(){
			let data ={
			    lang:this.lang,
			    pageNum:1,
		        pageSize:6,
		        platform:0
			};
			API.get2('exhibition/vr/page/L0103',data).then(res => {
			    if (res.code == 0) {
			        this.vList = res.data.list;
			        // console.log(this.vList)
			    }
			}).catch(err => {
			    
			})
		},
    },
    components: {
        'header-top': header,
        'footer-bottom': footer,
        'time-line':timeline,
        'v-exhi-list':vExhibitionList
    }
}
</script>
<style scoped>
	.active_title{padding-left:40px;line-height:56px;background:url(../../assets/img/icons/title-icon.png) no-repeat left center;margin-top:30px;margin-bottom:10px;width:1200px;margin: 0 auto;margin-top:30px;}
	.active_title h3{font-size:26px;font-weight:normal;color:#333;margin-bottom: 30px;}
</style>
