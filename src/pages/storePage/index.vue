<template>
    <view class="container">
        <view class="header">
            <view class="head-swiper">
                <Swiper :data="imgList" :radius="true"></Swiper>
            </view>

            <view class="jf-container">
                <view class="jf">
                    <view class="jf-info">
                        <p class="jf-title">积分好礼</p>
                        <p class="jf-title-info">您有520积分</p>
                    </view>
                    <image mode="widthFix" src="@/static/images/riliao.png"></image>
                </view>
                <view class="jf">
                    <view class="jf-info">
                        <p class="jf-title">好物推荐</p>
                        <p class="jf-title-info">优选大牌好物</p>
                    </view>
                    <image mode="widthFix" src="@/static/images/gf.png"></image>
                </view>
                <view></view>
            </view>
        </view>
        <view class="list">
            <view class="list-title">爆品<span style="color: #c82a1f;">推荐</span></view>
            <view class="list-content">
                <view class="list-ls">
                    <view class="list-square">
                        <image class="square-top-img" mode="widthFix" src="@/static/images/zs.png"></image>
                        <image class="square-bg-img" mode="widthFix" src="@/static/images/weather_night.png"></image>
                    </view>
                    <view class="list-ls-name">阿里好物</view>
                </view>
                <view class="list-ls">
                    <view class="list-square">
                        <image class="square-top-img" mode="widthFix" src="@/static/images/jj.png"></image>
                        <image class="square-bg-img" mode="widthFix" src="@/static/images/sunny_after.png"></image>
                    </view>
                    <view class="list-ls-name">阿里好物</view>
                </view>
                <view class="list-ls">
                    <view class="list-square">
                        <image class="square-top-img" mode="widthFix" src="@/static/images/yj.png"></image>
                        <image class="square-bg-img" mode="widthFix" src="@/static/images/night_car.png"></image>
                    </view>
                    <view class="list-ls-name">阿里好物</view>
                </view>
                <view class="list-ls">
                    <image class="square-top-img" mode="widthFix" src="@/static/images/tj.png"></image>
                    <view class="list-square">
                        <image class="square-bg-img" mode="widthFix" src="@/static/images/afternoon.png"></image>
                    </view>
                    <view class="list-ls-name">阿里好物</view>
                </view>
            </view>
        </view>
        <view class="ads">

            <view class="ads-content">
                <view class="ads-title">
                    <view class="ads-title-name">爱心套餐</view>
                    <view class="ads-title-more">
                        挑选更多
                    </view>
                </view>
                <view class="oval"></view>
                <view class="ads-goods">
                    <view class="ads-goods-item">
                        <image mode="widthFix" src="../../static/images/foods/food_01.png"></image>
                        <view class="goods-item-info">
                            <view>月度套餐</view>
                            <view>→</view>
                        </view>
                    </view>
                    <view class="ads-goods-item">
                        <image mode="widthFix" src="../../static/images/foods/food_02.png"></image>
                        <view class="goods-item-info">
                            <view>季度套餐</view>
                            <view>→</view>
                        </view>
                    </view>
                    <view class="ads-goods-item">
                        <image mode="widthFix" src="../../static/images/foods/food_03.png"></image>
                        <view class="goods-item-info">
                            <view>一杯咖啡</view>
                            <view>→</view>
                        </view>
                    </view>
                    <view class="ads-goods-item">
                        <image mode="widthFix" src="../../static/images/foods/food_04.png"></image>
                        <view class="goods-item-info">
                            <view>甄选</view>
                            <view>→</view>
                        </view>
                    </view>
                </view>

            </view>
            <view>
                <view class="list-title">为您精选</view>
                <customWaterfallsFlow :value="data.list">
                    <view class="item" v-for="(item, index) in data.list" :key="index" slot="slot{{index}}">
                        <view class="title">{{ item.title }}</view>
                        <view class="goods-list-info">
                            <view class="price">{{ "￥" + item.price }}</view>
                            <view class="option"><button>+</button></view>
                        </view>
                    </view>
                </customWaterfallsFlow>
            </view>

        </view>
        <view class="goods">
        </view>
    </view>
</template>
  <!-- <script src="./iconfont.js"></script> -->
<script setup>
import Swiper from '../../components/swiper.vue';
import customWaterfallsFlow from '../../components/custom-waterfalls-flow'
import { getCurrentInstance, ref, reactive, toRaw, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted, onRenderTracked, onRenderTriggered } from 'vue'
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

const lists = reactive([
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

const data = reactive({
    list: [
        { image: '../static/images/foods/food_07.jpg', title: '牛肉盖饭', price: '14.9' },
        { image: '../static/images/foods/food_08.jpg', title: '绿色草原', price: '14.9' },
        { image: '../static/images/foods/food_09.jpg', title: '我是标题2', price: '14.9' },
        { image: '../static/images/foods/food_10.jpg', title: '我是标题2', price: '14.9' },
        { image: '../static/images/foods/food_11.jpg', title: '我是标题2', price: '14.9' },
        { image: '../static/images/foods/food_12.jpg', title: '我是标题2', price: '14.9' },
        { image: '../static/images/foods/food_13.jpg', title: '我是标题2', price: '14.9' },
        { image: '../static/images/foods/food_14.jpg', title: '我是标题2', price: '14.9' },
        { image: '../static/images/foods/food_15.jpg', title: '我是标题2', price: '14.9' },
        { image: '../static/images/foods/food_16.jpg', title: '我是标题2', price: '14.9' },
        { image: '../static/images/foods/food_17.jpg', title: '我是标题2', price: '14.9' }
    ]
});
const waterfallsFlowRef = ref(null);
function reset() {
    data.list = [{ image: '../static/images/foods/food_07.jpg', title: '我是标题1', price: '14.9' }]
    waterfallsFlowRef.value.refresh();
}

</script>

<style lang="scss">
.container {
    font-family: "阿里妈妈方圆体Regular";
    /* background: linear-gradient(to bottom, #eeeeee, #ffffff);  */
    background: #fff;
    padding-top: 15.385rpx;
    padding-left: 29.487rpx;
    padding-right: 29.487rpx;
}

.header {
    display: flex;
    justify-content: flex-start;
    margin-top: 217.949rpx;

}

.head-swiper {
    width: 329rpx;
    height: 378rpx;
    border-radius: 20px;
    margin-right: 12.821rpx;
    box-shadow: 12.821rpx 12.821rpx 12.821rpx #eeefef;
}


.jf {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 351.282rpx;
    height: 130rpx;
    background: linear-gradient(to bottom, #fdf7f4, #fffffe);
    border-radius: 20px;
    /* padding-top: 25.641rpx; */
    padding: 26rpx 20rpx;
    /* padding-left: 16.667rpx; */
    margin-bottom: 25rpx;
    margin-right: 30rpx;
    box-shadow: 12.821rpx 12.821rpx 12.821rpx #eeefef;
}

.jf-title {
    color: #232323;
    font-size: 20px;
    margin-bottom: 38rpx
}

.jf-title-info {
    color: #232323;
    font-size: 12px
}

.jf image {
    display: block;
    width: 160.256rpx;
    margin-left: 16rpx;
}

.list {
    background: #ffffff;
}



.list-content {
    display: flex;
    justify-content: space-around;
}

.list-ls {
    position: relative;
    width: 120.513rpx;
    height: 120.513rpx;
}

.square-top-img {
    width: 44.872rpx;
    position: absolute;
    top: -8px;
    left: -8px;
}

.list-title {
    color: #232323;
    font-size: 16px;
    font-family: "阿里妈妈数黑体";
    margin-bottom: 19.231rpx;
}

.list-square {
    width: 120.513rpx;
    height: 120.513rpx;
    border-radius: 20px;
    background-color: #f6f1e9;
}

.list-ls-name {
    font-size: 12px;
    text-align: center;
    margin-top: 12.821rpx;
}

.square-bg-img {
    width: 100%;
}

.goods-img {
    width: 332.051rpx;
    height: 405.128rpx;
}

.ads {
    .ads-content {
        background-color: #d7d2cd;
        border-radius: 30.231rpx;
        margin-top: 61.538rpx;
        padding: 24.359rpx 24.359rpx;
        margin-bottom: 60.256rpx;
        overflow: hidden;

        .ads-title {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 24.359rpx;

            .ads-title-more {
                font-weight: bold;
                font-size: 12px; 
                color: #3a200b;
                background-color: #fff;
                padding: 8rpx 14rpx;
                border-radius: 25rpx;
                z-index: 99;
            }
        }

        .oval {
            height: 84rpx;
            /* width: 383.59rpx; */
            background-color: #e6e6e6;
            border-radius: 50%/100% 100% 0 0;
            position: relative;
            top: -94rpx;
            /* right: -13px; */
            left: 290rpx;
            z-index: 0;
            transform: rotate(180deg);
        }

        .ads-goods {
            border-radius: 30.231rpx;
            display: flex;
            justify-content: space-between;
            align-items: center;
            overflow-x: auto;
            margin-top: -64rpx;

            .ads-goods-item {
                background-color: #fff;
                border-radius: 30.231rpx;
                margin-right: 20.385rpx;
                padding: 1.282rpx 1.282rpx;

                .goods-item-info {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    font-size: 10px;
                    font-weight: 600;
                    color: #3a200b; 
                    padding: 20.513rpx 20.513rpx;

                }

                image {
                    width: 200rpx;
                    border-radius: 30.231rpx;
                }
            }

        }
    }

    .title {
        font-family: "阿里数黑体";
        font-size: 16px;
        font-weight: bold;
        margin-top: 25.641rpx;
    }

    .goods-list-info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 32.051rpx;


        .price {
            font-family: "阿里数黑体";
            color: #c82a1f;
            font-size: 16px;
            font-weight: bold;
        }

        .option {
            button {
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: #f4be43;
                width: 35.897rpx;
                height: 35.897rpx;
                padding: 0.641rpx 0.641rpx;
                font-size: 14px;
                font-weight: bold;
                border-radius: 50%;

            }

        }
    }


}
</style>   
