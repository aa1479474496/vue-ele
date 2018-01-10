
<template>
  <div>
    <template v-for="(item, index) in routeitems">
      <template v-if="!item.hidden&&item.children">
        <router-link v-if="item.children.length===1 && !item.children[0].children" :to="item.path+'/'+item.children[0].path" :key="item.children[0].name">
          <el-menu-item :index="item.path+'/'+item.children[0].path" :class="{'submenu-title-noDropdown':!isNest}">
            <i v-if="item.children[0].meta&&item.children[0].meta.icon" :class="item.children[0].meta.icon"></i>
            <span v-if="item.children[0].meta&&item.children[0].meta.title">{{item.children[0].meta.title}}</span>
          </el-menu-item>
        </router-link>
        <el-submenu v-else :index="item.name||item.path" :key="item.name">
          <template slot="title">
            <i v-if="item.meta&&item.meta.icon" :class="item.meta.icon"></i>
            <span v-if="item.meta&&item.meta.title">{{item.meta.title}}</span>
          </template>

          <template v-for="child in item.children" v-if="!child.hidden">
            <sidebar-item :is-nest="true" class="nest-menu" v-if="child.children&&child.children.length>0" :routeitems="[child]" :key="child.path"></sidebar-item>

            <router-link v-else :to="item.path+'/'+child.path" :key="child.name">
              <el-menu-item :index="item.path+'/'+child.path">
                <i v-if="child.meta&&child.meta.icon" :class="child.meta.icon"></i>
                <span v-if="child.meta&&child.meta.title">{{child.meta.title}}</span>
              </el-menu-item>
            </router-link>
          </template>
        </el-submenu>
      </template>

    </template>

  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'SidebarItem',
    props: {
      routeitems: {
        type: Array
      },
      isNest: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      ...mapGetters([
        'isFold',
      ])
    },
    mounted() {
      // console.log(this.routers);
    },

  }
</script>