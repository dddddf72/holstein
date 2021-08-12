<template>
   <slide-show :slides="slides"></slide-show>
</template>
<script>
import slideShow from '../../components/Cart.vue'
export default {
  components: {
      slideShow
   },
    
    data () {
        return {
            slides: [
              {
                // src: require('../assets/slideShow/pic1.jpg'),//在Js里面，用require将图片引入进来
                src:"https://i1.mifile.cn/a4/xmad_15535933141925_ulkYv.jpg",
                title: 'xxx1',
                href: 'detail/analysis'
              },
              {
                // src: require('../assets/slideShow/pic2.jpg'),
                src:"https://i1.mifile.cn/a4/xmad_15532384207972_iJXSx.jpg",
                title: 'xxx2',
                href: 'detail/count'
              },
              {
                // src: require('../assets/slideShow/pic3.jpg'),
                src:"https://i1.mifile.cn/a4/xmad_15517939170939_oiXCK.jpg",
                title: 'xxx3',
                href: 'http://xxx.xxx.com'
              },
              {
                // src: require('../assets/slideShow/pic4.jpg'),
                src:"https://i1.mifile.cn/a4/xmad_15532384207972_iJXSx.jpg",
                title: 'xxx4',
                href: 'detail/forecast'
              }
          ],
        }
    },
    mounted() {
        console.log(this.slides)
    }
}
</script>