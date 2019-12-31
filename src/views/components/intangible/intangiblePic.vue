<template>
<div>
    <ol class="clear">
        <!--传承人和非遗项目用这个projectDetail底层页-->
    <li><router-link :to="{path:'projectDetail'}"> <img src="https://www.shenzhenmuseum.com/p/resize_500x500/userfiles//pf//2018/01/16/20180116092622764.jpg"">
        <p>文化和自然遗产日</p>
    </router-link></li>
 <!--图片库用这个pictureNewDetail底层页-->
    <li><router-link :to="{path:'pictureNewDetail'}"> <img src="https://www.shenzhenmuseum.com/p/resize_500x500/userfiles//pf//2018/01/16/20180116092622764.jpg"">
        <p>文化和自然遗产日</p>
    </router-link></li>
    <li><a href="pictureNewDetail?pLm=L04&amp;lmType=L0406&amp;resId=47a38e73b3694dd087d8a1e9cbe87311"> <img src="https://www.shenzhenmuseum.com/p/resize_500x500/userfiles//pf//2018/01/16/20180116092622764.jpg"">
        <p>文化和自然遗产日</p>
    </a></li>
    <li><a href="pictureNewDetail?pLm=L04&amp;lmType=L0406&amp;resId=47a38e73b3694dd087d8a1e9cbe87311"> <img src="https://www.shenzhenmuseum.com/p/resize_500x500/userfiles//pf//2018/01/16/20180116092622764.jpg"">
        <p>文化和自然遗产日</p>
    </a></li>
</ol>
 <div class=" paginationWrap" style="z-index: 1001;position: relative;" v-if="isPage">
        <div class="pagination">
        <div class="clear leavePage" id="pageContent">
            <!-- <div class=" pagination comWidth "><p class="pages"><a class="active" href="javascript:;" onclick="page(1)">1</a> </p><p class="pages"><a href="javascript:;" onclick="page(2)">2</a> </p><p class="pages"><a href="javascript:;" onclick="page(3)">3</a> </p><p class="pages"><a href="javascript:;" onclick="page(4)">4</a> </p>  <span class="page-last" onclick="page(2)">下一页</span></div> -->
        </div>
        </div>
</div>
</div>
</template>
<script>
export default {
    props:['isPage'],
    data(){
        return {

        }
    },
    mounted(){
        
    },
    methods:{}
}
</script>
<style scope>
/*图片部分*/
.intang_picture{
    font-size:0;
    padding:15px 0 60px 0;
}
.intang_picture ol li{
    display: inline-block;
}
.intang_picture ol li a{
    height:292px;
    width: 292px;
    display: block;
    position:relative;
    text-align: center;
    line-height: 292px;
}
.intang_picture ol li a img{
    max-width: 292px;
    max-height: 292px;
}
.intang_picture ol li:nth-child(2){
    margin:0 10px;
}
.intang_picture ol li a p{
    font-size:16px;
    height:48px;
    line-height: 48px;
    background:rgba(0,0,0,0.4);
    color:#fff;
    position:absolute;
    bottom:0;
    width: 100%;
    box-sizing:border-box;
    padding:0 30px;
    text-align:left;
    overflow:hidden;
 	white-space:pre;
    text-overflow:ellipsis;
}
.intang_picture ol li:nth-child(3){
    margin-right:10px;
}
.paginationWrap{margin-top: 30px;}
</style>
