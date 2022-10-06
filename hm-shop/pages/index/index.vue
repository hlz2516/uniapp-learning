<template>
	<view class="home">
		<swiper circular indicator-dots autoplay>
			<swiper-item v-for="item in swipers" :key="item.id">
				<image :src="item.img"></image>
			</swiper-item>
		</swiper>
		<view class="nav">
			<view class="nav-item" v-for="(item,index) in navs" :key="index" @click="navClick(item.path)">
				<view :class="item.icon"></view>
				<text>{{item.title}}</text>
			</view>
		</view>
		<!-- 推荐商品 -->
		<view class="hot-goods">
			<view class="hot-title">
				推荐商品
			</view>
			<good-list :goods="hotGoods" />
		</view>
	</view>
</template>

<script>
	import GoodsList from '../../components/GoodsList/GoodsList.vue';
	
	export default {
		components:{
			'good-list':GoodsList
		},
		data() {
			return {
				swipers:[],
				hotGoods:[],
				navs:[
					{
						icon:'iconfont icon-shangpin',
						title:'黑马超市',
						path:'/pages/goods/goods'
					},
					{
						icon:'iconfont icon-guanyuwomen',
						title:'联系我们',
						path:'/pages/contact/contact'
					},
					{
						icon:'iconfont icon-tupian',
						title:'社区图片',
						path:'/pages/pics/pics'
					},
					{
						icon:'iconfont icon-shipin',
						title:'学习视频',
						path:'/pages/videos/videos'
					}
				]
			}
		},
		onLoad() {
			this.getSwipers();
			this.getHotGoods();
		},
		methods: {
			async getSwipers(){
				// uni.request({
				// 	url:"http://localhost:8080/static/api/getlunbo.json",
				// 	success: (res) => {
				// 		if( res.data.status !== 0){
				// 			return uni.showToast({
				// 				title:'获取轮播图数据失败！',
				// 				icon:"error"
				// 			})
				// 		}
				// 		this.swipers = res.data.message;
				// 		console.log(this.swipers);
				// 	},
				// 	fail: (result) => {
				// 		return uni.showToast({
				// 			title:'发送请求失败！',
				// 			icon:'error'
				// 		})
				// 	}
				// })
				try{
					const res = await this.$myRequest({
						url:'/static/api/getlunbo.json'
					});
					this.swipers = res.message;
				}catch(e){
					//TODO handle the exception
					console.error(e);
				}	

			},
			async getHotGoods(){
				try{
					const res = await this.$myRequest({
						url:'/static/api/getHotGoods.json'
					});
					this.hotGoods = res.message.goods;
				}catch(e){
					//TODO handle the exception
					console.error(e);
				}	
			},
			navClick(url){
				console.log('url',url);
				uni.navigateTo({
					url
				})
			}
		}
	}
</script>

<style lang="scss">
	.home{
		swiper{
			width: 750rpx;
			height: 380rpx;
			image{
				width: 100%;
				height: 100%;
			}
		}
		
		.nav{
			display: flex;
			justify-content: center;
			align-items: center;
			margin-top: 10rpx;
			.nav-item{
				flex:1;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				font-size: 32rpx;
				view{
					width: 120rpx;
					height: 120rpx;
					margin: 10rpx 0;
					background-color: $shop-color;
					border-radius: 50%;
					font-size: 55rpx;
					color: #fff;
					line-height: 120rpx;
					text-align: center;
				}
			}
		}
		.hot-goods{
			background-color: #eee;
			overflow: hidden;
			margin-top: 10px;
			
			.hot-title{
				height: 50px;
				line-height: 50px;
				color: $shop-color;
				text-align: center;
				letter-spacing: 20px;
				background-color: #fff;
				margin: 7rpx 0 15rpx;
			}
			
		}
	}
</style>
