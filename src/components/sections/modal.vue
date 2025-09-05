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
          <p class="uppercase text-[18px] text-white">Кухонные ножи TUOTOWN</p>
          <p class="uppercase text-[18px] text-white pt-[35px]">Складные ножи TUOTOWN</p>
          <p class="uppercase text-[18px] text-white pt-[35px]">Кухонные ножи QXF</p>
          <p class="uppercase text-[18px] text-white pt-[35px]">Точильные камни</p>
          <p class="uppercase text-[18px] text-white pt-[35px]">Наборы для BBQ</p>
          <p class="uppercase text-[18px] text-white pt-[35px]">Кухонные принадлежности</p>
          <p class="uppercase text-[18px] text-white pt-[35px]">Истические товары</p>
        </div>

        <div class="pt-[53px]">
          <p class="uppercase text-white font-semibold opacity-60">Новости</p>
          <p class="uppercase text-white font-semibold opacity-60 pt-[15px]">О компании</p>
          <p class="uppercase text-white font-semibold opacity-60 pt-[15px]">Контакты</p>
          <p class="uppercase text-white font-semibold opacity-60 pt-[15px]">Как проехать</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Knife from '../../assets/knife.png'
defineEmits(["closeModal"]);
</script>


