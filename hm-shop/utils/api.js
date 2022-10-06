export const myRequest = (options) => {

	let BASE_URL_ = "http://localhost:8080";

	return new Promise((resolve,reject) => {
		uni.request({
			url: BASE_URL_ + options.url,
			method: options.method || 'GET',
			data: options.data || {},
			success: (res) => {
				if (res.data.status !== 0) {
					uni.showToast({
						title: `获取数据失败！错误状态码:${res.data.status}`,
						icon: "error"
					})
					reject(res);
				}
				resolve(res.data);
			},
			fail: (err) => {
				uni.showToast({
					title: '发送请求失败！',
					icon: 'error'
				})
				reject(err);
			}
		})

	});
}
