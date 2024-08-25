<script setup lang="ts">
import { HashtagIcon } from '@heroicons/vue/24/solid';
defineProps({
    tags:Array
})
</script>

<template>
    <div>
        <div class="flex flex-row gap-2">
          <RouterLink v-for="tag in tags" :key="tag" :to="'/tag/'+tag"><span  class="inline-block py-1 px-2 text-black hover:text-slate-900 bg-slate-100 hover:bg-sky-300">
            {{ tag }}
          </span></RouterLink>
        </div>
      </div>
</template>