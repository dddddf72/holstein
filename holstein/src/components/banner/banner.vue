<template>
    <div>
        <div class="swiper-container" ref="mySwiper" @mouseenter="onEnter" @mouseleave="onLeave">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item, index) in swiperList"
                        :key="index">
					<video id="videoPlay"  :ref="'videoPlayer' + index" v-if="item.fileType==3"  
					style="width:100%;height:430px;background-color: #f5f5f5;">
						<source :src="getImgUrl(item.fileUrl)" type="video/mp4" style="width:100%;height:430px" />
						您的浏览器不支持Video标签。
					</video>
					<a v-show="!isPlay" class="play-btn el-icon-video-play" @click="playVideo" v-if="item.fileType == 3"></a>
					<a v-show="isPlay" class="play-btn el-icon-video-pause" @click="stopVideo" v-if="item.fileType == 3"></a>
                    <div v-else-if="item.fileType == 1">
                        <img class="swiper-slide" :src="getImgUrl(item.fileUrl)">
                    </div>
                </div>

            </div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
        </div>
        <div class="banner">
            <div v-for="(item,index) in swiperList" :key="index">
				<video @click="sildeTo(index)" :style="{border:(index == select ? '2px solid #81d8d0': '')}" loop v-if="item.fileType == 3"
				       :src="getImgUrl(item.fileUrl)" class="video"></video>
                <img @click="sildeTo(index)" :style="{border:(index == select ? '2px solid #81d8d0': '')}" class="img"
                     :src="getImgUrl(item.fileUrl)" alt="" v-else-if="item.fileType == 1">
            </div>
        </div>
    </div>

</template>

<script>
    import Swiper from 'swiper';
    import 'swiper/dist/css/swiper.css';
	
	import {videoPlayer} from "vue-video-player";
	import "video.js/dist/video-js.css";
	import "videojs-flash";

    export default {
		components:{
			videoPlayer
		},
        props: ['swiperList'],
        name: "banner",
        data() {
            return {
				autoplay: true,//是否自动切换
				isPlay:false,//播放状态
				isIn:false,//鼠标是否位于播放器内
				cutTime:5000,//轮播时间，单位毫秒
				nowIndex: 0,
                select: '0',
				swiperList:[],
				videoStatus:false,
            }
			this.videoStatus = (this.swiperList[0].fileType=3)
        },
        methods: {
            getImgUrl(productImgUrl) {
                return this.getBaseImgUrl(productImgUrl);
            },
            sildeTo(index) {
                this.select = index
                this.swiper.slideTo(index, 1000, false)
            },
            onEnter() {
                this.swiper.stopAutoplay()
            },
            onLeave() {
                this.swiper.startAutoplay()
			},
			//监听视频的播放、暂停、播放完毕等事件
			listenVideo() {
				var  videoStatus = this.videoStatus;
				if(videoStatus){
					//注意：这样获取的dom是一个数组，必须加上[0]索引才能正确的添加事件
					let myVideo = this.$refs['videoPlayer' + this.nowIndex];
					//监听播放
					if(myVideo == null || myVideo ==undefined || myVideo == ''){
						return
					}
					myVideo[0].addEventListener('play', () => {
							this.autoplay = false;
							this.isPlay = true;
					});
					//监听暂停
					myVideo[0].addEventListener('pause', () => {
						this.autoplay = true;
						this.isPlay = false;
					});
					//监听播放完毕
					myVideo[0].addEventListener('ended', () => {
						//时间归零
						myVideo[0].currentTime = 0;
						this.autoplay = true;
						this.isPlay = false;
					});
				}
				
			},
			//播放视频
			playVideo() {
				
				//注意：这样获取的dom是一个数组，必须加上[0]索引才能正确的添加事件
				var vdo = document.getElementById("videoPlay");
				vdo.play();
				this.isPlay = true;
			},
			//暂停视频
            stopVideo() {
                var vdo = document.getElementById("videoPlay");
                vdo.pause();
				this.isPlay = false;
            },
        },
        computed: {
            swiper() {
                return this.$refs.mySwiper.swiper;
            }
        },
        mounted() {
            let _this = this
            new Swiper('.swiper-container', {
                prevButton: '.swiper-button-prev',
                nextButton: '.swiper-button-next',
                autoplay: 3000,
                speed: 1000,
                // loop: true,
                // slidesPerView: 'auto',
                centeredSlides: true,
                loopedSlides: 5,
                initialSlide: 0,
                autoplayDisableOnInteraction: false,
                effect: 'fade',
                observer: true,
                observeParents: false,
                onSlideChangeStart: function (swiper) {
                    _this.select = swiper.realIndex
                    _this.listenVideo()
                },
                onClick: function (swiper) {
					
                }
            
            });
			//初始监听第一个视频
			this.listenVideo();

        }
    }
</script>

<style scoped>
    .swiper-slide {
        background-size: cover !important;
        background-repeat: no-repeat !important;
        background-position: center center !important;
		background-color: #f5f5f5;
        height: 400px;
    }

    video {
        height: 400px;
        width: auto;
    }

    .banner {
        margin-top: 10px;
        height: 100px;
        width: 100%;
        display: flex;
        padding: 10px;
    }

    .img {
        margin: 0 10px;
        width: 80px;
        height: 80px;
    }
	
	.video {
	    margin: 0 10px;
	    width: 80px;
	    height: 80px;
	}

    .swiper-container {
        height: 400px;
        padding-top: 10px;
        padding-bottom: 150px;
    }
	.play-btn{
		font-size: 60px;
		color: #fff;
		position: absolute;
		top:50%;
		left: 50%;
		transform: translate(-50%,-50%);
		&:hover{
			cursor: pointer;
		}
	}

</style>
