<template>
  <h1 class="header">
    <el-popover ref="popover4" popper-class="phone-popper" transition="fade-in-linear" placement="bottom-start" :visible-arrow="arrowShow" width="220" trigger="click" v-if="isPhone">
      <menu-items></menu-items>
    </el-popover>
    <i class="el-icon-tickets toggle-show" v-if="isPhone" v-popover:popover4></i>
    Header
  </h1>
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
        arrowShow: false
      }
    },
    computed: {
      ...mapGetters([
        'routers',
        'siderClass',
        'phoneNav'
      ]),
      isPhone() {
        return this.siderClass === 'phoneNav'
      }
    },
    mounted() {
    }
  }
</script>


<style scoped>
  .header {
    border-bottom: 1px solid skyblue;
  }
  
</style>