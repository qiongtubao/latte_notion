<template>
  <el-row class="tac">
    <el-col :span="12">
      <!-- <h5 class="mb-2">Day</h5> -->
      <el-menu
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="el-menu-vertical-demo"
        default-active="2"
        text-color="#fff"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-sub-menu index="1">
          <template #title>
            <el-icon><location /></el-icon>
            <span>日</span>
          </template>
          <el-menu-item-group title="生活">
            <el-menu-item index="1-1"><router-link to="/PieTime">时间统计</router-link></el-menu-item>
            <el-menu-item index="1-2">消费统计</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="工作">
            <el-menu-item index="1-3">工作清单</el-menu-item>
          </el-menu-item-group>
          <!-- <el-sub-menu index="1-4">
            <template #title>看书</template>
            <el-menu-item index="1-4-1"></el-menu-item>
          </el-sub-menu> -->
        </el-sub-menu>
        <el-menu-item index="2">
          <el-icon><icon-menu /></el-icon>
          <span>星期</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <el-icon><document /></el-icon>
          <span>月</span>
        </el-menu-item>
        <el-menu-item index="4">
          <el-icon><setting /></el-icon>
          <span>年</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import {Document,Menu as IconMenu,Location,Setting} from '@element-plus/icons-vue'
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style>
.aside {
    
}
</style>
