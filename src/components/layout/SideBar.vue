<template>
  <div class='sider' :class="siderClass">
    <div class="logo">
      <img src="../../assets/logo.png" alt="">
    </div>
    <menu-items></menu-items>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import MenuItems from './menuItems'
  export default {
    components: {
      MenuItems
    },
    data() {
      return {

      }
    },
    computed: {
      ...mapGetters([
        // 'phoneNav',
        // 'hideNavBar',
        'siderClass'
      ])
    },
    mounted() {
      let tid
      let self = this
      window.onresize = function () {
        clearTimeout(tid);
        tid = setTimeout(() => {
          let w = window.innerWidth;
          if (w < 769) {
            if (self.siderClass!=='phoneNav') {
              // self.$store.dispatch('phoneNav', true)
              // self.$store.dispatch('isNavbar', false)
              self.$store.dispatch('changeWindowWidth', 'phoneNav')
            }
          }
          else if (w < 1300) {
            if (self.siderClass!=='foldNav') {
              // self.$store.dispatch('isNavbar', true)
              // self.$store.dispatch('phoneNav', false)
              self.$store.dispatch('changeWindowWidth', 'foldNav')
            }

          }
          else {
            if (self.siderClass) {
              // self.$store.dispatch('isNavbar', false)
              // self.$store.dispatch('phoneNav', false)
              self.$store.dispatch('changeWindowWidth', '')
            }
          }
        }, 300);
      }
    },
    methods: {
    }
  }
</script>

<style scoped>
  .logo img {
    width: 30px;
    height: 30px;
    vertical-align: middle;
  }
</style>