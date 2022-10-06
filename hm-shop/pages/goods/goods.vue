<template>
	<view class="goods-container">
		<good-list :goods="goods" />
		<view class="end" v-if="end">--没有更多商品了哦--</view>
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
				pageIndex:1,
				goods:[],
				total:0,
				end:false
			}
		},
		methods: {
			async getGoods(pageIndex){
				try{
					const res = await this.$myRequest({
						url:'/static/api/getGoods' + pageIndex + '.json'
					});
					this.total = res.message.total;
					return res.message.goods;
				}catch(e){
					//TODO handle the exception
					console.error(e);
				}	
			},
		},
		async onLoad() {
			this.goods = await this.getGoods(this.pageIndex);
		},
		async onReachBottom() {
			//通过比较当前商品数量和接口返回的数据总量来控制是否到底
			if(this.total === this.goods.length){
				return this.end = true;
			}
			this.pageIndex++;
			let nextGoods = await this.getGoods(this.pageIndex);
			this.goods.push(...nextGoods);
		}
		
	}
</script>

<style lang="scss">
.goods-container{
	background-color: #ccc;
	
	.end{
		text-align: center;
		color: #eee;
		font-size: 32rpx;
		margin-top: 20rpx;
	}
}
</style>
