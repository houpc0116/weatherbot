/* 解析天氣資訊 */
const request = require('request');
const cheerio = require("cheerio");
const line = require("node-line-bot-api");
const express = require('express');
const app = express();

const port = process.env.PORT || 8080;
//init with auth
/* line.init({
  accessToken: '{YOUR_ACCESS_TOKEN}',
  // (Optional) for webhook signature validation
  channelSecret: '{YOUR_CHANNEL_SECRET}'
}); */
var url = {
  基隆:'http://www.cwb.gov.tw/V7/observe/24real/Data/46694.htm',
  台北:'http://www.cwb.gov.tw/V7/observe/24real/Data/46692.htm',
  新北:'http://www.cwb.gov.tw/V7/observe/24real/Data/46688.htm',
  桃園:'http://www.cwb.gov.tw/V7/observe/24real/Data/C0C48.htm',
  新竹:'http://www.cwb.gov.tw/V7/observe/24real/Data/46757.htm',
  苗栗:'http://www.cwb.gov.tw/V7/observe/24real/Data/C0E75.htm',
  台中:'http://www.cwb.gov.tw/V7/observe/24real/Data/46749.htm',
  南投:'http://www.cwb.gov.tw/V7/observe/24real/Data/46765.htm',
  彰化:'http://www.cwb.gov.tw/V7/observe/24real/Data/C0G66.htm',
  雲林:'http://www.cwb.gov.tw/V7/observe/24real/Data/C0K33.htm',
  嘉義:'http://www.cwb.gov.tw/V7/observe/24real/Data/46748.htm',
  台南:'http://www.cwb.gov.tw/V7/observe/24real/Data/46741.htm',
  高雄:'http://www.cwb.gov.tw/V7/observe/24real/Data/46744.htm',
  屏東:'http://www.cwb.gov.tw/V7/observe/24real/Data/C0R22.htm',
  宜蘭:'http://www.cwb.gov.tw/V7/observe/24real/Data/46708.htm',
  花蓮:'http://www.cwb.gov.tw/V7/observe/24real/Data/46699.htm',
  台東:'http://www.cwb.gov.tw/V7/observe/24real/Data/46766.htm',
  綠島:'http://www.cwb.gov.tw/V7/observe/24real/Data/C0S73.htm',
  蘭嶼:'http://www.cwb.gov.tw/V7/observe/24real/Data/46762.htm',
  澎湖:'http://www.cwb.gov.tw/V7/observe/24real/Data/46735.htm',
  金門:'http://www.cwb.gov.tw/V7/observe/24real/Data/46711.htm',
  馬祖:'http://www.cwb.gov.tw/V7/observe/24real/Data/46799.htm',
};

for (var key in url) {
  // Closure
  (function(key){
    request(url[key], function (error, response, body) {
      if (!error && response.statusCode == 200) {
        //console.log(body);
        console.log(key);
        var $ = cheerio.load(body);
        var time = $('th').slice(11).eq(1).text();
        console.log("觀測時間: "+time);
        var temp = $('td').slice(0).eq(0).text();
        console.log("現在溫度: "+temp);
        var td_no = 2;
        var weather = $('td').slice(td_no).eq(0).text();
        var i = 10;
        while (weather == 'X') {
          weather = $('td').slice(td_no+i).eq(0).text();
          td_no = td_no + i;
        }
        console.log("目前天氣: "+weather);  
        console.log("------------------");
      }
    })

  })(key);
}
/*
1. 取得訊息內容, 判斷是哪一個區域
2. 推播區域天氣資訊
*/
/*app.post('/webhook/', line.validator.validateSignature(), (req, res, next) => {
  // get content from request body
  const promises = req.body.events.map(event => {
    // reply message
    return line.client
      .replyMessage({
        replyToken: event.replyToken,
        messages: [
          {
            type: 'text',
            text: event.message.text
          }
        ]
      })
  })
  Promise
    .all(promises)
    .then(() => res.json({success: true}))
}) */
var server = app.listen(port, function () {
  var host = server.address().address;
  var port = server.address().port;
});