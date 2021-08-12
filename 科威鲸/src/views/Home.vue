<template>
  <div class="home">
    <HomeTop></HomeTop>
    <HomeNav></HomeNav>
    <HomeContent></HomeContent>
  </div>
</template>

<script>
// @ is an alias to /src
// import HomeTop from './components/HomeTop'
import HomeTop from '../views/Home/components/homeTop'
import HomeNav from '../views/Home/components/homeNav'
import HomeContent from '../views/Home/components/homeContent'

export default {
  name: 'Home',
  components: {
    HomeTop,HomeNav,HomeContent
  }
}
</script>