<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false"
    @select="handleSelect">
    <el-menu-item index="0"><router-link to="/">
        <img style="width: 125px" src="/img/logo.png" alt="Aurora Studio logo" />
      </router-link>
    </el-menu-item>
    <div class="flex-grow" />
    <el-menu-item index="1"><router-link to="/">首页</router-link></el-menu-item>
    <el-menu-item index="2"><router-link to="/apps">产品</router-link></el-menu-item>
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
    <el-menu-item index="3"><router-link to="/about">关于</router-link></el-menu-item>
    <el-menu-item index="5">赞助</el-menu-item>
  </el-menu>
</template>

<script setup>
import { ref } from 'vue'

const activeIndex = ref('1')
const handleSelect = (key, keyPath) => {
  activeIndex.value = key
}

</script>

<style>
.flex-grow {
  flex-grow: 1;
}
</style>
