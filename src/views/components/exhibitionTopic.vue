<template>
  <div class="comWidth">
  <div id="content">
    <!-- 显示日期详情 -->
    <div id="detail">
        <div id="date_content"></div>
        <div id="animal_year" style="display:none;"></div>
          <!-- 显示时钟 -->
          <p id="clock" style="display:none;"></p>
          <div class="cal_form">
              <form name="calender_content" id="cal_detail" style="margin-top: -15px;">
                 <table class="week">
                   <tbody>
                     <tr>
                        <td class="ch">
                           <!-- 日历头部 -->
                                 <table>
                                     <tbody>
                                           <tr id="" class="day">
                                                  <td>Sun</td>
                                                  <td>Mon</td>
                                                  <td>Tue</td>
                                                  <td>Wed</td>
                                                  <td>Thu</td>
                                                  <td>Fri</td>
                                                  <td>Sat</td>
                                              </tr>
                                         </tbody>
                                  </table>
                        </td>
                     </tr>
                   </tbody>
                 </table>
                 <table>
               <tbody>
                <tr>
                  <td class="sm">
                    <table class="table_head">
                      <tbody>
                      <tr>
                        <td class="clearfix"> 
                        <!-- 选择年份菜单 -->
                          <div class="year_select">
                              <!-- <span onclick="BtN('year_d')"> -->
                                <select onchange="chaCld()" name="SY" class="syear">
                                  
                                </select> 
                          </div>
                         

                          <!-- 选择月份菜单 -->
                              <div style="float:left;margin-left:16px;">
                                   <select onchange="chaCld()" name="SM" class="smonth">
                                 
                                    </select> 
                              </div>
                               <div class="sc-line"></div>
                               <div class="sc-prev" id="calUp"></div>
                               <div class="sc-next" id="calDown"></div>
                           </td>
                       </tr>
                     </tbody>
                    </table>
                  </td>
                </tr> 
             </tbody>
           </table>
              </form>
          </div>
    </div>
  </div>
  	<div class="imgList5">			
		<ul id="ul_ztExhibi" class="clear">
		<li class="item">
			<a href="#">
				<div class="itemImg">						
					<img src="https://www.shenzhenmuseum.com/p/resize_600x448/userfiles/uploadFile/20191205163426.jpg" onerror="this.src='/static/img/bg-4-3.png'" />
					<div class="item_title">
						<h3>吴昌硕书画篆刻艺术展</h3>
						<p>2019.09.20-2019.11.17</p>
						<p>深圳博物馆历史民俗馆一楼专题展览厅</p>
					</div>
				</div>				
			</a>
		</li>
	<li class="item">
			<a href="#">
				<div class="itemImg">						
					<img src="https://www.shenzhenmuseum.com/p/resize_600x448/userfiles/uploadFile/20191205163426.jpg" onerror="this.src='/static/img/bg-4-3.png'" />
					<div class="item_title">
						<h3>吴昌硕书画篆刻艺术展</h3>
						<p>2019.09.20-2019.11.17</p>
						<p>深圳博物馆历史民俗馆一楼专题展览厅</p>
					</div>
				</div>				
			</a>
		</li>
    	<li class="item">
			<a href="#">
				<div class="itemImg">						
					<img src="https://www.shenzhenmuseum.com/p/resize_600x448/userfiles/uploadFile/20191205163426.jpg" onerror="this.src='/static/img/bg-4-3.png'" />
					<div class="item_title">
						<h3>吴昌硕书画篆刻艺术展</h3>
						<p>2019.09.20-2019.11.17</p>
						<p>深圳博物馆历史民俗馆一楼专题展览厅</p>
					</div>
				</div>				
			</a>
		</li>
	</ul>
	</div>
	<!--page-->
	<div class=" paginationWrap" style="z-index: 2;position: relative;" v-if="isPageTopic">
	<div class=" pagination">
          <div class="cultural_page" id="pageContent"><div class=" pagination comWidth "><p class="pages"><a class="active" href="javascript:;" onclick="page(1)">1</a> </p><p class="pages"><a href="javascript:;" onclick="page(2)">2</a> </p><p class="pages"><a href="javascript:;" onclick="page(3)">3</a> </p><p class="pages"><a href="javascript:;" onclick="page(4)">4</a> </p><p class="pages"><a href="javascript:;" onclick="page(5)">5</a> </p><p class="pages"><a href="javascript:;" onclick="page(6)">6</a> </p>  <span class="page-last" onclick="page(2)">下一页</span></div></div>
   </div>
</div>
  </div>
</template>
<script>
export default {
  props:['isPageTopic'],
  data() {
    return {
	
	};
  },
  mounted() {
var Num; //Num计算出日期位置
    for(let i=0;i<6;i++) {
        document.write('<table id="cal-content"><tr>');
      for(let j=0;j<7;j++) {
        Num = i*7+j;
        document.write('<td id="SD' + Num +'" onclick="addDay(' + Num +')" ');
  //周六 周日 假期样式设定
      if(j == 0|| j == 6)
      {
            document.write(' class="aorange"');
        }else{
            document.write(' class="one"');
      }
            document.write('title=""> </td>')
      }

        document.write('</tr></table></td></tr><tr><td><table style="width:399;"><tr style="text-align:center"> ');
    //农历
    for(let j=0;j<7;j++) {
      Num = i*7+j;
      document.write('<td id="LD' + Num +'" onclick="addDay(' + Num +')" class="bs" title=""> </td>')
    }
      document.write('</tr></table></td></tr>');
    
  }
for(let i=1900;i<2050;i++) {
  $('.syear').html('<option>'+i+"年")
}
 for(let i=1;i<13;i++){
   $('.smonth').html('<option>'+i+"月")

 }
var solar_fes=[];
	initExhibit();
	function initExhibit(){
		var yE = new Date().getFullYear();
		queryDateStatus(yE+"-01-01",yE+'-12-31');
	}
	function chaCld() {
		   var y,m;
		   y=calender_content.SY.selectedIndex+1900;
		   m=calender_content.SM.selectedIndex;
		   setCld(y,m);
		   queryDateStatus(y+"-01-01",y+'-12-31');
		   console.log(y)
		   solar_fes =[];
		   
		}
		var dateObj='';	     
	   //查询时间段内的日期是否有闭馆
	     function queryDateStatus(startDate, endDate) {
		        // $.ajax(
		        //     {url:"/exhibition/getDateStatus?startDate="+startDate+"&endDate="+endDate,
		        //     	type:'get',
	          //   		async: false,
		        //         success:function(data){
		        //         	var result = JSON.parse(data)
		        //         	 for(var i  in result){
		        // 	         	 var dataName = result[i].date;
		        // 	         	 var status = result[i].status;
		        // 	         	  if(status =="0"){
		        	         		 
		        // 	         		 var datCal = dataName.substring(5,7)+''+dataName.substring(8,10)
		        // 	         		 var yearCal =dataName.substring(0,4)
		        // 	         		 solar_fes.push(datCal+' '+'闭馆')
		        // 	         		// dateObj[dataName] = "闭馆";
		        	         		
		        // 	         	 } 
		        	         	
		        //         	 }
		        //         	return solar_fes
		        //         }
		        //     });
		    };
		   
  }
};
</script>
<style scoped>
.imgList5 {
  width: 1200px;
  margin: 30px auto;
}
#content{
    width: 1200px;margin: 0 auto;

}
.smlb {
    font-size: 20px; color: white; float: right; margin-right: 13%; margin-top: -54%;
}

.aorange {
   font-size: 24px; color: #333333 !important;width:57px;
}
.day {
   font-size: 18px; color: #000000;
}
.day td{
  color:#9F9E9E;
}
.one {
   font-weight: normal; font-size: 24px; color: #333333; width:57px;
}
.bs {
   font-size: 12px; color: #666666;width:57px;
}
.lb {
   font-size: 16px; color: #0099ff
}
.sm {
   font-size: 14px; color: #333399
}
.smz {
   font-weight: bold; font-size: 14px; color: #0099ff
}


#cal-content{
   height:40;text-align: center;background-color:"#FAFBFB";

}
.detallu{
   width:100%; border:0; padding:2px; color: white;
   
}
.lnotice{
  margin-top: 34%;
}
#detail{
  text-align: center;
}
#oTime{
  color: white ;text-align: center;font-family: 
}

.sm span{
  color: #333333;
  font-size:26px;
  padding-right:14px;
  
}
.thead span{
   color: #2EBEB7;

}
#clock{
    font-family: courier;margin-top: -23%;padding-bottom: 5%;
  }

.year_select{
  float:left;
}
.home_select{
  display:inline-block; 
}

select::-ms-expand { display: none; }

.day td{
  width:80px;color:#333333;font-size:14px; text-align:center;
}
select {
  font-size:26px;
  color:#333333;
  margin-bottom: 9px; appearance: none;-moz-appearance: none;-webkit-appearance: none;border: 0; border-radius: 2px; color: #000000; padding-top: 6px; background-color: white; padding-bottom: 2px;margin-left:20px;
  background: url(../../assets/base/img/yeardown.png) right center no-repeat;
  background-size: 14px 10px;
  padding-right:20px;
}


.table_head{
   width: 347px;margin-left: -2px;text-align: center;
  }

.week{
   border-spacing: 0;   
}


div.tishishgen0{ 
  text-align:center; margin:50px 0 10px 0; color:#666
}

div.shenbox {
    margin-top: 20px;
}
.clearfix:after {
  content: " ";
  display: block;
  clear: both;
  height: 0;
}
.clearfix {
  zoom: 1;
}
#content{
   
    width:1200px;
  }
  .detallu{
    display:none;
  }
  #cal_detail{
    position:absolute;
    height:50px;
    left:500px;
    width:550px;
  }
  #cal_detail .week{
    position:absolute;
    bottom:-15px;
    left:3px;
  }
  .table_head{
    position:absolute;
    left:-420px;
    top:20px;
    width:250px;
  }
  .cal_form{
    height:86px;
    overflow:hidden;
    padding-top:20px;
    position:relative;
    border-bottom:1px solid #dddddd;
  }
  .year_select{
    width:120px;
  }
  #cal-content{
    width:574px;
  }
  #cal_detail table{
    width:568px;
  }
  #cal_detail table{
    display:none;
  }
  #cal_detail table:first-child,#cal_detail table:last-child{
    display:block;
  }
  #cal_detail .table_head{
    width: 300px;
  }
  .sc-line{
    position:absolute;
    left:240px;
    top:-7px;
    width:1px;
    height:26px;
    background:#dddddd;
    margin:12px 30px 0 50px;

  }
   .sc-prev,.sc-next{
   		width: 28px;
    	height: 52px;
    	position:absolute;
    	top:-7px;
   }
  .sc-prev{
    left:350px;
    background: url(../../assets/img/icons/index-prev.png) no-repeat center center;
    background-size: 100%;
  }
    .sc-prev:hover{
    	background:url(../../assets/img/icons/index-prev-active.png) no-repeat center center ;background-size:100%;
    }
  .sc-next{
    left:1022px;
    background: url(../../assets/img/icons/index-next.png) no-repeat center center;
    background-size: 100%;
  }
  .sc-next:hover{
  	background:url(../../assets/img/icons/index-next-active.png) no-repeat center center;background-size:100%;
  }
  .cliDay{
  	width:57px;
  	color:#ff6900 !important;
  }
</style>