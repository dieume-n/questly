<template>
  <div>
    <router-view :key="$route.fullPath"></router-view>
  </div>
</template>
<style>
@import "~vue-toast-notification/dist/theme-default.css";
</style>