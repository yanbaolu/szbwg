<template>
    <div class="slide_tow">
        <div class="data_list">
			<div class="buttonBox">
				<div class="yearBtnBox">
					<div class="yearbtn" id="year" @click="yearbtn()"><em>2019</em></div>
                        <ul class="yearlist">
                        <li v-for="(item,index) in yearall" :key="index" @click="yearlist(index)">{{item}}</li>
                    </ul>
				</div>
				<div class="mouthBtnBox">
					<div class="mouthBtn" id="month" @click="monbtn()"><em>1</em> 月</div>
					<ul class="mouthList">
                        <li v-for="(item,index) in mounthall" :key="index" @click="mounthlist(index)">{{item}}</li>
                    </ul>
				</div>
			</div>
			<!-- <ul class="dataList">
				<span class="leftBtn"></span>
				<li>
                    <dl>
                        <dt>{{item.date}}</dt>
                        <dd>{{item.week}}</dd>
                    </dl>
                </li>
                <!-- <li>
                    <dl>
                        <dt>{{dataArr[1]}}</dt>
                        <dd>Tue</dd>
                    </dl>
                </li>
                <li>
                    <dl>
                        <dt>{{dataArr[2]}}</dt>
                        <dd>Wed</dd>
                    </dl>
                </li>
                <li>
                    <dl>
                        <dt>{{dataArr[3]}}</dt>
                        <dd>Thu</dd>
                    </dl>
                </li>
                <li>
                    <dl>
                        <dt>{{dataArr[4]}}</dt>
                        <dd>Fri</dd>
                    </dl>
                </li>
                <li>
                    <dl>
                        <dt>{{dataArr[5]}}</dt>
                        <dd>Sat</dd>
                    </dl>
                </li>
                <li>
                    <dl>
                        <dt>{{dataArr[6]}}</dt>
                        <dd>Sun</dd>
                    </dl>
                </li>
				<span class="rightBtn"></span>
			</ul> -->
            <div class="dataList">
                <div id="last-week"> </div>
           
                <table id="monitor">
                    <tr>
                        <td>
                            <p>1</p>
                            <p>星期一</p>
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </table>
            <div id="next-week"></div>
             </div>
		</div>
        <div class="swiper-container swiper_tow">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <img src="https://www.shenzhenmuseum.com/p/userfiles/uploadFile/20191202172635.jpg" alt="">
                    <div class="active_title">吴昌硕书画篆刻艺术展</div>
                    <span>历 史 民 俗 馆</span>
                    <i class="round">1</i>
                </div>
                <div class="swiper-slide">
                    <img src="https://www.shenzhenmuseum.com/p/userfiles/uploadFile/20191202172635.jpg" alt="">
                    <div class="active_title">深圳博物馆参</div>
                    <span>历 史 民 俗 馆</span>
                    <i class="round">2</i>
                </div>
                <div class="swiper-slide">
                    <img src="https://www.shenzhenmuseum.com/p/userfiles/uploadFile/20191202172635.jpg" alt="">
                    <div class="active_title">深圳博物馆参</div>
                    <span>历 史 民 俗 馆</span>
                    <i class="round">3</i>
                </div>
                <div class="swiper-slide">
                    <img src="https://www.shenzhenmuseum.com/p/userfiles/uploadFile/20191202172635.jpg" alt="">
                    <div class="active_title">篆刻艺术展</div>
                    <span>历 史 民 俗 馆</span>
                    <i class="round">4</i>
                </div>
                <div class="swiper-slide">
                    <img src="https://www.shenzhenmuseum.com/p/userfiles/uploadFile/20191202172635.jpg" alt="">
                    <div class="active_title">硕书画篆刻艺术展</div>
                    <span>历 史 民 俗 馆</span>
                    <i class="round">5</i>
                </div>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination swiper-p2"></div>
            <table id="monitor" style="display: none;">
                <tr>
                    <td>111111</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </table>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            cells:'',
            yearall:['2017','2018','2019'],
            mounthall:['1','2','3','4','5','6','7','8','9','10','11','12']
        }
    },
    mounted() {
    	var swiper = new Swiper('.swiper_tow', {
    	      slidesPerView:2.3,
    		  centeredSlides : true,
    		  spaceBetween :-25,
    		  loop: true,
    	      pagination: {
    	        el: '.swiper-p2',
    	        type:'fraction'
    	      },
        });
        this.getdate();
    },
    methods:{
        yearbtn(){
            $('.yearlist').show();
           
        },
        monbtn(){
            $('.mouthList').show();
        },
        yearlist(i){
            //console.log(i)
            $('.yearlist').hide();
            $('#year').html(this.yearall[i]);

        }, 
        mounthlist(i){
            $('.mouthList').hide();
            $('#month em').html(this.mounthall[i]);

        },
        getdate(){
        let yeartab = document.getElementById('year'),
        monthtab =document.getElementById('month');
        let ydate = yeartab.innerHTML;
        let mdate = monthtab.innerHTML;
        var cells = document.getElementById('monitor').getElementsByTagName('td');
        var clen = cells.length;
        var currentFirstDate;
        var formatDate = function(date) {
            var year = date.getFullYear() + '年';
            var month = (date.getMonth() + 1) + '月';
            // var day = date.getDate() + '日';
            var day = '<p>'+date.getDate()+'</p>';
            var week = '<p>' + ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][date.getDay()] + '</p>';
            //return year + month + day + ' ' + week;
            return  day + ' ' + week;
        };
        function getWeek(target) {
            let now = new Date(target);
            let now_day= now.getDay();
            let now_time = now.getTime();
            let result = [0,1,2,3,4,5,6]
            return result.map(i => (new Date(now_time + 24*60*60*1000*(i - now_day))).getDate())   
        }
        var addDate = function(date, n) {
            date.setDate(date.getDate() + n);
            return date;
        };
        var setDate = function(date) {
            var week = date.getDay();
            date = addDate(date, week * -1);
            currentFirstDate = new Date(date);
            getWeek(currentFirstDate);
            console.log(getWeek(currentFirstDate))
            for (var i = 0; i < clen; i++) {
                cells[i].innerHTML = formatDate(i == 0 ? date : addDate(date, 1));
            }
        };
        yeartab.onclick = function(){
                setDate(addDate(new Date(ydate,mdate-1), 7));
         }
         monthtab.onclick = function(){
                setDate(addDate(new Date(ydate,mdate-1), 7));
         }
        document.getElementById('last-week').onclick = function() {
            setDate(addDate(currentFirstDate, -7));
        };
        document.getElementById('next-week').onclick = function() {
            setDate(addDate(currentFirstDate, 7));
        };
        setDate(new Date());
    }
        }
    
}
</script>
<style scoped>
.slide_tow {color: #ccc;}
.slide_tow .data_list {width: 1200px;height:68px;margin: 0 auto;margin-top: 20px;border-radius:20px;text-align:center;line-height:70px;color:#000;}
.swiper-container{width: 100%;height:440px;margin-top:60px;}
.swiper-slide {transform: scale(0.8);height:366px!important;background:#fff;border-radius:10px;position:relative;bottom:0!important;}
.swiper-slide img{border-radius:10px;width:100%;height:100%;object-fit: cover;}
.swiper-slide .active_title{width:100%;height:60px;line-height:60px;background:rgba(0,0,0,1);text-indent:22px;position:absolute;bottom:0;border-radius:0px 0px 10px 10px;opacity:0.5;font-size:26px;display:none;}
.swiper-slide span{position: absolute;width:35px;background:rgba(103,184,178,1);right:10px;top:-5px;text-align:center;padding:10px 5px;color:#fff;border-radius:5px;}
.swiper-slide .round{position:absolute;width:82px;height:82px;background:rgba(218,218,218,1);border-radius:50%;left:10px;bottom:10px;text-align:center;line-height:82px;color:#67B8B2;font-size:16px;}
.swiper-slide-active,.swiper-slide-duplicate-active{transform: scale(0.95);border-radius:10px;cursor:pointer;position:relative;}
.swiper-slide,.swiper-slide-active .active_title{display:block!important;}
.swiper-slide,.swiper-slide-active .round{bottom:80px;}
.swiper-slide,.swiper-slide-active span{background:#659CBA!important;}
.swiper-slide-active,.swiper-slide-duplicate-active img{border-radius:10px;cursor:pointer;}
/* .data_list{display:flex;} */
.buttonBox{float: left; width: 350px; position: relative;z-index: 100;margin-right: 20px;}
.yearBtnBox {position: relative; width: 150px; float: left; }
.mouthBtnBox{position: relative; width: 150px; float: left; margin-left:30px; }
.yearBtnBox .yearbtn{width:150px;height:68px;background:url(../../assets/img/niany.png) no-repeat;border-radius:20px;line-height:81px;text-align:left;text-indent:20px;font-size:26px;color:#666;margin-right:40px;cursor:pointer;background-size:100%;}
.yearBtnBox .yearlist{position: absolute; z-index: 2;  width:124px; height: 350px; overflow-y: auto; top: 58px; left: 13px;background: #fff;  padding-bottom: 30px; border-radius: 0 0 5px 5px; display: none;}
.yearBtnBox .yearlist li,.mouthBtnBox .mouthList li{height: 35px; color: #666; font-size: 26px;margin-bottom: 15px;}
.mouthBtnBox .mouthBtn{width:150px;height:68px;background:#fff;line-height:81px;text-align:
left;text-indent:20px;font-size:26px;color:#666;cursor:pointer;background:url(../../assets/img/niany.png) no-repeat;background-size:100%}
.mouthBtnBox .mouthList{position: absolute; z-index: 2;  width:124px; height: 350px; overflow-y: auto; top: 58px; left: 13px;background: #fff;  padding-bottom: 30px; border-radius: 0 0 5px 5px; display: none;}
.dataList{margin-left:50px;margin-top:7px;float: right; width: 780px;} 
.dataList #last-week{background:url(../../assets/img/left.png) no-repeat; background-size:100%;background-position:0px 20px;width:30px;height: 50px; margin-right:30px;cursor:pointer; float: left;}
.dataList #next-week{background:url(../../assets/img/right.png) no-repeat; background-size:100%;background-position:0px 20px;width:30px;height: 50px; margin-right:30px;cursor:pointer; float: right;}
#monitor{width: 660px; float: left;}
#monitor td{width:72px;height:72px;background:#fff;box-shadow:5px 9px 15px 3px rgba(51,51,51,0.08);border-radius:50%;margin-right:23px;cursor:pointer; display:block; float: left; }
#monitor td:last-child{margin-right: 0;}
#monitor td p:nth-of-type(1){width:80%;height:35px;border-bottom:1px solid #f3f3f3;margin:0 auto;line-height:38px;font-size:20px;color:#333;margin-top:2px;}
#monitor td p:nth-of-type(2){width:80%;margin:80%;margin:0 auto;line-height:35px;font-size:14px;color:#999;}
</style>