<template>
    <div>
        <div class="sb_even">
            <ul class="clear">
                <li v-for="(item,index) in stroy" :key="index" @click="getList(index,item.startYear,item.endYear)" :class="{active:num ==index}">
                    <div>
                        <p class="even">博物馆记事</p>
                        <p>
                        </p>
                        <p class="year_event">{{item.title}}</p>
                    </div>
                    <button>查看</button>
                </li>
            </ul>
        </div>
        <div class="sb_event_main">
            <div class="sb_content clear" v-for="(item,index) in stroy" :key="index" @click="num = index" :class="{active:num ==index}">
                <!-- {{item}} -->
                <ev-list v-if="data" :data="data"></ev-list>
            </div>
        </div>
    </div>
</template>
<script>
import eventlist from "./eventlist";
import * as API from "api/demo";
export default {
    props: ['isPage'],
    data() {
        return {
            lang:this.$store.getters.getlang,
            num: 0,
            stroy:[{
            	title:'1981-1985',
            	startYear:'1981',
            	endYear:'1985'
            },{
            	title:'1986-1990',
            	startYear:'1986',
            	endYear:'1990'
            },{
            	title:'1991-1995',
            	startYear:'1991',
            	endYear:'1995'
            },{
            	title:'1996-2000',
            	startYear:'1996',
            	endYear:'2000'
            },{
            	title:'2001-2005',
            	startYear:'2001',
            	endYear:'2005'
            },{
            	title:'2006-2010',
            	startYear:'2006',
            	endYear:'2010'
            },{
            	title:'2011-2015',
            	startYear:'2011',
            	endYear:'2015'
            },{
            	title:'2016-2020',
            	startYear:'2016',
            	endYear:'2020'
            }],
            data:''
        }
    },
    mounted(){
        this.getList(0)
    },
    methods:{
        getList(index,startYear,endYear){
            this.num=index;
            let data ={
                lang:this.lang,
                pageNo:1,
                pageSize:5,
                platform:0,
                startYear:startYear,
                endYear:endYear
            };
            API.get2('about/event/page/L090105',data).then(res => {
                if (res.code == 0) {
                    this.data = res.data.list;
                    console.log(this.data,'jsojbo')
                }
            }).catch(err => {
                
            })
        }
    },
    components: {
        'ev-list': eventlist
    }
};
</script>
<style scoped>
.sb_even {
    margin-left: 30px;
}

.sb_event_main .sb_content {
    display: none;
}

.sb_event_main .sb_content.active {
    display: block;
}

.sb_even ul {
    margin-left: 0;
    padding-top: 24px;
    width: 100%;
}

.sb_even ul li {
    width: 124px;
    height: 196px;
    margin-right: 12px;
    border: 4px solid #fff;
    float: left;
    cursor: pointer;
    padding-bottom: 8px;
}

.sb_even ul li:nth-child(8) {
    margin-right: 0;
}

.sb_even ul li div {
    width: 116px;
    height: 142px;
    border-bottom: 1px solid #dddddd;
    margin: 0 auto;
    text-align: center;
    box-sizing: border-box;
    padding-top: 34px;
}

.sb_even ul li div p {
    text-indent: 0 !important;
    font-size: 14px;
    color: #333333;
    line-height: 14px;
}

.sb_even ul li div .year_event {
    color: #333333;
    margin-top: 40px;
}

.sb_even ul li button {
    width: 108px;
    height: 34px;
    text-align: center;
    line-height: 34px;
    margin: 6px 4px;
    border: none;
    background: #f3f3f3;
    color: #333333;
    outline: none;

}

.sb_even ul li.active {
    background: #fff;
    border: 1px solid #dddddd;
}

.sb_even ul li.active button {
    background: #fff;
}

.sb_even ul li:hover button {
    background: #fff;
}

.sb_event_main {
    margin-top: 40px;
}
</style>