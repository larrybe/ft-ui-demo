<script setup lang="ts">
import HeaderMenu from './HeaderMenu.vue'

import StoryHeader from './storylist_components/StoryHeader.vue'
import StoryPhoto from './storylist_components/StoryPhoto.vue'
import StoryAuthorAndWhen from './storylist_components/StoryAuthorAndWhen.vue'
import StoryTale from './storylist_components/StoryTale.vue'
import StoryTags from './storylist_components/StoryTags.vue'
</script>

<template>
  <div
    id="container"
    class="box-border bg-neutral-50 bg-gradient-to-b from-blue-50 via-sky-50 to-neutral-50 to-90%"
  >
    <div class="w-4/5 md:w-1/2 mx-auto flex flex-col gap-y-5">
      <HeaderMenu />
      <article class="box-border px-3 py-4 flex flex-col gap-1 bg-white">
        <StoryHeader :profile_photo="''" :user="'Sample User'" :username="'sampleuser'" :location="'Springfield, Missouri, USA'" />
        <StoryPhoto :full_photo="true" />
        <StoryAuthorAndWhen :name="'Sample User'" :username="'sampleuser'" :time="1724308529000" />
        <StoryTale :tale="'This component is similar to storylist component on ExplorePage but the full picture and full text is shown instead. REMEMBER: Shortening the text on ExplorePage is not done. ALSO REMEBER: TODO: clicking on the image above should have the image fill the page. A photoblog (or photolog) is a form of photo sharing and publishing in the format of a blog. It differs from a blog through the predominant use of and focus on photographs rather than text. Photoblogging (the action of posting photos to a photoblog) gained momentum in the early 2000s with the advent of the moblog and cameraphones. '"></StoryTale>
        <StoryTags :tags="['This','is','a','sample page']" />
      </article>
    </div>
  </div>
</template>

<style scoped>
#container {
  width: 100%;
  min-height: 100vh;
}
</style>