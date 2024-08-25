<script setup lang="ts">
import { TooltipArrow, TooltipContent, TooltipPortal, TooltipProvider, TooltipRoot, TooltipTrigger } from 'radix-vue'

import { useTimeAgo } from '@vueuse/core'
defineProps({
    name: String,
    username: String,
    time: Number
})
</script>

<template>
    <div class="py-2">
        <h2 class="text-lg font-bold"><a class="hover:text-xl hover:font-extrabold hover:underline" :href="'/user/'+username">{{ name }}</a></h2>
        <TooltipProvider>
    <TooltipRoot>
      <TooltipTrigger>
      <p>{{ useTimeAgo(time) }}</p>
      </TooltipTrigger>
      <TooltipPortal>
        <TooltipContent
          class="data-[state=delayed-open]:data-[side=bottom]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-grass11 select-none rounded-[4px] bg-white px-[15px] py-[10px] text-[15px] leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity]"
          :side-offset="5"
        >
        {{ new Date(time).toDateString() }}
          <TooltipArrow
            class="fill-white"
            :width="8"
          />
        </TooltipContent>
      </TooltipPortal>
    </TooltipRoot>
  </TooltipProvider>
        
      </div>
</template>