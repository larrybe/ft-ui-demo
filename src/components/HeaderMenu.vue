<script setup lang="ts">
import { ref } from 'vue'
import { CollapsibleContent, CollapsibleRoot, CollapsibleTrigger } from 'radix-vue'

const open = ref(false)
</script>

<template>
  <header class="flex box-border mt-5">
    <CollapsibleRoot class="">
      <CollapsibleTrigger>
        <div class="w-2/4 md:w-2/6 p-1 rounded-lg border-2 border-slate-50 border-solid hover:bg-gradient-to-r from-cyan-100 to-blue-100">
          <img src="../assets/ftlogo.png" alt="FotoTale logo" id="logo" class="" />
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <nav>
          <menu class="flex flex-col gap-y-1.5">
            <li>
              <RouterLink class="text-lg hover:text-2xl p-1 text-black hover:text-slate-950  bg-slate-300 hover:bg-gradient-to-r from-amber-300 to-sky-300 rounded-lg" to="/explore">Home</RouterLink>
            </li>
            <li>
              <RouterLink class="text-lg hover:text-2xl p-1 text-black hover:text-slate-950  bg-slate-300 hover:bg-gradient-to-r from-amber-300 to-sky-300 rounded-lg" to="">Login/Sign Up</RouterLink>
            </li>
            <li>
              <RouterLink class="text-lg hover:text-2xl p-1 text-black hover:text-slate-950  bg-slate-300 hover:bg-gradient-to-r from-amber-300 to-sky-300 rounded-lg" to="">Search</RouterLink>
            </li>
            <li>
              <RouterLink class="text-lg hover:text-2xl p-1 text-black hover:text-slate-950  bg-slate-300 hover:bg-gradient-to-r from-amber-300 to-sky-300 rounded-lg" to="">About</RouterLink>
            </li>
            <li>
              <RouterLink class="text-lg hover:text-2xl p-1 text-black hover:text-slate-950  bg-slate-300 hover:bg-gradient-to-r from-amber-300 to-sky-300 rounded-lg" to="">Contact Us</RouterLink>
            </li>
          </menu>
        </nav>
      </CollapsibleContent>
    </CollapsibleRoot>
  </header>
</template>

<style scoped>
header {
}
</style>
