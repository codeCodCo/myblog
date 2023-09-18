<template>
    <view class="container">
        <view class="swiper-content">
            <Swiper :data="imgList" :radius="false"></Swiper>
        </view>
        <view class="info-content">
            <view class="ads-content">
                <image mode="widthFix" src="../../static/images/ads_banner.jpg"></image>
                <!-- <video src=""></video> -->
            </view>
            <view class="infos">
                <image src="../../static/images/notice_logo.png"></image>娱乐功能区现已开放，欢迎来玩！
            </view>
        </view>
        <view class="game-content">
            <view class="game-item">
                <image src="../../static/images/game/g1.png"></image>
                <view class="game-name">积木消消乐</view>
            </view>
            <view class="game-item">
                <image src="../../static/images/game/g2.png"></image>
                <view class="game-name">扫雷</view>
            </view>
            <view class="game-item">
                <image src="../../static/images/game/g3.png"></image>
                <view class="game-name">地狱闯关</view>
            </view>
            <view class="game-item">
                <image src="../../static/images/game/g4.png"></image>
                <view class="game-name">恐龙快跑</view>
            </view>
            <view class="game-item">
                <image src="../../static/images/game/g5.png"></image>
                <view class="game-name">小飞机</view>
            </view>
            <view class="game-item">
                <image src="../../static/images/game/g6.png"></image>
                <view class="game-name">2048</view>
            </view>
        </view>

        <view class="vue-study"> 
            <router-link tag="div" style="margin-left:200px" to="/register">点击进入学习论坛</router-link>
        </view>
    </view>
</template>

<script setup lang='ts'>
import { reactive } from 'vue'
import Swiper from '../../components/swiper.vue';
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


</script>

<style scoped lang='scss'>
.container {
    padding-left: 29.487rpx;
    padding-right: 29.487rpx;

    .swiper-content {}

    .info-content {
        .ads-content {
            width: 100%;
            margin-top: 160rpx;

            image {
                width: 100%;
                border-radius: 30rpx;
            }
        }

        .infos {
            background-color: #fff;
            border-radius: 30rpx;
            height: 80rpx;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            margin-top: 20rpx;
            margin-bottom: 20rpx;
            box-shadow: 12.821rpx 12.821rpx 12.821rpx #eeefef;
        }

        image {
            width: 40rpx;
            height: 40rpx;
            // margin-left: 20rpx;
            margin-right: 20rpx;
            margin-top: 2rpx;
        }
    }



    .game-content {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        align-items: center;

        .game-item {
            flex: 1;
            padding: 10rpx 0;
            height: 160rpx;
            width: calc((100% - 20rpx) / 2); // 这里的10px = (分布个数3-1)*间隙5px, 可以根据实际的分布个数和间隙区调整
            min-width: calc((100% - 20rpx) / 2); // 加入这两个后每个item的宽度就生效了
            max-width: calc((100% - 20rpx) / 2); // 加入这两个后每个item的宽度就生效了 
            background-color: #fff;
            border-radius: 30rpx;
            box-shadow: 12.821rpx 12.821rpx 12.821rpx #eeefef;
            margin-right: 20rpx;
            margin-bottom: 20rpx;
            text-align: center;

            &:nth-child(2n) {
                // 去除第3n个的margin-right
                margin-right: 0;
            }

            image {
                width: 80rpx;
                height: 80rpx;
            }
        }
    }
}
</style>