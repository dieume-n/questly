<template>
  <div>
    <Header />
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import Header from "./components/Shared/Header";
export default {
  components: {
    Header
  }
};
</script>