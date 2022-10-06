<template>
	<view class="contact">
		<image class="img" src="../../static/imgs/contactus.avif" mode="aspectFill"></image>
		<view class="infos">
			<view @click="call">联系电话：{{phone}}（点击拨打）</view>
			<view>联系地址：浙江省杭州市钱塘区4号大街物美超市1-2层F-003、209号商铺</view>
		</view>
		<map class="map" :scale="scale" :longitude="longitude" :latitude="latitude" :markers="markers"></map>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				phone:'400-618-9999',
				scale:13,
				longitude:120.35395,
				latitude:30.312666,
				markers:[
					{
						id:1,
						latitude:30.312666,
						longitude:120.35395,
						iconPath:"/static/icons/Marker.png",
						width:40,
						height:40
					}
				]
			}
		},
		methods: {
			call(){
				uni.makePhoneCall({
					phoneNumber:this.phone
				})
			}
		}
	}
</script>

<style lang="scss">
.contact{
	.img{
		width: 750rpx;
		height: 320rpx;
	}
	
	.infos{
		padding: 10rpx 20rpx;
		font-size: 30rpx;
		view{
			line-height: 60rpx;
			border-bottom: 1px solid #ccc;
		}
	}
	
	.map{
		width: 750rpx;
		height: 750rpx;
	}
}
</style>
