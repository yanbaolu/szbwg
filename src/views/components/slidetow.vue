<template>
    <div class="slide_tow">
        <div class="data_list">
            <div class="buttonBox">
                <div class="yearBtnBox">
                    <div class="yearbtn">2015</div>
                    <div class="yearlist"></div>
                </div>
                <div class="mouthBtnBox">
                    <div class="mouthBtn">12 月</div>
                    <div class="mouthList"></div>
                </div>
            </div>
            <ul class="dataList">
                <span class="leftBtn" @click="leftBtn()"></span>
                <li>
                    <dl>
                        <dt>30</dt>
                        <dd>Mon</dd>
                    </dl>
                </li>
                <li>
                    <dl>
                        <dt>31</dt>
                        <dd>Tue</dd>
                    </dl>
                </li>
                <li>
                    <dl>
                        <dt>1</dt>
                        <dd>Wed</dd>
                    </dl>
                </li>
                <li>
                    <dl>
                        <dt>2</dt>
                        <dd>Thu</dd>
                    </dl>
                </li>
                <li>
                    <dl>
                        <dt>3</dt>
                        <dd>Fri</dd>
                    </dl>
                </li>
                <li>
                    <dl>
                        <dt>4</dt>
                        <dd>Sat</dd>
                    </dl>
                </li>
                <li>
                    <dl>
                        <dt>5</dt>
                        <dd>Sun</dd>
                    </dl>
                </li>
                <span class="rightBtn" @click="rightBtn()"></span>
            </ul>
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
            <table id="monitor">
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
            cells: '',

        }
    },
    mounted() {
        var cells = document.getElementById('monitor').getElementsByTagName('td');
        var clen = cells.length;
        var currentFirstDate;
        var swiper = new Swiper('.swiper_tow', {
            slidesPerView: 2.3,
            centeredSlides: true,
            spaceBetween: -25,
            loop: true,
            pagination: {
                el: '.swiper-p2',
                type: 'fraction'
            },
        });
    },
    methods:{
        //获取数据
        getWeek(){
            let now = new Date(target);
            let now_day= now.getDay();
            let now_time = now.getTime();
            let result = [0,1,2,3,4,5,6]
            return result.map(i => (new Date(now_time + 24*60*60*1000*(i - now_day))).getDate())
        },
        addDate(){
            console.log(date,454454544554)
            date.setDate(date.getDate() + n);
            return date;
        },
        setDate(){
            var week = date.getDay() - 1;
            date = this.addDate(date, week * -1);
            currentFirstDate = new Date(date);
            console.log(this.getWeek(currentFirstDate))
            for (var i = 0; i < clen; i++) {
                cells[i].innerHTML = this.formatDate(i == 0 ? date : this.addDate(date, 1));
            }
        },
        formatDate(){
            var year = date.getFullYear() + '年';
            var month = (date.getMonth() + 1) + '月';
            var day = date.getDate() + '日';
            var week = '(' + ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'][date.getDay()] + ')';
            return year + month + day + ' ' + week;
        },
        leftBtn(){
            this.setDate(this.addDate(currentFirstDate, -7));
        },
        rightBtn(){
            this.setDate(this.addDate(currentFirstDate, 7));
        }
    }
}
</script>
<style scoped>
.slide_tow {
    color: #ccc;
}

.slide_tow .data_list {
    width: 1200px;
    height: 68px;
    margin: 0 auto;
    margin-top: 20px;
    border-radius: 20px;
    text-align: center;
    line-height: 70px;
    color: #000;
}

.swiper-container {
    width: 100%;
    height: 440px;
    margin-top: 60px;
}

.swiper-slide {
    transform: scale(0.8);
    height: 366px !important;
    background: #fff;
    border-radius: 10px;
    position: relative;
    bottom: 0 !important;
}

.swiper-slide img {
    border-radius: 10px;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.swiper-slide .active_title {
    width: 100%;
    height: 60px;
    line-height: 60px;
    background: rgba(0, 0, 0, 1);
    text-indent: 22px;
    position: absolute;
    bottom: 0;
    border-radius: 0px 0px 10px 10px;
    opacity: 0.5;
    font-size: 26px;
    display: none;
}

.swiper-slide span {
    position: absolute;
    width: 35px;
    background: rgba(103, 184, 178, 1);
    right: 10px;
    top: -5px;
    text-align: center;
    padding: 10px 5px;
    color: #fff;
    border-radius: 5px;
}

.swiper-slide .round {
    position: absolute;
    width: 82px;
    height: 82px;
    background: rgba(218, 218, 218, 1);
    border-radius: 50%;
    left: 10px;
    bottom: 10px;
    text-align: center;
    line-height: 82px;
    color: #67B8B2;
    font-size: 16px;
}

.swiper-slide-active,
.swiper-slide-duplicate-active {
    transform: scale(0.95);
    border-radius: 10px;
    cursor: pointer;
    position: relative;
}

.swiper-slide,
.swiper-slide-active .active_title {
    display: block !important;
}

.swiper-slide,
.swiper-slide-active .round {
    bottom: 80px;
}

.swiper-slide,
.swiper-slide-active span {
    background: #659CBA !important;
}

.swiper-slide-active,
.swiper-slide-duplicate-active img {
    border-radius: 10px;
    cursor: pointer;
}

.data_list {
    display: flex;
}

.buttonBox {
    display: flex;
}

.yearBtnBox {
    display: flex;
}

.yearBtnBox .yearbtn {
    width: 150px;
    height: 68px;
    background: url(../../assets/img/niany.png) no-repeat;
    border-radius: 20px;
    line-height: 81px;
    text-align:
        left;
    text-indent: 20px;
    font-size: 26px;
    color: #666;
    margin-right: 40px;
    cursor: pointer;
    background-size: 100%;
}

.mouthBtnBox .mouthBtn {
    width: 150px;
    height: 68px;
    background: #fff;
    line-height: 81px;
    text-align:
        left;
    text-indent: 20px;
    font-size: 26px;
    color: #666;
    cursor: pointer;
    background: url(../../assets/img/niany.png) no-repeat;
    background-size: 100%
}

.dataList {
    display: flex;
    margin-left: 50px;
    margin-top: 7px;
}

.dataList li {
    width: 72px;
    height: 72px;
    background: #fff;
    box-shadow: 5px 9px 15px 3px rgba(51, 51, 51, 0.08);
    border-radius: 50%;
    margin-right: 30px;
    cursor: pointer;
}

.dataList .leftBtn,
.rightBtn {
    width: 30px;
    font-size: 20px;
    display: block;
    margin-right: 30px;
    cursor: pointer;
}

.dataList .leftBtn {
    background: url(../../assets/img/left.png) no-repeat;
    background-size: 100%;
    background-position: 0px 20px;
}

.dataList .rightBtn {
    background: url(../../assets/img/right.png) no-repeat;
    background-size: 100%;
    background-position: 0px 20px;
}

.dataList li dl {
    height: 72px;
}

.dataList li dl dt {
    width: 80%;
    height: 35px;
    border-bottom: 1px solid #f3f3f3;
    margin: 0 auto;
    line-height: 38px;
    font-size: 20px;
    color: #333;
    margin-top: 2px;
}

.dataList li dl dd {
    width: 80%;
    margin: 80%;
    margin: 0 auto;
    line-height: 35px;
    font-size: 14px;
    color: #999;
}
</style>