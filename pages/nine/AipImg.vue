<template>
	<view class="page-body">
		<view class="img_wrap">
			<image :src="img" mode='aspectFit'/>
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
			}
		}
	}
</script>

<style>
	.img_wrap {
		margin-bottom: 10px;
		width: 100%;
		height: 300px;
		background: #ececec;
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
		background-color: rgb(26, 160, 225);
	}
</style>
