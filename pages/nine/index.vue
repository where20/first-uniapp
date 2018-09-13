<template>
	<view class="page-body">
		<view class="page-section">
			<view class="uni-row">
				<view class="grid" v-for="(item, index) in routers" :key="index">
					<navigator :url="item.id"> 
						<view class="grid-icon">
							<image :src="item.icon" mode="scaleToFill"></image>
						</view>
						<view class="grid-label">
							{{item.name}}
						</view>
					</navigator>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data: {
		routers: [
			{
				id: '0',
				name: '菜品识别',
				url: '../../pages/dish/dish',
				icon: '../../static/image/dishNine.png'
			},
			{
				id: '1',
				name: '车型识别',
				url: '../../pages/car/car',
				icon: '../../static/image/carNine.png'
			},
			{
				id: '2',
				name: '植物识别',
				url: '../../pages/plant/plant',
				icon: '../../static/image/plantNine.png'
			},
			{
				id: '3',
				name: '动物识别',
				url: '../../pages/animal/animal',
				icon: '../../static/image/animalNine.png'
			},
			{
				id: '12',
				name: '快乐相似脸',
				url: '../../pages/facedetectcrossageface/facedetectcrossageface',
				icon: '../../static/image/ageNine.png'
			},
			{
				id: '13',
				name: '花卉识别',
				url: '../../pages/flower/flower',
				icon: '../../static/image/flower.png'
			},
			{
				id: '6',
				name: '通用物体识别',
				url: '../../pages/object/object',
				icon: '../../static/image/object_HL.png'
			},
			{
				id: '7',
				name: '品牌LOGO识别',
				url: '../../pages/logo/logo',
				icon: '../../static/image/tag_HL.png'
			},
			{
				id: '14',
				name: '图片转字符图片',
				url: '../../pages/image2ascii/image2ascii',
				icon: '../../static/image/ascii_HL.png'
			},
			{
				id: '9',
				name: '食材识别',
				url: '../../pages/ingredient/ingredient',
				icon: '../../static/image/ingredient_HL.png'
			},
			{
				id: '10',
				name: '手势识别',
				url: '../../pages/youtuHT/youtuHT',
				icon: '../../static/image/youtuHT.png'
			},
			{
				id: '11',
				name: '手写文字识别',
				url: '../../pages/youtuHW/youtuHW',
				icon: '../../static/image/youtuHW.png'
			}
		]
	},
	methods: {
		toPage(i) {
			console.info(i);
			var route = this.routers[i].id;
			console.log('route:', route)
		}
	}
}
</script>

<style>
	@import "../../static/css/uni.css";
	
	.grid {
		display: inline-block;
		width: 33.3333%;
		padding: 20px 10px;;
		height: auto;
		text-align: center;
		overflow: hidden;
		box-sizing: border-box;
	}
	/* .grid:before {  
		content: " ";  
		position: absolute;  
		right: 0;  
		top: 0;  
		width: 1px;  
		bottom: 0;  
		border-right: 1px solid #D9D9D9;  
		color: #D9D9D9;  
		-webkit-transform-origin: 100% 0;  
			  transform-origin: 100% 0;  
		-webkit-transform: scaleX(0.5);  
			  transform: scaleX(0.5);  
	}  
	.grid:after{  
		content: " ";  
		position: absolute;  
		left: 0;  
		bottom: 0;  
		right: 0;  
		height: 1px;  
		border-bottom: 1px solid #D9D9D9;  
		color: #D9D9D9;  
		-webkit-transform-origin: 0 100%;  
			  transform-origin: 0 100%;  
		-webkit-transform: scaleY(0.5);  
			  transform: scaleY(0.5);  
	}  
	.grid:active {  
		background-color: #ECECEC;  
	}  */
	.grid-icon{
		width: 60px;  
		height: 60px;  
		margin: 0 auto;  
	}
	.grid-icon image{
		display: block;  
		width: 100%;  
		height: 100%; 
	}
	.grid-icon + .grid-label{
		margin-top: 20px;
	}
	.grid-label{
		font-family: 微软雅黑;
		display: block;  
		text-align: center;   
		color: #000000;  
		font-size: 24rpx;  
		white-space: nowrap;  
		text-overflow: ellipsis;  
		overflow: hidden;  
	}
</style>
