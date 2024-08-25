<script setup lang="ts">
defineProps({
  photo: String,
  full_photo: Boolean
})
</script>

<template>
  <div v-if="full_photo">
    <div class="flex">
      <img src="/bucket/k-mitch-hodge-5BksR6Ne-Vo-unsplash.jpg"/>
    </div>
  </div>
  <div v-else>
    <div class="flex md:max-h-[calc(100vh*0.7)] overflow-clip">
      <img :src="photo" class="self-end" />
    </div>
  </div>
</template>
