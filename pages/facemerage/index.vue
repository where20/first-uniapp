<template>
	<view class="content">
		<text class="title">{{title}}</text>
	</view>
</template>

<script>
	export default {
		data: {
			title: 'FaceMerage 神奇变脸'
		}
	}
</script>

<style>
	.content {
		flex: 1;
		justify-content: center;
		align-items: center;
	}

	.title {
		font-size: 36px;
		color: #8f8f94;
	}
</style>
