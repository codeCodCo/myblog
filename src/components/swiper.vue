<template>
    <view class="content">
        <swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval"
            :duration="duration" indicator-color="rgba(0,0,0,0)" :style="{ 'border-radius': radius ? '20px' : '0' }">
            <swiper-item class="swiper-item" :style="{ 'border-radius': radius ? '20px' : '0' }" :key="index"
                v-for="(item, index) in  arr ">
                <image class="image-swiper" lazy-load="true" :src="'../' + item.imgurl" :style="{ 'border-radius': radius ? '20px' : '0' }"></image>
                <!-- {{ item.title }} -->
            </swiper-item>
        </swiper>
    </view>
</template>

<script setup>
import { ref, defineProps, toRefs, toRaw } from "vue";

const props = defineProps({
    //子组件接收父组件传递过来的值
    data: Array,
    radius: Boolean,
});
//使用父组件传递过来的值
const arr = toRaw(props.data);

const radius = toRefs(radius);
console.log(arr);
const background = ["color1", "color2", "color3"];
const indicatorDots = ref(true);
const autoplay = ref(true);
const interval = ref(2000);
const duration = ref(500);

const changeIndicatorDots = (e) => {
    indicatorDots = !indicatorDots;
};
const durationChange = (e) => {
    duration = e.target.value;
};
</script>

<style scoped  lang="scss"> 

.content {
    width: 100%;
 
    .swiper {
        height: 391.304rpx !important;
        display: block;
        overflow: hidden;
        .image-swiper {
            width: 100%;
            display: block;
        }

    }
}</style>
