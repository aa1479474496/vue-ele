<template>
  <div class='main' :class="siderClass">
    <nav-header></nav-header>
    <bread-crumb />
    <button @click="addCounter">点击加数</button>
    <ul>
      <li v-for="item in num">{{item}}</li>
    </ul>
    <div>
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
    data() {
      return {
        msg: 'hello',
        num: [1]
      }
    },
    computed: {
      ...mapGetters([
        'siderClass'
      ])
    },
    created() {
      console.log('created');
      console.log(this.msg);
    },
    mounted() {
      console.log('mounted');
    },
    updated() {
      console.log('数据更新了');
    },
    methods: {
      addCounter() {
        this.num.push(Math.round(Math.random()*10 + 10))
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>