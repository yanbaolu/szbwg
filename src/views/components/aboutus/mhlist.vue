<template>
    <div>
        <ul>
            <li v-for="(item,index) in data" :key="index">
                <p>{{item.year}}</p>
                <div v-html="item.content"></div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
	 props:['data'],
}
</script>
<style scoped>
>>>p {
    font-size: 16px !important;
    line-height: 30px !important;
    color: #666666 !important;
    white-space: pre-wrap !important;
    font-family: Arial, Helvetica, "PingFang SC", "Microsoft Yahei", "Microsoft Yahei" !important;
}
</style>