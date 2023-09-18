<script setup lang="ts">
import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";
onLaunch(() => {
  console.log("App Launch");
});
onShow(() => {
  console.log("App Show");
});
onHide(() => {
  console.log("App Hide");
});
</script>
<style>
uni-swiper .uni-swiper-dot {
  width: 10px!important;
  height: 3px!important;
}

uni-swiper .uni-swiper-dot-active {
  background-color: #000!important;
  width: 20px!important;
  border-radius: 5px!important;
}
</style>
