<template>
	<!-- 主体部分 -->
	<view class="main">
		<!-- 左侧选项区 -->
		<swiper class="left" :duration="500" vertical :display-multiple-items="navCount" :style="'height:' + height + 'px'"
			:current="current">
			<swiper-item class="nav-item" :class="{ 'ac': active == index }" v-for="(item, index) in tabData"
				:key="item.name" :item-id="item.id">
				<view @click="onNav(item, index)">
					<image class="left-name-img" mode="widthFix" :src="item.nameImg"></image>
					<view class="nav-name">{{ item.name }}</view>
				</view>
			</swiper-item>
		</swiper>
		<!-- 右侧内容区 -->
		<scroll-view class="right" scroll-y scroll-with-animation enable-back-to-top :scroll-top="scrolltop"
			:style="'height:' + height + 'px'" @scroll="scroll">
			<view class="goods-item" v-for="(item, index) in tabData" :key="index">
				<text style="padding-left: 10rpx;">{{ item.title[0] }}</text>
				<text style="font-family:SimHei;font-weight:bold;padding-left: 10rpx;">{{ item.title[1] }}</text>
				<u-divider :text="item.name" textPosition="left" textColor="#000"></u-divider>
				<navigator v-for="i in item.goods" :key="i.url" :url="i.url">
					<view class="goods-content">
						<image class="image" :src="i.img" />
						<view class="goods-cs">
							<view class="goods-title">炸鸡脆饼饼干</view>
							<view class="goods-info">限时上新</view>
							<view class="goods-lag">麦乐鸡会员专享价</view>
							<view class="goods-ch">
								<view class="goods-price">￥19.9</view>
								<button class="goods-option">选规格</button>
							</view>
						</view>
					</view>
				</navigator>
			</view>
		</scroll-view>
	</view>
</template>
<script>
export default {
	name: 'left-swipe-tab',
	props: {
		tabData: {
			type: Array,
			default: () => []
		},
		topheight: {
			type: Number,
			default: 0
		}
	},
	data() {
		return {
			arr: [],
			scrolltop: 0,
			active: 0,
			height: '',
			navCount: 0,
			navScroll: '',
			current: 0,
		}
	},
	created() {
		this._ini();
	},
	methods: {
		onNav(item, index) {
			// 当前点击的选项
			this.active = index;
			// 当前点击的选项的对应的产品的高度
			this.scrolltop = this.arr[index];
			// console.log('当前高度:',this.arr[index]);
		},
		scroll(e) {
			//两个分类直接的相差一定要超过100px,不然要修改这里的一百,目前我们这个相差大概是在400px左右,所以我给了100px,多给点也没事
			//这一步主要是右侧滑动的时候,左侧的选项也会跟着滑动
			const index = this.arr.findIndex(ele => e.detail.scrollTop > ele && ele + 100 > e.detail.scrollTop);
			if (index > 0) {
				this.active = index;
				this.current = index;
			}
		},
		_ini() {
			setTimeout(() => {
				this.$nextTick(() => {
					// 若是上面需要增加搜索框等其他组件需要把他的高度获取出来 这样才能计算出我们分类的高度
					const wid = uni.getSystemInfoSync()
					// console.log('可使用窗口高度:',wid.windowHeight);
					// console.log('顶部组件this.topheight:',this.topheight);
					this.height = wid.windowHeight - this.topheight;
					// console.log('选项导航高度:',this.height);
					this.navCount = Math.round(this.height / 50);
					// 获取每个分类的高度
					uni.createSelectorQuery().in(this).selectAll('.goods-item').boundingClientRect((rects) => {
						// console.log('rects:',JSON.stringify(rects));
						rects.forEach((rect) => {
							// console.log('rect.top:',rect.top);
							this.arr.push(rect.top - rects[0].top);
						})
					}).exec()
				})
			}, 100)
		}
	}
}
</script>
<style lang="scss" scoped>
// 左侧导航背景颜色
$leftbackground: #f4f4f4;
//左侧导航文字颜色
$leftcolor: #666666;
//左侧选中背景
$leftacbg: #ffffff;
//左侧选中文字颜色
$leftacclo: #c82a1f;

////////////////////////////
.main {
	background-color: #F7F8F9;
	display: flex;
	justify-content: flex-start;

	.left {
		width: 25%;
		background-color: $leftbackground;

		.nav-item {
			// height: 200%;
			// line-height: 104rpx;
			font-size: 14px;
			color: $leftcolor;
			text-align: center;
		}

		.ac {
			color: $leftacclo;
			font-size: 30rpx;
			background: $leftacbg;
			font-weight: bold;
			border-bottom-left-radius: 12px;
		}

		.nav-item:nth-child(2) {
			border-top-right-radius: 12px;
		}

		.left-name-img {
			display: block;
			margin: 0 auto;
			width: 24px;
		}

		.nav-name {
			display: block;
		}
	}

	.right {
		width: 75%;
		background-color: #fff;
		.goods-item {
			margin-bottom: 20rpx;
			padding-top: 20rpx;
			background-color: #fff;

			.goods-content {
				display: flex;
				justify-content: flex-start; 
				margin-top: 26rpx;
				margin-bottom: 26rpx;
				margin-left: 34rpx;
				margin-right: 34rpx;
				border-bottom: 1px solid #f2f2f2;
			}

			.goods-content image {}

			.goods-cs {}

			.goods-title {
				color: #222222;
				font-size: 12px;
				font-weight: bold;
				margin-bottom: 21rpx;
			}

			.goods-info {
				color: #232323;
				font-size: 10px;
				padding: 1px;
				border-radius: 4px;
				width: 41px;
				border: 1px solid #232323;
				margin-bottom: 20rpx;
			}

			.goods-lag {
				color: #999999;
				font-size: 10px;
				margin-bottom: 26rpx;
			}

			.goods-ch{
				display: flex; 
			}

			.goods-price {
				color: #222222;
				font-size: 18px;
				font-weight: bold;
				margin-right: 10px;
			}

			.goods-option { 
				justify-items: flex-end;
				height: 44.872rpx;
				line-height: 44.872rpx;
				width: 48px;
				/* padding: 6.41rpx 12.821rpx; */
				padding: 1px;
				background-color: #f4bb40;
				font-size: 12px;
				border-radius: 10px;
				/* box-sizing: content-box; */
				color: #222222;
			}

			.image { 
				width: 50%;
				height: 202rpx;
				border-radius: 20rpx;
				margin-bottom: 10rpx;
				margin-right: 26rpx;
			}
		}
	}
}
</style>

f4f4f4