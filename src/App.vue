<script setup lang="ts">
import NavMenu from './components/NavMenu.vue'
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header class="nav_menu">
        <NavMenu/>
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

.nav_menu{
  position: fixed;
  top: 0;
  left: 5px;
  right: 5px;
}

</style>
