/* 
   Linebot 
*/
const http = require('http');
const request = require('request');
const obj = require('./proc/areacode.js');   //自製JavaScript
const linebot = require('linebot');
const cheerio = require("cheerio");
const express = require('express');
const app = express();                 //const定義常數

var bot = linebot({
  channelId: "1506564035",
  channelSecret: "86a7419c53e5fd640a840752b8cb26bc",
  channelAccessToken: "nsz56i0Tt6y41jQzme1DfODzq+tnUUAiP9FWCy+ug+wET2vE0pLg7gJlFXv6uKZhIWXz6QcAaTQHsSY6mcS5uyiC3rjxqo8Yvwn+uby9cVXpNXpyQ3aNz736ej4b37kimyXP7ebWXfAWJ+/N0k5idAdB04t89/1O/w1cDnyilFU="
});

//當user有加入BOT的時候, JOIN是加入群組，Follow是加入好友
bot.on('follow', function(event) {
  console.log(event.source.userId); //userId
  bot.push(''+event.source.userId+'', '請輸入您的姓名?');   //Bot傳送訊息
});

//觸發訊息, reply message 回覆訊息
bot.on('message', function(event) {
  console.log(event.message.type);
  if(event.message.type == 'text') {            //判斷是文字格式的
    var msg = event.message.text;
    var get_code = obj.areaCode(msg);           //查詢區域編號
    //console.log(get_code);
    var msg_info = "";
    request("http://www.cwb.gov.tw/V7/observe/24real/Data/"+get_code+".htm", function (error, response, body) {
      if (!error && response.statusCode == 200) {
        var $ = cheerio.load(body);
        var time = $('th').slice(11).eq(1).text();  //時間
        var content = $("tr td.temp1");
        var temp_val = $(content[0]).text();  //溫度
        msg_info = "觀測時間:"+time+", 目前溫度:"+temp_val;
        //console.log(msg_info);
        event.reply(msg_info).then(function(data) {
          console.log(msg);  //success
        }).catch(function(error) {
          console.log('error'); //error 
        });
      }
    });
  }else if(event.message.type == 'image'){   //判斷是圖片格式的

  }else if(event.message.type == 'video'){   //判斷是影片格式的

  }else if(event.message.type == 'audio'){   //判斷是聲音格式的

  }else if(event.message.type == 'location'){   //判斷是地點的
    //console.log(event.message.address);
    var msg = event.message.address;
    var get_code = obj.areaCode(msg);           //查詢區域編號
    var msg_info = "";
    request("http://www.cwb.gov.tw/V7/observe/24real/Data/"+get_code+".htm", function (error, response, body) {
      if (!error && response.statusCode == 200) {
        var $ = cheerio.load(body);
        var time = $('th').slice(11).eq(1).text();  //時間
        var content = $("tr td.temp1");
        var temp_val = $(content[0]).text();  //溫度
        msg_info = "觀測時間:"+time+", 目前溫度:"+temp_val;
        //console.log(msg_info);
        event.reply(msg_info).then(function(data) {
          console.log(msg);  //success
        }).catch(function(error) {
          console.log('error'); //error 
        });
      }
    });

  }else if(event.message.type == 'sticker'){   //判斷是表情符號

  }
});

const linebotParser = bot.parser();
app.post('/', linebotParser);

var port = process.env.PORT || 8080;
//因為 express 預設走 port 3000，而 heroku 上預設卻不是，要透過下列程式轉換
var server = http.createServer(app).listen(port, function () {
  var port = server.address().port;
});
