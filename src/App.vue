<script setup>
  import NavMenu from './components/NavMenu.vue'
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header class="nav_menu">
        <NavMenu />
      </el-header>
      <el-main>
        <router-view/>
      </el-main>
      <el-footer>

      </el-footer>
    </el-container>
  </div>
</template>

<style scoped>
.nav_menu {
  position: relative;
  top: 0;
  left: 0;
  right: 0;
}
</style>
