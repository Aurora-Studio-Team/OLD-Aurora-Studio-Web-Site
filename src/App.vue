<script setup>
  import NavMenu from './components/NavMenu.vue'
  import Footer from './components/Footer.vue'
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
      <el-footer class="footer">
        <Footer/>
      </el-footer>
    </el-container>
  </div>
</template>

<style scoped>
.nav_menu {
  position: relative;
}
.footer{
  position: relative;
}
</style>
