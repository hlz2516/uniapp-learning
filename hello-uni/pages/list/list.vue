<template>
	<view>
		<button @click="get">发送get请求</button>
		<view>
			这是列表页
		</view>
		<view class="box-item" v-for="(item,index) in list" :key="index">
			{{item}}
		</view>
		<!-- <button @click="pullDown">下拉刷新</button> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: ['前端', 'JAVA', '大数据', '测试', 'UI','前端', 'JAVA', '大数据', '测试', 'UI']
			}
		},
		onPullDownRefresh() {
			setTimeout(() => {
				this.list = ['测试', 'UI', '前端', 'JAVA', '大数据'];
				uni.stopPullDownRefresh();
			}, 1000)
		},
		onReachBottom() {
			//在scroll没有到底的时候就会触发，实际离底部多少距离触发由pages.json的pages里具体的
			//某个page的style里的onReachBottomDistance来控制，默认50px
			console.log('onReachBottom');
			this.list.push('测试', 'UI', '前端', 'JAVA', '大数据');
		},
		methods:{
			pullDown(){
				//主动调用下拉刷新
				uni.startPullDownRefresh();
			},
			get(){
				uni.request({
					url:"http://localhost:8080/static/api/getlunbo.json",
					success(res) {
						console.log('get',res);
					}
				})
			}
		}
	}
</script>

<style>
	.box-item{
		height: 100px;
		line-height: 100px;
	}
</style>
