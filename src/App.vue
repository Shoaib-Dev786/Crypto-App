<template>
  <Header />
    <div class="bg-gray-900 p-4 md:py-20 md:px-12">
      <router-view/>
    </div>
  <Footer />
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  },
} 
</script>


 