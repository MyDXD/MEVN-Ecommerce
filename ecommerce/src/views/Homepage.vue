<template>
    <section class="bg">
      <Header />
      <br>
      <Content />
      <br>
      <Concept />
      <br>
      <Promotion />
      <br>
      <Footer />
    </section>
  </template>
  
<script>
import Header from '../components/HeaderLadding.vue' 
import Content from '../components/Content.vue' 
import Concept from '../components/Concept.vue' 
import Promotion from '../components/Promotion.vue' 
import Footer from '../components/Footer.vue' 
  
export default {
  components: {
    Header,
    Content,
    Concept,
    Promotion,
    Footer
  }
}
</script>
  
  <style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  .bg{
    background-color:#FFF8E8 ;
  }
  </style>
  
