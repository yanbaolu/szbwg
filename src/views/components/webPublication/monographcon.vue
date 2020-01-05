<template>
    <div>
        <div class="acade_treatise acade_border">
            <div class="acade_publication">
                <ul class="clearfix">
                    <li v-for="(item,ndex) in data">
                        <router-link :to="{path:'monographdetail'}">
                            <div class="publication_img">
                                <img :src="item.thumbPic" alt="">
                            </div>
                            <div class="publication_title">
                                <h3 class="more_ellipsis">{{item.name}}</h3>
                                <p>出版日期：{{item.dateStr}}</p>
                                <p v-if="item.langName=='0'">语<em style="display:inline-block;width:32px;"></em>种：中文</p>
                                <p v-if="item.langName=='1'">语<em style="display:inline-block;width:32px;"></em>种：英文</p>
                            </div>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['isPage','data'],
    data() {
        return {

        }
    },
    methods: {

    }
}
</script>
<style scope>
.acade_treatise {
    width: 1200px;
    margin: 0 auto 40px;
}

.acade_treatise ul {
    margin-top: 10px;
}

.acade_treatise ul li {
    margin: 40px 0 0 30px;
    float: left;
    border: 1px solid #ebebeb;
    border-radius: 10px;

}

.acade_treatise ul li:nth-child(even) {
    margin-left: 60px;
}

.acade_treatise ul li a {
    position: relative;
    display: block;
    width: 540px;
    height: 300px;

}

.publication_img {
    float: left;
    width: 180px;
    height: 240px;
    text-align: center;
    line-height: 240px;
    margin: 30px 0 0 20px;
}

.publication_img img {
    max-width: 180px;
    max-height: 240px;
    vertical-align: middle;
}

.publication_title {
    display: inline-block;
    position: absolute;
    top: 40px;
    left: 250px;
    width: 240px;
    height: 180px;
    margin-bottom: 20px;
}

.publication_title h3 {
    font-size: 18px;
    color: #333333;
    height: 18px;
    line-height: 18px;
    width: 100%;
    font-weight: normal;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.publication_title p {
    font-size: 16px;
    height: 16px;
    line-height: 16px;
    color: #666666;
    margin-top: 20px;
    white-space: pre;
}
</style>