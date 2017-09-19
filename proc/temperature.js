/*
取得體感溫度和紫外線
*/
const request = require('request');
const cheerio = require("cheerio");

function requestpost1(area, callback){
  var code ='';
  var area = area;
  if((area.indexOf("基隆") != -1) || (area.indexOf("Keelung") != -1)){
     code = "Keelung_City";
  }else if((area.indexOf("台北") != -1) || (area.indexOf("Taipei") != -1)){
     code = "Taipei_City";
  }else if((area.indexOf("新北") != -1) || (area.indexOf("New_Taipei") != -1)){
     code = "New_Taipei_City";
  }else if((area.indexOf("桃園") != -1) || (area.indexOf("Taoyuan") != -1)){
  	 code = "Taoyuan_City";
  }else if((area.indexOf("新竹市") != -1) || (area.indexOf("Hsinchu_City") != -1)){
     code = "Hsinchu_City";
  }else if((area.indexOf("新竹縣") != -1) || (area.indexOf("Hsinchu_County") != -1)){
  	 code = "Hsinchu_County";
  }else if((area.indexOf("苗栗") != -1) || (area.indexOf("Miaoli") != -1)){
  	 code = "Miaoli_County";
  }else if((area.indexOf("台中") != -1) || (area.indexOf("Taichung") != -1)){
     code = "Taichung_City";
  }else if((area.indexOf("彰化") != -1) || (area.indexOf("Changhua") != -1)){
     code = "Changhua_County";
  }else if((area.indexOf("南投") != -1) || (area.indexOf("Nantou") != -1)){
     code = "Nantou_County";
  }else if((area.indexOf("雲林") != -1) || (area.indexOf("Yunlin") != -1)){
     code = "Yunlin_County";
  }else if((area.indexOf("嘉義市") != -1) || (area.indexOf("Chiayi_City") != -1)){
     code = "Chiayi_City";
  }else if((area.indexOf("嘉義縣") != -1) || (area.indexOf("Chiayi_County") != -1)){
  	 code = "Chiayi_County";
  }else if((area.indexOf("台南") != -1) || (area.indexOf("Tainan") != -1)){
     code = "Tainan_City";
  }else if((area.indexOf("高雄") != -1) || (area.indexOf("Kaohsiung") != -1)){
  	 code = "Kaohsiung_City";
  }else if((area.indexOf("屏東") != -1) || (area.indexOf("Pingtung") != -1)){
  	 code = "Pingtung_County";
  }else if((area.indexOf("宜蘭") != -1) || (area.indexOf("Yilan") != -1)){
     code = "Yilan_County";
  }else if((area.indexOf("花蓮") != -1) || (area.indexOf("Hualien") != -1)){
     code = "Hualien_County";
  }else if((area.indexOf("台東") != -1) || (area.indexOf("Taitung") != -1)){
     code = "Taitung_County";
  }else if((area.indexOf("連江") != -1) || (area.indexOf("Lienchiang") != -1)){
     code = "Lienchiang_County";
  }else if((area.indexOf("金門") != -1) || (area.indexOf("Kinmen") != -1)){
     code = "Kinmen_County";
  }else if((area.indexOf("澎湖") != -1) || (area.indexOf("Penghu") != -1)){
     code = "Penghu_County";
  }else{
  	 code = 0;
  }

request("http://www.cwb.gov.tw/V7/forecast/taiwan/inc/UVI/"+code+".htm", function (error, response, body) {
   if (!error && response.statusCode == 200) {
   	  var $ = cheerio.load(body);
      var temperature = $('td').eq(0).text(); //體感溫度
      //console.log(temperature);
      var src = $('img').attr("src").replace('/V7/symbol/UVI/', '').replace('.gif', '');         //紫外線
      var msg = "";
      if(0<=src&&src<=2){
        msg = "低量級";
      }else if(3<=src&&src<=5){
        msg = "中量級";
      }else if(6<=src&&src<=7){
        msg = "高量級";
      }else if(8<=src&&src<=10){
        msg = "過量級";
      }else if(11<=src){
        msg = "危險級";
      }

      var uv_msg = src+"("+msg+")";
      //console.log(src);
      var description = {temperature:temperature, uvi:uv_msg};
      //console.log(rain);
      return callback(description);     //回傳址需要物件
   }
});
}

module.exports.requestpost1 = requestpost1;   //輸出模組給其他JS使用