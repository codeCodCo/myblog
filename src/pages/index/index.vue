<template>
  <view class="container">
    <view class="header">
      <Swiper :data="imgList" :radius="false"></Swiper>
    </view>
    <view class="middle">
      <view class="address-info">
        <view class="middle-suggest">
          <view class="rest_address">
            {{ Infos.address }}
          </view>
          <view class='middle-info'>
            <image :src="Infos.weatherUrl"></image>
            {{ Infos.weather }}
            {{ Infos.suggest }}
          </view>
        </view>
        <view class="middle-ad">
          <image mode="heightFix" src="../../static/images/food_tang.png"></image>
        </view>
      </view>
    </view>
    <view class="content">
      <LeftSwipeTab :topheight="topheight" :tabData="tabs.arr"></LeftSwipeTab>
    </view>
  </view>
</template>
<!-- <script src="./iconfont.js"></script> -->
<script setup>
import Swiper from '../../components/swiper.vue';
import LeftSwipeTab from '../../components/left-swipe-tab/left-swipe-tab.vue';

// import goods from "../../components/left-swipe-tab/goods.js";
import { getCurrentInstance, ref, reactive, toRaw, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted, onRenderTracked, onRenderTriggered } from 'vue'
// import Amap from '@/static/js/amap-wx.130.js'; 
import Amap from '../../static/js/qqmap-wx-jssdk.min.js'
// ZQTBZ-JULCJ-B3KFI-KH26E-7ACMF-WYBDT
// debugger 
import { weatherPickIcon } from '../../components/common.js'

const tabs = reactive({
  arr: []
})

const imgList = reactive([
  {
    imgurl: 'static/images/one--banner.jpg',
    title: "123123"
  },
  {
    imgurl: 'static/images/two--banner.jpg',
    title: "3433423"
  },
  {
    imgurl: 'static/images/three--banner.jpg',
    title: "4564564"
  }
])

const Infos = reactive({
  address: "阜阳市颍州区河滨东路", // 已经获取到的位置
  weather: "晴朗",
  weatherUrl: "../../static/images/icon_weather/Sunny.png",
  suggest: "天气炎热，吃个西瓜吧！"
})

const getLocations = () => {
  uni.getLocation({
    type: 'wgs84',
    success: function (res) {
      console.log('当前位置的经度：' + res.longitude);
      console.log('当前位置的纬度：' + res.latitude);
      getNowCityInfo(res)  //获取城市信息
    }
  });
}

// 获取当前城市信息和天气信息
const getNowCityInfo = (lag) => {
  let qqmapsdk = new Amap({
    key: 'ZQTBZ-JULCJ-B3KFI-KH26E-7ACMF-WYBDT'  //腾讯地图 - 申请开发者密钥（key）
  });
  qqmapsdk.reverseGeocoder({
    location: {
      longitude: lag.longitude,
      latitude: lag.latitude
    },
    success(res) {
      console.log('当前位置信息', res.result);
      Infos.address = res.result.address.split("省")[1];
      let provinces = res.result.address.split("省");
      let province = res.result.address.split("省")[0]
      let city = provinces[1].split("市")[0]
      let weatherUrl = "https://wis.qq.com/weather/common?source=pc&weather_type=observe|air|index|alarm|tips&province=" + province + '省' + '&city=' + city + '市';
      uni.request({
        url: weatherUrl,
        method: 'GET',
        success: res => {
          console.log("今天的天气", res.data);
          Infos.weather = res.data.data.observe.weather;
          Infos.weatherUrl = '../../static/images/icon_weather/' + weatherPickIcon(res.data.data.observe.weather, 19);
          // swiperList.news = res.data.data.tips.observe;
          Infos.suggest = res.data.data.tips.observe[0];
        },
        fail: () => {
          console.log("天气获取失败");
        },
        complete: () => { }
      })
    }
  })
}

const swiperList = reactive({
  news: [
    '平安夜，百人祝福领取苹果~',
    '寒流来袭，你的秋裤准备好了吗？',
    '快收下，新鲜出炉冬季实用穿搭指南~'
  ],
  autoplay: true,
  interval: 2000,
  duration: 1000
})


// onBeforeMount(() => {

// })

getLocations()

const topheight = ref(111);
tabs.arr = [{
  'id': '1',
  'name': '主推',
  "nameImg": 'https://appimg.fynews.net/csdn/order_system/protal-asset/hot.png',
  'title': ['新品热卖', 'New here！'],
  'goods': [
    {
      'img': 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e25dd7488f695942cfbfd9468ac2c3e7.jpg?thumb=1&w=720&h=360',
      'url': '/pages/test1/test2'
    },
    {
      'img': 'https://m.360buyimg.com/babel/jfs/t1/156951/13/28971/148632/62eb3642E6b6fa4f1/e2f497bfb4990d74.png.webp',
      'url': '/pages/index/index'
    }
  ]
},
{
  'id': '2',
  'name': '主食',
  "nameImg": 'https://appimg.fynews.net/csdn/order_system/protal-asset/hot.png',
  'title': ['家有萌宠', 'ID Photo'],
  'goods': [
    {
      'img': 'https://m.360buyimg.com/babel/jfs/t1/205859/5/25851/179223/62ea3417E8a4ebd7a/e9306624cd6c835c.png.webp',
      'url': '/pages/test1/test2'
    },
    {
      'img': 'https://m.360buyimg.com/babel/jfs/t1/156951/13/28971/148632/62eb3642E6b6fa4f1/e2f497bfb4990d74.png.webp',
      'url': '/pages/index/index'
    }
  ]
},
{
  'id': '3',
  'name': '小吃',
  "nameImg": 'https://appimg.fynews.net/csdn/order_system/protal-asset/hot.png',
  'title': ['家有萌宠', 'ID Photo'],
  'goods': [
    {
      'img': 'https://m.360buyimg.com/babel/jfs/t1/205859/5/25851/179223/62ea3417E8a4ebd7a/e9306624cd6c835c.png.webp',
      'url': '/pages/test1/test2'
    },
    {
      'img': 'https://m.360buyimg.com/babel/jfs/t1/156951/13/28971/148632/62eb3642E6b6fa4f1/e2f497bfb4990d74.png.webp',
      'url': '/pages/index/index'
    }
  ]
},
{
  'id': '4',
  'name': '饮料',
  "nameImg": 'https://appimg.fynews.net/csdn/order_system/protal-asset/hot.png',
  'title': ['家有萌宠', 'ID Photo'],
  'goods': [
    {
      'img': 'https://m.360buyimg.com/babel/jfs/t1/205859/5/25851/179223/62ea3417E8a4ebd7a/e9306624cd6c835c.png.webp',
      'url': '/pages/test1/test2'
    },
    {
      'img': 'https://m.360buyimg.com/babel/jfs/t1/156951/13/28971/148632/62eb3642E6b6fa4f1/e2f497bfb4990d74.png.webp',
      'url': '/pages/index/index'
    }
  ]
},
{
  'id': '5',
  'name': '其他',
  "nameImg": 'https://appimg.fynews.net/csdn/order_system/protal-asset/hot.png',
  'title': ['家有萌宠', 'ID Photo'],
  'goods': [
    {
      'img': 'https://m.360buyimg.com/babel/jfs/t1/205859/5/25851/179223/62ea3417E8a4ebd7a/e9306624cd6c835c.png.webp',
      'url': '/pages/test1/test2'
    },
    {
      'img': 'https://m.360buyimg.com/babel/jfs/t1/156951/13/28971/148632/62eb3642E6b6fa4f1/e2f497bfb4990d74.png.webp',
      'url': '/pages/index/index'
    }
  ]
},
{
  'id': '6',
  'name': '首推',
  "nameImg": 'https://appimg.fynews.net/csdn/order_system/protal-asset/hot.png',
  'title': ['家有萌宠', 'ID Photo'],
  'goods': [
    {
      'img': 'https://m.360buyimg.com/babel/jfs/t1/205859/5/25851/179223/62ea3417E8a4ebd7a/e9306624cd6c835c.png.webp',
      'url': '/pages/test1/test2'
    },
    {
      'img': 'https://m.360buyimg.com/babel/jfs/t1/156951/13/28971/148632/62eb3642E6b6fa4f1/e2f497bfb4990d74.png.webp',
      'url': '/pages/index/index'
    }
  ]
},
{
  'id': '7',
  'name': '每日推荐',
  "nameImg": 'https://appimg.fynews.net/csdn/order_system/protal-asset/hot.png',
  'title': ['家有萌宠', 'ID Photo'],
  'goods': [
    {
      'img': 'https://m.360buyimg.com/babel/jfs/t1/205859/5/25851/179223/62ea3417E8a4ebd7a/e9306624cd6c835c.png.webp',
      'url': '/pages/test1/test2'
    },
    {
      'img': 'https://m.360buyimg.com/babel/jfs/t1/156951/13/28971/148632/62eb3642E6b6fa4f1/e2f497bfb4990d74.png.webp',
      'url': '/pages/index/index'
    }
  ]
},
{
  'id': '8',
  'name': '极度推荐',
  "nameImg": 'https://appimg.fynews.net/csdn/order_system/protal-asset/hot.png',
  'title': ['家有萌宠', 'ID Photo'],
  'goods': [
    {
      'img': 'https://m.360buyimg.com/babel/jfs/t1/205859/5/25851/179223/62ea3417E8a4ebd7a/e9306624cd6c835c.png.webp',
      'url': '/pages/test1/test2'
    },
    {
      'img': 'https://m.360buyimg.com/babel/jfs/t1/156951/13/28971/148632/62eb3642E6b6fa4f1/e2f497bfb4990d74.png.webp',
      'url': '/pages/index/index'
    }
  ]
},
{
  'id': '9',
  'name': '季度佳饮',
  "nameImg": 'https://appimg.fynews.net/csdn/order_system/protal-asset/hot.png',
  'title': ['家有萌宠', 'ID Photo'],
  'goods': [
    {
      'img': 'https://m.360buyimg.com/babel/jfs/t1/205859/5/25851/179223/62ea3417E8a4ebd7a/e9306624cd6c835c.png.webp',
      'url': '/pages/test1/test2'
    },
    {
      'img': 'https://m.360buyimg.com/babel/jfs/t1/156951/13/28971/148632/62eb3642E6b6fa4f1/e2f497bfb4990d74.png.webp',
      'url': '/pages/index/index'
    }
  ]
},
{
  'id': '10',
  'name': '炸鸡',
  "nameImg": 'https://appimg.fynews.net/csdn/order_system/protal-asset/hot.png',
  'title': ['家有萌宠', 'ID Photo'],
  'goods': [
    {
      'img': 'https://m.360buyimg.com/babel/jfs/t1/205859/5/25851/179223/62ea3417E8a4ebd7a/e9306624cd6c835c.png.webp',
      'url': '/pages/test1/test2'
    },
    {
      'img': 'https://m.360buyimg.com/babel/jfs/t1/156951/13/28971/148632/62eb3642E6b6fa4f1/e2f497bfb4990d74.png.webp',
      'url': '/pages/index/index'
    }
  ]
},
{
  'id': '11',
  'name': '汉堡',
  "nameImg": 'https://appimg.fynews.net/csdn/order_system/protal-asset/hot.png',
  'title': ['家有萌宠', 'ID Photo'],
  'goods': [
    {
      'img': 'https://m.360buyimg.com/babel/jfs/t1/205859/5/25851/179223/62ea3417E8a4ebd7a/e9306624cd6c835c.png.webp',
      'url': '/pages/test1/test2'
    },
    {
      'img': 'https://m.360buyimg.com/babel/jfs/t1/156951/13/28971/148632/62eb3642E6b6fa4f1/e2f497bfb4990d74.png.webp',
      'url': '/pages/index/index'
    }
  ]
},
{
  'id': '12',
  'name': '西餐',
  "nameImg": 'https://appimg.fynews.net/csdn/order_system/protal-asset/hot.png',
  'title': ['家有萌宠', 'ID Photo'],
  'goods': [
    {
      'img': 'https://m.360buyimg.com/babel/jfs/t1/205859/5/25851/179223/62ea3417E8a4ebd7a/e9306624cd6c835c.png.webp',
      'url': '/pages/test1/test2'
    },
    {
      'img': 'https://m.360buyimg.com/babel/jfs/t1/156951/13/28971/148632/62eb3642E6b6fa4f1/e2f497bfb4990d74.png.webp',
      'url': '/pages/index/index'
    }
  ]
},
{
  'id': '13',
  'name': '酒水',
  "nameImg": 'https://appimg.fynews.net/csdn/order_system/protal-asset/hot.png',
  'title': ['家有萌宠', 'ID Photo'],
  'goods': [
    {
      'img': 'https://m.360buyimg.com/babel/jfs/t1/205859/5/25851/179223/62ea3417E8a4ebd7a/e9306624cd6c835c.png.webp',
      'url': '/pages/test1/test2'
    },
    {
      'img': 'https://m.360buyimg.com/babel/jfs/t1/156951/13/28971/148632/62eb3642E6b6fa4f1/e2f497bfb4990d74.png.webp',
      'url': '/pages/index/index'
    }
  ]
},
{
  'id': '14',
  'name': '烧烤',
  "nameImg": 'https://appimg.fynews.net/csdn/order_system/protal-asset/hot.png',
  'title': ['家有萌宠', 'ID Photo'],
  'goods': [
    {
      'img': 'https://m.360buyimg.com/babel/jfs/t1/205859/5/25851/179223/62ea3417E8a4ebd7a/e9306624cd6c835c.png.webp',
      'url': '/pages/test1/test2'
    },
    {
      'img': 'https://m.360buyimg.com/babel/jfs/t1/156951/13/28971/148632/62eb3642E6b6fa4f1/e2f497bfb4990d74.png.webp',
      'url': '/pages/index/index'
    }
  ]
},
{
  'id': '15',
  'name': '其他',
  "nameImg": 'https://appimg.fynews.net/csdn/order_system/protal-asset/hot.png',
  'title': ['家有萌宠', 'ID Photo'],
  'goods': [
    {
      'img': 'https://m.360buyimg.com/babel/jfs/t1/205859/5/25851/179223/62ea3417E8a4ebd7a/e9306624cd6c835c.png.webp',
      'url': '/pages/test1/test2'
    },
    {
      'img': 'https://m.360buyimg.com/babel/jfs/t1/156951/13/28971/148632/62eb3642E6b6fa4f1/e2f497bfb4990d74.png.webp',
      'url': '/pages/index/index'
    }
  ]
}];


</script>

<style>
.container {
  font-family: "阿里妈妈方圆体Regular";
}

.header {
  height: 391.304rpx !important;
}

.middle {
  display: block;
  height: 70px;
  background: linear-gradient(to right, #f3f9fd, #ffffff);
}

.middle-suggest {
  margin-left: 14px;
}

.middle-ad image {
  height: 70px;
}

.address-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #222222;
  font-size: 16px;
  /* font-weight: bold; */
}


.rest_address {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 8px;
}

.rest_address image {
  width: 24px;
  height: 24px;
  margin-right: 10px;
}

.middle-info {
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.middle-info image {
  width: 24px;
  height: 24px;
  margin-right: 4px;
}

.content {
  display: block;
}

.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

page {
  background: #f6f6f9;
}

.horizontal {
  display: flex;
  flex-direction: row;
}

.item {
  flex: 1;
}

.happy_tui {
  padding: 0 8px;
}

.happy_tui>swiper {
  height: 30px;
  line-height: 30px;
}

.show-text-1 {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
}

.tui_item {
  font-size: 12px;
  color: #000;
  vertical-align: middle;
}

.tui_text {
  border: 1px solid #ED2A22;
  border-radius: 12px;
  font-size: 9px;
  color: #ED2A22;
  padding: 0 3px;
  margin: 0 5px 0 0;
}

.more {
  padding: 0 0 0 8px;
  border-left: 1px solid #333;
  text-align: center;
  line-height: 18px;
  margin: auto 0;
}

.more>text {
  font-size: 12px;
  color: #000;
}

.happnews {
  margin-top: 10px;
  padding: 8px 10px;
  background: white;
}
</style>
