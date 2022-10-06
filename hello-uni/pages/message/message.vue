<template>
	<view>
		<view>hello uniapp</view>
		<button @click="chooseImg">选择图片</button>
		<image v-for="(item,index) in imgArr" :key="index" :src="item" @click="preview(item)"></image>
		<!-- #ifdef H5 -->
		<view>只在h5中显示</view>
		<!-- #endif -->
		<!-- #ifdef MP-WEIXIN -->
		<view>只在小程序中显示</view>
		<!-- #endif -->
		<navigator url="/pages/index/index" open-type="switchTab">跳转至主页</navigator>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				imgArr:[]
			}
		},
		methods:{
			chooseImg(){
				uni.chooseImage({
					count:3,
					success:(result)=> {
						// console.log('result',result);
						this.imgArr = result.tempFilePaths;
					}
				})
			},
			preview(current){
				uni.previewImage({
					current,
					urls:this.imgArr,
					loop:true
				})
			},
			test(){
				// #ifdef H5
				console.log('只在h5打印');
				// #endif
				// #ifdef MP-WEIXIN
				console.log('只在小程序打印');
				// #endif
			}
		},
		onUnload() {
			console.log('message页被卸载');
		}
	}
</script>

<style>
	/* #ifdef H5 */
	.box1{
		background-color: #fff;
	}
	/* #endif */
	/* #ifdef MP-WEIXIN */
	.box1{
		background-color: #fff;
	}
	/* #endif */
</style>