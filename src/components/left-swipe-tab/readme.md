## 介绍

<font color="red" size="5">现在增加的左右联动功能</font>

<font color="blue">之前是左边点击右边跟着动,现在右边点击左边的选项也会滑动到相应的选项</font>

测试数据也打包进来了,测试的时候建议复制到对应的目录,当然你也可以修改一下啊引入的数据路径

左侧选项导航滚动展示,图片在插件内,导入插件以后找到对应目录可以看到

关于导航的背景色,字体颜色等都在源文件的style部分,自行修改即可

目前只测试了h5和小程序其他端没测试

<img src="/演示.gif" alt="演示" style="zoom: 80%;" />


## 使用方法

下面的两个参数都是必传的

| 参数      | 说明                                       |
| --------- | ------------------------------------------ |
| tabData   | 数据                                       |
| topheight | 选项导航上面的组件的高度,若是没有则设置成0 |

在需要调用的页面

```js
<template>
	<view>
		<view class="search">
			<!-- 输入框的样式自己写,或者使用别的框架的组件 -->
			<input  placeholder="请输入要搜索的内容" v-model="keyword"/>
		</view>
		<left-swipe-tab :topheight="topheight" :tabData="tabs"></left-swipe-tab>
	</view>
</template>

<script>
	//数据路径自己看一下,若是不对修改下
	import goods from "./goods.js";
	export default {
		data() {
			return {
				tabs:[],
				topheight:44,
				keyword: ''
			}
		},
		onReady() {
			this.tabs = goods;
		},
	}
</script>

<style lang="scss" scoped>
	.search{
		margin: 20rpx;
	}
</style>
```





