<template>
  <div>
    <NavBar />
    <Nuxt />
    <FooterCom />
  </div>
</template>
<script>
import NavBar from '../components/navBar.vue'
import FooterCom from '../components/footer.vue'
export default {
  name: 'Default',
  components: {
    NavBar,
    FooterCom
  }
}
</script>
