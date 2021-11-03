<template>
  <div id="app">
    <Navbar/>
    <Hero/>
    <SectionOne/>
    <SectionTwo/>
    <SectionThree/>
    <SectionFour/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import SectionOne from './components/SectionOne.vue'
import SectionTwo from './components/SectionTwo.vue'
import SectionThree from './components/SectionThree.vue'
import SectionFour from './components/SectionFour.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Hero,
    SectionOne,
    SectionTwo,
    SectionThree,
    SectionFour,
    Footer
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200;400;600&family=Poppins:ital,wght@0,400;0,500;0,600;0,800;1,300;1,400&display=swap');
body{
  margin: 0;
}
#app {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  padding: 0;
  margin: 0;
  color: #2c3e50;
  margin: 50px 0 auto;
  overflow-x:hidden ;
  /* max-width: 1140px; */
}
</style>
