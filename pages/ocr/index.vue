<template>
	<view class="page-body">
		<view class="img_wrap">
			<image :src="imageUrl" mode='aspectFit'/>
		</view>
		<button @click="uploads" class="up">拍照/选取图片识别</button>
		</view>
	</view>
</template>

<script>
	export default {
		data:{
			motto: '花卉识别',
			images: {},
			info: "",
			icrName: "",
			score: "",
			userInfo: {},
			backUserInfo: {},//后台得到的微信用户信息
			hasUserInfo: false,
			openId: "",
			nickName: "",
			baikeUrl: "",
			imageUrl: "",
			description: "",
			remark: ""
		},
		methods: {
			uploads() {
				var self = this;
				uni.chooseImage({
					count: 1, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album', 'camera'], //从相册选择
					success: function (res) {
						console.log(JSON.stringify(res.tempFilePaths));
						self.imageUrl = res.tempFilePaths;
					}
				});
			}
		}
	}
</script>

<style>
	.img_wrap {
		margin-bottom: 10px;
		width: 100%;
		min-height: 300px;
		background: #ececec;
		padding: 20px 40px;
		box-sizing: border-box;
	}
	.img_wrap image{
		width: 100%;
	}
	.up {
		color: rgb(255, 255, 255);
		font-size: 20px;
		font-family: 微软雅黑;
		width: 200px;
		height: 50px;
		vertical-align: middle;
		text-align: center;
		line-height: 45px;
		border-radius: 25px;
		background-color: #3cc51f;
	}
</style>
