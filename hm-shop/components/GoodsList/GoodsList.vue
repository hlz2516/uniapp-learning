<template>
	<view class="goods-list">
		<view class="goods-item" v-for="item in goods" :key="item.id">
			<image :src="item.img_url"></image>
			<view class="price">
				<text>￥{{item.sell_price}}</text>
				<text>￥{{item.market_price}}</text>
			</view>
			<view class="good-name">
				{{item.name}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:'GoodsList',
		props:{
			goods:{
				type:Array
			}
		}
	}
</script>

<style lang="scss">
	.goods-list{
		padding: 0 15rpx;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		
		.goods-item{
			background-color: #fff;
			width: 355rpx;
			box-sizing: border-box;
			margin-top: 15rpx;
			padding: 15rpx;
			
			image{
				width: 80%;
				height: 150px;
				display: block;
				margin: 0 auto;
			}
			
			.price{
				color: $shop-color;
				fontsize: 36rpx;
				
				text:nth-child(2){
					color: #ccc;
					font-size: 28rpx;
					margin-left: 18rpx;
					text-decoration: line-through;
				}
			}
			
			.good-name{
				font-size: 32rpx;
				line-height: 40rpx;
				padding-top: 10rpx;
				padding-bottom: 15rpx;
			}
		}
	}
</style>