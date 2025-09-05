<template>
  <div class="relative max-w-[286px] h-[412px] bg-[#272727] rounded-[14px] items-center flex group cursor-pointer">
    <img :src="knife.img" alt="img">
    <div class="w-[37px] h-[37px] flex items-center justify-center group-hover:bg-[#C80000] group-hover:rounded-full absolute top-[24px] right-[27px] ">
      <img class="" :src="knife.bird" alt="bird">
    </div>
  </div>
  <p class="text-[#FFFFFF] text-[14px] pt-3 ">{{knife.name}}</p>
  <div class="flex gap-[28px] items-center">
    <p class="font-semibold text-[14px] text-[14px] opacity-50 text-[#FFFFFF]">{{knife.cash}}</p>
    <p class="font-semibold text-[#FF3232] text-[14px] ">{{knife.new}}</p>
  </div>
</template>
<script setup>
defineProps({
  knife:{}
})
</script>