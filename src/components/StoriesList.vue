<script setup lang="ts">
import { onMounted, ref } from 'vue'


import StoryHeader from './storylist_components/StoryHeader.vue'
import StoryPhoto from './storylist_components/StoryPhoto.vue'
import StoryAuthorAndWhen from './storylist_components/StoryAuthorAndWhen.vue'
import StoryTale from './storylist_components/StoryTale.vue'
import StoryTags from './storylist_components/StoryTags.vue'

const accounts = ref(null)
const stories = ref(null)

async function getAccounts() {
  const url = 'faux_db/accounts.json'
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`)
    }
    accounts.value = await response.json()
  } catch (error) {
    console.error(error.message)
  }
}

async function getStories() {
  const url = 'faux_db/stories.json'
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`)
    }
    stories.value = await response.json()
  } catch (error) {
    console.error(error.message)
  }
}

onMounted(() => {
  getAccounts()
  getStories()
})
</script>

<template>
  <main class="box-border flex flex-col gap-10">
    <article
      v-for="story in stories"
      :key="story.id"
      class="box-border px-3 py-4 flex flex-col gap-1 bg-white hover:bg-gradient-to-b from-teal-100 to-sky-100"
    >
    <RouterLink :to="'/story/'+story.id">
      <StoryHeader
        :profile_photo="accounts[story.account].profile_photo"
        :user="accounts[story.account].user[0]"
        :username="accounts[story.account].username"
        :location="story.location"
      />
      <StoryPhoto :photo="story.photo" />
      <StoryAuthorAndWhen :name="accounts[story.account].user" :username="accounts[story.account].username" :time="story.time"/>
      <StoryTale :tale="story.tale" />
      <StoryTags :tags="story.tags" />
    </RouterLink>
    </article>
  
  </main>
</template>
