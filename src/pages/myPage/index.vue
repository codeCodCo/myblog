<template>
    <view class="header">
        <view class="user-title">
            <view class="avator-img">
                <image src="../../static/images/man_avator.png"></image>
            </view>
            <view class="user-content">
                <view class="user-info">
                    <span>David</span>
                    <span class="point-type">
                        <view class="move-star"></view>
                        <span>水星会员</span>
                    </span>
                </view>

                <view class="point-num">
                    <image mode="widthFix" src="../../static/images/jf.png"></image>
                    <span>567332</span>
                    <div class="triangles"></div>
                </view>

            </view>
        </view>
        <view class="deed-content">
            <view class="deed-item">
                <image src="../../static/images/store_card.png"></image>
                <view>到店券</view>
                <view class="deed-num">共<span style="color: #c82b20; margin: 0 6.41rpx;">0</span>张</view>
            </view>
            <view class="deed-item">
                <image src="../../static/images/trans_dinner.png"></image>
                <view>外卖券</view>
                <view class="deed-num">共<span style="color: #c82b20; margin: 0 6.41rpx;">0</span>张</view>
            </view>
            <view class="deed-item">
                <image src="../../static/images/card_packet.png"></image>
                <view>卡券包</view>
                <view class="deed-num">共<span style="color: #c82b20; margin: 0 6.41rpx;">0</span>张</view>
            </view>
            <view class="deed-item">
                <image src="../../static/images/change_card.png"></image>
                <view>兑换券</view>
                <view class="deed-num">立即兑换</view>
            </view>
        </view>
    </view>
    <view class="container">
        <view class="card-content">
            <view class="card-point">
                <view>
                    <image mode="widthFix" src="../../static/images/solid--ad.png"></image>
                </view>
                <view>
                    <view class="card-point-title">积分卡</view>
                    <view class="card-point-info">积分可兑换商品</view>
                </view>
            </view>
            <view class="card-balance">
                <view class="card-balance-info">
                    <view class="card-balance-title">余额</view>
                    <view class="card-balance-content">
                        <view>￥<span style="font-family: '阿里妈妈数黑体'; color: #422710;font-size: 20px;font-weight: 900;">1231.23</span></view>
                        <view class="pay-button">
                            <image mode="widthFix" src="../../static/images/pay_card.png"></image>
                            <span>付款</span>
                        </view>
                    </view>
                </view>

                <view class="money-packet">
                    <image src="../../static/images/money.png"></image>
                    <span>我的钱包 </span>
                    <span> ></span>
                </view>
            </view>
        </view>
        <view class="order-content">
            <view class="order-item">
                <view class="order-info">
                    <p>我的订单</p>
                    <p>查看最近的订单</p>
                </view>
                <image mode="widthFix" src="../../static/images/order.png"></image>
            </view>
            <view class="slice-triangle"></view>
            <view class="order-item">
                <view class="order-info">
                    <p>我的收藏</p>
                    <p>收藏餐厅好打卡</p>
                </view>
                <image mode="widthFix" src="../../static/images/college.png"></image>
            </view>
        </view>
        <view class="setting-info">
            <view class="setting-item">发票管理<view class="setting-select">></view>
            </view>
            <view class="setting-item">我的地址<view class="setting-select">></view>
            </view>
            <view class="setting-item">投诉与建议<view class="setting-select">></view>
            </view>
            <view class="setting-item">条款与规则<view class="setting-select">></view>
            </view>
        </view>
    </view>
</template>

<script setup lang='ts'>

</script>

<style scoped lang='scss'>
.header {
    background: linear-gradient(to bottom, #fff, #f9f9f9);
    padding-left: 38.462rpx;
    padding-right: 38.462rpx;
    padding-bottom: 29.487rpx;
    font-family: "阿里妈妈方圆体Regular";
}

.container {
    padding-left: 38.462rpx;
    padding-right: 38.462rpx;
    background-color: #f9f9f9;
    font-family: "阿里妈妈方圆体Regular";
}

.user-title {
    display: flex;
    justify-content: flex-start;
    height: 171.795rpx;
    margin-top: 138.462rpx;
}

.avator-img {
    width: 106.41rpx;
    height: 106.41rpx;
    border-radius: 50%;
    background: linear-gradient(to bottom, #000, #aaaaaa, #dddddd, #eeeeee, transparent);
    margin-right: 19.231rpx;

    image {
        width: 100%;
        height: 100%;
    }
}

.user-content {}

.user-info {
    display: flex;
    justify-content: flex-start;
    margin-bottom: 19.231rpx;
    font-weight: 600;
}

.point-type {
    font-size: 12px;
    margin-left: 7.692rpx;
    background: linear-gradient(to right, #8b1a5a, #d66f2d);
    border-top-left-radius: 19.231rpx;
    border-top-right-radius: 6.41rpx;
    border-bottom-left-radius: 6.41rpx;
    border-bottom-right-radius: 19.231rpx;
    padding-top: 6.41rpx;
    padding-bottom: 6.41rpx;
    padding-left: 10rpx;
    padding-right: 10rpx;
    color: #fbeac6;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    .move-star {
        width: 28.641rpx;
        height: 28.641rpx;
        border-radius: 50%;
        background: linear-gradient(to bottom right, #6ec5d3, #9bd7f2, transparent);
        margin-right: 14.41rpx;
    }
}

.triangles {
    display: inline-block;
    border: 12.923rpx solid transparent;
    border-left: 14.923rpx solid #8b1a5a;
    border-radius: 10rpx;
}

.point-num {
    background: linear-gradient(to right, #8b1a5a, #c82c2b);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 16px;
    font-weight: bold;

    image {
        width: 28.923rpx;
        height: 28.923rpx;
        margin-right: 10.256rpx;
    }

    .triangles {
        margin-left: 10rpx;
    }

}

.deed-content {
    background-color: #fff;
    border-radius: 30.231rpx;
    display: flex;
    justify-content: space-around;

    .deed-item {
        text-align: center;
        margin-top: 32.051rpx;
        margin-bottom: 33.333rpx;

        image {
            width: 58.308rpx;
            height: 58.308rpx;
            margin-bottom: 15.385rpx;
        }

        .deed-num {
            margin-top: 12.821rpx;
            color: #999999;
        }
    }
}

.card-content {
    background-color: #f1c242;
    border-radius: 30.231rpx;
    padding-top: 28.205rpx;

    .card-point {
        display: flex;
        background-color: #fff;
        border-top-right-radius: 30.231rpx;
        border-top-left-radius: 30.231rpx;
        justify-content: flex-start;
        max-width: 314.487rpx;
        padding-top: 25.641rpx;
        padding-left: 12.821rpx;
        padding-right: 20.513rpx;
        margin-left: 28.205rpx;

        image {
            width: 92.308rpx;
            margin-bottom: -12.821rpx;
            margin-right: 47.436rpx;
        }

        .card-point-title {
            font-size: 14px;
            font-weight: bold;
            text-align: right;
            margin-bottom: 15.385rpx;
            color: #412007;
        }

        .card-point-info {
            font-size: 12px;
            color: #412007;
        }
    }

    .card-balance {
        background-color: #f6cc47;
        // width: 100%;border-radius: 30.231rpx;
        border-bottom-left-radius: 30.231rpx;
        border-bottom-right-radius: 30.231rpx;
        height: 176.923rpx;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .card-balance-title {
            // display: block;
            font-size: 12px;
            margin-left: 28.205rpx;
            margin-bottom: 16.077rpx;
            font-weight: 600;
        }

        .card-balance-info {}

        .card-balance-content {
            display: flex;
            justify-content: flex-start;
            margin-left: 28.205rpx;
        }

        .pay-button {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            margin-left: 15.385rpx;

            image {
                width: 28.795rpx;
                margin-right: 8.974rpx;
            }

            width: 86.846rpx;
            // height: 38.462rpx;
            border-radius: 30.231rpx;
            background: linear-gradient(to top, #482c12, #5f3d1b, #734c22);
            color: #f5c948;
            font-size: 12px;
            padding: 6.41rpx 14.821rpx;
        }

        .money-packet {
            // padding-top: 35.897rpx;
            // padding-bottom:  35.897rpx;
            background-color: #f6d855;
            border-top-left-radius: 50.641rpx;
            border-bottom-left-radius: 50.641rpx;
            width: 266.667rpx;
            height: 101.282rpx;
            display: flex;
            align-items: center;
            font-size: 14px;
            color: #412007;
            font-size: 16px;
            font-weight: 600;

            image {
                width: 42.308rpx;
                height: 42.308rpx;
                margin-left: 28.205rpx;
            }
        }
    }
}

.order-content {
    background-color: #fff;
    border-radius: 30rpx;
    display: flex;
    justify-content: space-around;
    margin-top: 29.487rpx;

    .order-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 23.077rpx;
        margin-bottom: 23.077rpx;
        padding-top: 12rpx;
        padding-bottom: 12rpx;

        image {
            width: 67.436rpx;
            margin-left: 30.513rpx;
        }

        .order-info {
            :nth-child(1) {
                font-size: 16px;
                font-weight: 600;
                margin-bottom: 10rpx;
            }

            :nth-child(2) {
                font-size: 14px;
                color: #666;
            }
        }
    }

    .slice-triangle {
        margin-top: 23.077rpx;
        margin-bottom: 23.077rpx;
        border-left: 1px solid #f3f3f3;
    }

}

.setting-info {
    margin-top: 67.949rpx;


    .setting-item {
        display: flex;
        justify-content: space-between;
        height: 96.154rpx;
    }

    .setting-select {
        color: #d6d6de;
    }
}
</style>