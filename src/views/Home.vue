<template>
    <div class="p-wrap">
       111
    </div>
</template>
<script>
import * as API from 'api/demo';
export default {
    mounted() {
        $(".p-wrap").click(function () {
            alert('Jquery安装成功')
        });
    },
    methods: {
        get() {
            API.get().then(res => {
            }).catch(err => {
            })
        },
        get2() {
            let data =new URLSearchParams;
            data.append('artCode',1)
            API.get2(data).then(res => {
                
            }).catch(err => {

            })
        },
        post() {
            let data =new URLSearchParams;
                data.append('param',1)
                API.post(data).then(res => {
            }).catch(err => {

            })
        }
    }
}
</script>
<style lang="scss" scoped>
    .p-wrap{
        background:#000;
        height: 1rem;
        .cont{
            color:#fff;
        }
    }
</style>