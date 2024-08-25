<script setup lang="ts">
import { AvatarFallback, AvatarImage, AvatarRoot } from 'radix-vue'

defineProps({
  profile_photo: String,
  user: String,
  username: String,
  location: String
})
</script>

<template>
  <header class="flex flex-row gap-x-3 h-16">
    <div>
      <AvatarRoot
        class="inline-flex items-center justify-center align-middle overflow-hidden select-none size-14 rounded-full bg-black"
      >
        <AvatarImage
          class="size-full object-cover rounded-inherit"
          :src="profile_photo"
          alt="Colm Tuite"
        />
        <AvatarFallback
          class="size-full flex items-center justify-center bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-violet-50 text-2xl font-medium leading-none"
          >{{ user[0] }}</AvatarFallback
        >
      </AvatarRoot>
    </div>
    <div>
      <h1 class="text-lg font-bold"><a class="hover:text-xl hover:font-extrabold hover:underline" :href="'/user/'+username">{{ username }}</a></h1>
      <p class="font-light">{{ location }}</p>
    </div>
  </header>
</template>
