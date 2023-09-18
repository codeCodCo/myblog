// 晴、多云、阴、阵雨、雷阵雨、雷阵雨伴有冰雹、雨夹雪、小雨、中雨、大雨、暴雨、大暴雨、特大暴雨、阵雪、小雪、中雪、大雪、暴雪、雾、冻雨
// 天气图库表 
// 天气函数 
function weatherPickIcon(weather, time) {
  console.log('这是一个公共函数')
  const weatherIconUrl = "";
  let last_weather = weather;

  let dayOrNight = time > 17 ? true : false;
  let severe_weather = ["暴雪", "暴雨", "大暴雨", "特大暴雨", "阵雨", "雷阵雨", "雷阵雨伴有冰雹", "阵雪", "冻雨", "冰雹", "大雾"]
  let raining = ["雨", "小雨", "中雨", "大雨"];
  let snow = ["雪", "小雪", "中雪", "大雪", "雨夹雪"];
  let vapors = ['雾', '雾霾'];

  severe_weather.includes(last_weather, 0) ? last_weather = "severe_weather" : last_weather;
  raining.includes(last_weather, 0) ? last_weather = "raining" : last_weather;
  snow.includes(last_weather, 0) ? last_weather = "snow" : last_weather;
  vapors.includes(last_weather, 0) ? last_weather = "vapors" : last_weather;
  last_weather.indexOf("多云") > -1 ? last_weather = "cloudy" : last_weather;
  last_weather.indexOf("阴") > -1 ? last_weather = "overcast" : last_weather;
  console.log("last_weather:::", last_weather, raining.indexOf(v => v == last_weather));
  switch (last_weather) {
    case "晴":
      return dayOrNight ? weatherIconUrl = "Sunny.png" : weatherIconUrl = "Moon.png"; break;
    case "cloudy":
      return dayOrNight ? weatherIconUrl = "Cloudy.png" : weatherIconUrl = "Cloudy_Night.png"; break;
    case "raining":
      return weatherIconUrl = dayOrNight ? weatherIconUrl = "Drizzle.png" : weatherIconUrl = "Drizzle_Night.png"; break;
    case "overcast":
      return weatherIconUrl = "overcast.png"; break;
    case "severe_weather":
      return weatherIconUrl = "severe_weather.png";
    case "snow":
      return weatherIconUrl = dayOrNight ? weatherIconUrl = "Snowing.png" : weatherIconUrl = "Snowing_Night.png"; break;
    case "vapors":
      return weatherIconUrl = dayOrNight ? weatherIconUrl = "Mist.png" : weatherIconUrl = "Mist.png"; break;
    default:
      return weatherIconUrl = "unknown.png"; break;
  };
  return weatherIconUrl;
}
function outF2() {
  console.log('这是一个公共函数')
}
// 注意：暴露的时候使用export{函数名}
export {
  weatherPickIcon,
  outF2
} 