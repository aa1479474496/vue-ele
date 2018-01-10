<template>
  <div>
    <div class="self-menus">
      <transition name="el-zoom-in-top">
        <el-menu mode="vertical" :default-active="$route.path" :collapse="isCollapse" class="el-menu-vertical-demo" background-color="#303641"
          text-color="#fff">
          <menu-items :routeitems="routers"></menu-items>
        </el-menu>
      </transition>

    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import MenuItems from './MenuItems.vue'

  export default {
    components: {
      MenuItems
    },
    computed: {
      ...mapGetters([
        'routers',
        'hideNavBar',
        'siderClass'
      ]),
      isCollapse() {
        return this.siderClass === 'foldNav'
      }
    },
    mounted() {
    },
    methods: {
      // handleOpen(key, keyPath) {
      //   console.log(key, keyPath);
      // },
      // handleClose(key, keyPath) {
      //   console.log(key, keyPath);
      // }
    }
  }
</script>

<style scoped>
  .self-menus .el-menu {
    border-right: none;
  }
</style>