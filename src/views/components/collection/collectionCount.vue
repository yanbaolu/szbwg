<template>
    <div class="imgList7">
        <ul class="clear">
            <li class="item" v-for="(item,index) in data">
                <router-link :to="{name:'collectiondetial',query:{clazzName:item.clazzName,resId:item.resId,index:index}}">
                    <div class="itemImg L0302">
                        <img :src="item.thumbPic" alt />
                        <div class="itemText">
                            <h3>{{item.name}}</h3>
                        </div>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    props: ["isPage","data"],
    data() {
        return {};
    },
    mounted() {
        console.log(this.data,123456)
    }
};
</script>
<style scoped>
.mt50 {
    margin-top: 50px;
}

.imgList7 {
    width: 1280px;
    margin: 0 auto;
}

.imgList7 ul li {
    margin-right: 26px;
}

.imgList7 ul li:nth-of-type(4n) {
    margin-right: 0;
}
</style>