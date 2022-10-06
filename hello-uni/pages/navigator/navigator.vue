<template>
	<view>
		<navigator url="/pages/index/index" open-type="switchTab">跳转至主页</navigator>
		<navigator url="/pages/list/list">跳转至列表页</navigator>
		<navigator url="/pages/detail/detail" open-type="redirect">跳转至详情页</navigator>
		<button @click="toIndex">跳转至主页</button>
		<button @click="toList">跳转至列表页</button>
		<button @click="toDetail">跳转至详情页</button>
	</view>
</template>

<script>
	export default {
		methods:{
			toIndex(){
				uni.switchTab({
					url:'/pages/index/index'
				});
			},
			toList(){
				uni.navigateTo({
					url:'/pages/list/list'
				})
			},
			toDetail(){
				uni.redirectTo({
					url:'/pages/detail/detail'
				})
			}
		},
		onUnload() {
			console.log('该页面被卸载');
		}
	}
</script>

<style>
</style>