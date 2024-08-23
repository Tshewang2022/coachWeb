<template>
  <the-header></the-header>
  <router-view></router-view>
</template>

<script>
import TheHeader from './layouts/TheHeader.vue';

export default {
  components: {
    TheHeader
  }
}
</script>