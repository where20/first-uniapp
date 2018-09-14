<template>
	<view class="page-body">
		<view class="img_wrap">
			<image :src="imageUrl" mode='aspectFit'/>
		</view>
		<view class="title">{{title}}</view>
		<button @click="uploads" class="up">拍照/选取图片识别</button>
		<view class="user-probabilitys" v-if="score">可信度:	{{score}}</view>
		<view class="user-probabilitys" v-if="msg">错误提示:	{{msg}}</view>
		<view class='bkinfo' v-if="description">
			<view class="bkcard">
				<view class="bkname">{{name}}</view>
				<view class="bkcontent">{{description}}</view>
				<view class="bkform">
					<view class="source">来源 小安知道</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import Api from "../../../static/js/api.js";
	import Util from "../../../static/js/util.js";
	export default {
		data:{
			type: '',
			title: '',
			apiUrl: '',
			imageUrl: "",
			bdzd: [],
			name: '东亚小金发藓',
			description: '',
			score: '',
			msg: ''
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
						self.imageUrl = res.tempFilePaths[0];
						uni.showLoading({
							title: "努力识别中...",
							mask: true
						});
						uni.uploadFile({
							url: self.apiUrl, //仅为示例，非真实的接口地址
							filePath: res.tempFilePaths[0],
							name: 'file',
							formData: {
								'user': 'test'
							},
							success: function (uploadFileRes) {
								uni.hideLoading();
								console.log(uploadFileRes);
								if(uploadFileRes.statusCode == 200) {
									self.bdzd = JSON.parse(uploadFileRes.data).result;
									self.name = self.bdzd[0].name;
									if(self.bdzd[0].baike_info.description == undefined) {
										self.msg = self.bdzd[0].name;
										self.score = Util.changeToPercent(self.bdzd[0].score);
										self.description = '';
									}else {
										self.score = Util.changeToPercent(self.bdzd[0].score);
										self.description = self.bdzd[0].baike_info.description;
									}
									
									console.log(self.bdzd);
								}
							}
						})
					}
				});
			}
		},
		onLoad: function (option) {
			this.imageUrl = '';
			this.description = '';
			this.msg = '';
			this.score = '';
			console.log('option', option);
			this.type = option.type;
			this.title = option.name;
			switch (option.type) {
				case 'dish': 
					this.apiUrl = Api.getDishUrl();
					break;
				case 'car': 
					this.apiUrl = Api.getCarUrl();
					break;
				case 'plant': 
					this.apiUrl = Api.getPlantUrl();
					break;
				case 'animal': 
					this.apiUrl = Api.getAnimalUrl();
					break;
				case 'logo': 
					this.apiUrl = Api.getLogoUrl();
					break;
				case 'general':
					this.apiUrl = Api.getGeneralUrl();
					break;
			}
			console.log('apiUrl:', this.apiUrl);
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
	.title{
		display: inline-block;
		width: 100%;
		font-size: 28px;
		text-align: center;
		color: #000000;
		padding: 20px 0;
	}
	.up {
		color: rgb(255, 255, 255);
		font-size: 24px;
		font-family: 微软雅黑;
		width: 200px;
		height: 60px;
		vertical-align: middle;
		text-align: center;
		line-height: 60px;
		border-radius: 25px;
		background-color: #3cc51f;
	}
	.user-probabilitys{
		font-family: 微软雅黑;
		color: rgb(35,175,8);
		text-align: center;
	}
	.bkinfo{
		margin: 30px 40px 0;
		display: flex;
		flex-direction: row;
		box-shadow:0px 2px 4px 4px #f2f2f2;
		padding: 10px 0;
		border-bottom:1px solid #f2f2f2
	}
	.bkcard{
		display: flex;
		flex-direction: column;
		color: #fff;
		text-align: center;
		color: #000000;
	}
	.bkname{
		margin-bottom: 10px;
	}
	.bkcontent{
		overflow:hidden;
		text-overflow:ellipsis;
		-webkit-box-orient:vertical;
		-webkit-line-clamp:2;
		font-size:24px;
		color:#858585;
		margin:0px 40px ;
		line-height:40px;
		text-indent: 48px;
		text-align: left;
	}
	.bkform{
		font-size: 20px;
		color: #c0c0c0;
		border-top: 1px solid #eeeeee;
		margin:30px 40px 0px 40px;
		padding: 20px;
	}
</style>
