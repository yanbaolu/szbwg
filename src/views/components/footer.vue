<template>
    <div class="footrWarp">
        <footer class="footer">
            <div class="footer_box">
                <a href="http://bszs.conac.cn/sitename?method=show&id=1A44BA4ABBE6345AE053012819AC317C" class="sb_footer_img"><img alt="" src="../../assets/img/icons/timg.png"></a>
                <p class="bottomLinks"><router-link target="_black" :to="{path:'map'}">网站地图</router-link>
               <router-link target="_black" :to="{path:'yqlj'}">友情链接</router-link>
               <router-link :to="{path:'aboutus'}">隐私政策</router-link>
               <router-link target="_black" :to="{path:'bqsm'}">版权声明</router-link>
              <router-link target="_black" :to="{path:'visiting'}">展厅地图</router-link>
               <router-link :to="{path:'contact'}">联系我们</router-link>
               </p>
                <p>深圳博物馆 版权所有 <a href="http://www.miitbeian.gov.cn" style="color:#fff;" target="_blank">粤ICP备13006341号-1</a></p>
                <p>Copyright © 2008-<span id="getYear"></span> shenzhenmuseum.com Corporation,All Rights Reserved</p>
            </div>
        </footer>
    </div>
</template>
<script>
export default {
    data() {
        return {
            Height: 0
        }
    },
    mounted() {
        
    }
}
</script>
<style scoped>
.footer {
    
}
</style>