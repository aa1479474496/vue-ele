<template>
  <div>
      <side-bar></side-bar>
      <container></container>
  </div>
</template>

<script>
  import { SideBar, Container } from '@/components/layout'


  export default {
    name: 'layout',
    components: {
      SideBar,
      Container,

    },
    mounted() {
    }
  }
</script>