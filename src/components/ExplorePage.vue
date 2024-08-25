<script setup lang="ts">
import HeaderMenu from './HeaderMenu.vue'
import StoriesList from './StoriesList.vue'
</script>

<template>
  <div
    id="container"
    class="box-border bg-neutral-50 bg-gradient-to-b from-blue-50 via-sky-50 to-neutral-50 to-90%"
  >
    <div class="w-4/5 md:w-1/2 mx-auto flex flex-col gap-y-5">
      <HeaderMenu />
      <StoriesList />
    </div>
  </div>
</template>

<style scoped>
#container {
  width: 100%;
  min-height: 100vh;
}
</style>
