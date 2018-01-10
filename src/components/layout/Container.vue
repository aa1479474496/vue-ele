<template>
  <div class='main' :class="siderClass">
    <nav-header></nav-header>
    <bread-crumb />
    <div class="aa">
      <router-view/>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import NavHeader from './NavHeader.vue'
  import BreadCrumb from './BreadCrumb.vue'
  export default {
    components: {
      NavHeader,
      BreadCrumb
    },
    computed: {
      ...mapGetters([
        // 'hideNavBar',
        // 'phoneNav',
        'siderClass'
      ])
    },
    mounted() {
    }
  }
</script>

<style lang="scss" scoped>
  
</style>