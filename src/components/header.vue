<template>
  <header class=" bg-[#000000CC] lg:bg-[#212121]/80 backdrop-blur-[11px] top-0 left-0 w-full lg:absolute z-50">
    <div class="max-w-[1200px] mx-auto">
      <div class=" px-[20px] lg:px-[0] flex justify-between items-center py-[18px]">
        <div class="flex items-center">
          <img class="cursor-pointer" @click="openModal" src="../assets/about.png" alt="about">
          <Modal v-if="a" @close-modal="closeModal"/>
          <img  class="pl-[23px] hidden lg:block" src="../assets/location.png" alt="location">
          <p class="uppercase text-[20px] text-[#FFFFFF] pl-9 hidden lg:block">8 981 120-11-17</p>
          <Language/>
        </div>
        <div>
          <img src="../assets/logo.png" alt="logo">
        </div>
        <div class="flex items-center gap-6">
          <img src="../assets/shops.png" alt="shops">
          <img class="hidden lg:block" src="../assets/gmail.png" alt="email">
          <img class="hidden lg:block" src="../assets/search.png" alt="search">
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";
import Modal from "./sections/modal.vue";
import Language from "./sections/language.vue";
let a = ref(false);

function openModal() {
  a.value = true;
}
function closeModal() {
  a.value = false;
}
</script>
