<template>
    <div>
        <div class="equipment">
            <ul class="clear">
                <li v-for="(item,index) in data">
                    <router-link :to="{path:'equipmentdetial'}">
                        <img :src="item.thumbPic" alt />
                        <p>{{item.name}}</p>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    props: ["isPage",'data'],
    data() {
        return {};
    }
};
</script>
<style scope>
.equipment {
    width: 1200px;
    margin: 0 auto;
    box-sizing: border-box;
    padding-top: 20px;
}

.equipment ul li {
    float: left;
    margin-right: 40px;
    margin-bottom: 40px;
    width: 270px;
    height: 270px;
    position: relative;
}

.equipment ul li:nth-child(4n) {
    margin-right: 0;
}

.equipment ul li a {
    display: block;
    width: 270px;
    height: 270px;
    line-height: 270px;
    text-align: center;
    display: table-cell;
    vertical-align: middle;

}

.equipment ul li a img {
    max-width: 270px;
    max-height: 270px;
}

.equipment ul li a p {
    width: 100%;
    height: 48px;
    line-height: 48px;
    background: rgba(0, 0, 0, 0.4);
    font-size: 15px;
    color: #fff;
    position: absolute;
    bottom: 0;
    text-indent: 30px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: left;
}
</style>