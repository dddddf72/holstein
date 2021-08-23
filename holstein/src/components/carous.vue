<template>
    <div>
        <div class="bannerBox">
            <div class="swiper-container gallery-top" style="width:720px;height:425px">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="(item,index) of bigImg" :key="index">
                        <img class="img" :src="item" style="width:720px">
                    </div>
                </div>
                <div class="swiper-button-next swiper-button-white">
                    <i class="el-icon-arrow-right"></i>
                </div>
                <div class="swiper-button-prev swiper-button-white">
                    <i class="el-icon-arrow-left"></i>
                </div>
            </div>
            <div style="height: 15px;width: 720px;"></div>
            <div class="swiper-container gallery-thumbs">
                <div class="swiper-wrapper">
                    <div class="swiper-slide swiper-bottom" v-for="(item,index) of bigImg" :key="index">
                        <img class="img" :src="item" >
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Swiper from 'swiper'
import { Pagination } from 'swiper';
    export default {
        components: { Pagination },
        props:{
            siide:{
                type:Array,
                default:function(){
                    return []
                }
            }
        },
        created() {
            this.$nextTick(function () {
            this.galleryThumbsLunbo();
            this.galleryTopLunbo();
            });
        },
        data() {
            return {
                bigImg: [
                    'https://t7.baidu.com/it/u=3165657288,4248157545&fm=193&f=GIF',
                    'https://t7.baidu.com/it/u=2942499027,2479446682&fm=193&f=GIF',
                    'https://t7.baidu.com/it/u=2610975262,3538281461&fm=193&f=GIF',
                    'https://t7.baidu.com/it/u=4138158235,3956816634&fm=193&f=GIF'
                ],

            }
        },
        methods: {
            galleryTopLunbo() {
                this.galleryTop = new Swiper('.gallery-top', {
                    spaceBetween: 0,
                    loop: true,
                    loopedSlides: 5,
                    // 左右按钮
                    navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    },
                    thumbs: {        //thumbs组件专门用于制作带缩略图的swiper
                    swiper: this.galleryThumbs,
                    slideThumbActiveClass: 'swiper-slide-thumb-active',
                    },
                });
            },
            galleryThumbsLunbo() {
                    this.galleryThumbs = new Swiper('.gallery-thumbs', {
                    spaceBetween: 15,    //在slide之间设置距离（单位px）
                    slidesPerView: 3,    //设置slider容器能够同时显示的slides数量
                    loop: true,        //设置为true 则开启loop模式
                    freeMode: true,    //默认为false，普通模式：slide滑动时只滑动一格
                    loopedSlides: 7,    //一般设置大于可视slide个数2个即可
                    watchSlidesVisibility: true,   //开启watchSlidesVisibility选项前需要先开启watchSlidesProgress
                    watchSlidesProgress: true,   //开启这个参数来计算每个slide的progress(进度、进程)
                });
            },
            event() {
                const self = this;
                return {
                    
                };
            },
            network() {
                const self = this;
                return {
                    
                };
            }
        },
        
    }
</script>

<style lang="scss">
.bannerBox{
  .img{
    width: 100%;
    height: 100%;
  }
  .gallery-top{
    width: 350px;
    height: 250px;
    border: 1px solid #CCD2E7;
    border-radius: 8px;
  }
  .gallery-thumbs{
    width: 350px;
    height: 100px;
    img{
      border: 1px solid #CCD2E7;
      border-radius: 4px;
    }
   
  }
  .swiper-slide-thumb-active{
    border: 2px solid #284198;
    border-radius: 4px;
  }
}
    
</style>