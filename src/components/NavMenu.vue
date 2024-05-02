<template>
  <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      :ellipsis="false"
      @select="handleSelect"
  >
    <el-menu-item index="0">
      <img
          style="width: 125px"
          src="/img/logo.png"
          alt="Aurora Studio logo"
      />
    </el-menu-item>
    <div class="flex-grow" />
    <el-menu-item index="/Home">首页</el-menu-item>
    <el-menu-item index="/Apps">产品</el-menu-item>
    <!--<el-sub-menu index="2">
      <template #title>产品</template>
      <el-menu-item index="2-1">Aurora Star Launcher</el-menu-item>
      <el-menu-item index="2-2">Aurora Music</el-menu-item>
      <el-menu-item index="2-3">item three</el-menu-item>
      <el-sub-menu index="2-4">
        <template #title>item four</template>
        <el-menu-item index="2-4-1">item one</el-menu-item>
        <el-menu-item index="2-4-2">item two</el-menu-item>
        <el-menu-item index="2-4-3">item three</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    -->
    <el-menu-item index="/About">关于</el-menu-item>
    <el-menu-item index="5">赞助</el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

</script>

<style>
.flex-grow {
  flex-grow: 1;
}
</style>
