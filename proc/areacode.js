function areaCode(area){
  var code ='';
  if((area.indexOf("基隆") != -1) || (area.indexOf("Keelung") != -1)){
     code = "46694";
  }else if((area.indexOf("台北") != -1) || (area.indexOf("Taipei") != -1)){
     code = "46692";
  }else if((area.indexOf("新北") != -1) || (area.indexOf("New_Taipei") != -1)){
     code = "46688";
  }else if((area.indexOf("桃園") != -1) || (area.indexOf("Taoyuan") != -1)){
  	 code = "C0C48";
  }else if((area.indexOf("新竹市") != -1) || (area.indexOf("Hsinchu_City") != -1)){
     code = "46757";
  }else if((area.indexOf("新竹縣") != -1) || (area.indexOf("Hsinchu_County") != -1)){
  	 code = "C0E42";
  }else if((area.indexOf("苗栗") != -1) || (area.indexOf("Miaoli") != -1)){
  	 code = "C0E75";
  }else if((area.indexOf("台中") != -1) || (area.indexOf("Taichung") != -1)){
     code = "46749";
  }else if((area.indexOf("彰化") != -1) || (area.indexOf("Changhua") != -1)){
     code = "C0G64";
  }else if((area.indexOf("南投") != -1) || (area.indexOf("Nantou") != -1)){
     code = "C0K33";
  }else if((area.indexOf("雲林") != -1) || (area.indexOf("Yunlin") != -1)){
     code = "C0K33";
  }else if((area.indexOf("嘉義市") != -1) || (area.indexOf("Chiayi_City") != -1)){
     code = "C0M68";
  }else if((area.indexOf("嘉義縣") != -1) || (area.indexOf("Chiayi_County") != -1)){
  	 code = "C0M68";
  }else if((area.indexOf("台南") != -1) || (area.indexOf("Tainan") != -1)){
     code = "46741";
  }else if((area.indexOf("高雄") != -1) || (area.indexOf("Kaohsiung") != -1)){
  	 code = "46744";
  }else if((area.indexOf("屏東") != -1) || (area.indexOf("Pingtung") != -1)){
  	 code = "C0R17";
  }else if((area.indexOf("宜蘭") != -1) || (area.indexOf("Yilan") != -1)){
     code = "46708";
  }else if((area.indexOf("花蓮") != -1) || (area.indexOf("Hualien") != -1)){
     code = "46699";
  }else if((area.indexOf("台東") != -1) || (area.indexOf("Taitung") != -1)){
     code = "46766";
  }else if((area.indexOf("連江") != -1) || (area.indexOf("Lienchiang") != -1)){
     code = "46799";
  }else if((area.indexOf("金門") != -1) || (area.indexOf("Kinmen") != -1)){
     code = "46711";
  }else if((area.indexOf("澎湖") != -1) || (area.indexOf("Penghu") != -1)){
     code = "46735";
  }else{
  	 code = 0;
  }

  return code;
}

module.exports.areaCode = areaCode;   //輸出模組給其他JS使用