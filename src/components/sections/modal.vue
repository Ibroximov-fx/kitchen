<template>
  <div class="absolute z-50 top-0 left-0 w-[444px] h-[931px] ">
    <div
        class="relative w-full h-full bg-cover bg-center"
        :style="{ backgroundImage: `url(${Knife})` }"
    >
      <div class="absolute inset-0 bg-black/64 backdrop-blur-[33px]"></div>
      <div class="relative z-50 pt-10 pl-12 pb-[190px]">
        <img class="cursor-pointer" @click="$emit('closeModal')" src="../../assets/chevronLeft.png" alt="chevronLeft" />

        <div class="pt-[51px]">
          <p class="uppercase text-[18px] text-white">{{$t("modalName")}}</p>
          <p class="uppercase text-[18px] text-white pt-[35px]">{{$t("modalName2")}}</p>
          <p class="uppercase text-[18px] text-white pt-[35px]">{{$t("modalName3")}}</p>
          <p class="uppercase text-[18px] text-white pt-[35px]">{{$t("modalName4")}}</p>
          <p class="uppercase text-[18px] text-white pt-[35px]">{{$t("modalName5")}}</p>
          <p class="uppercase text-[18px] text-white pt-[35px]"> {{$t("modalName6")}}</p>
          <p class="uppercase text-[18px] text-white pt-[35px]">{{$t("modalName7")}}</p>
        </div>

        <div class="pt-[53px]">
          <p class="uppercase text-white font-semibold opacity-60">{{$t("modalAbout")}}</p>
          <p class="uppercase text-white font-semibold opacity-60 pt-[15px]">{{$t("modalAbout2")}}</p>
          <p class="uppercase text-white font-semibold opacity-60 pt-[15px]">{{$t("modalAbout3")}}</p>
          <p class="uppercase text-white font-semibold opacity-60 pt-[15px]">{{$t("modalAbout4")}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Knife from '../../assets/knife.png'
defineEmits(["closeModal"]);
</script>


