<template>
  <div class="lg:flex justify-between items-center max-w-[1020px] mx-auto py-[60px]">
      <div @click="$emit('filterKnives', 'Кухонные ножи')" class="text-center flex flex-col items-center cursor-pointer">
      <img src="../../assets/kitchenKnives.png" alt="kitchenKnife">
      <p class="pt-[31px] opacity-40 text-[17px] text-[#FFFFFF] hover:opacity-100 hover:text-[#FF0000]">Кухонные ножи</p>
    </div>
    <div @click="$emit('filterKnives', 'Складные ножи')" class="text-center flex flex-col items-center cursor-pointer">
      <img src="../../assets/foldinngKnives.png" alt="foldingKnives">
      <p class="pt-[31px] opacity-40 text-[17px] text-[#FFFFFF] hover:opacity-100 hover:text-[#FF0000]">Складные ножи</p>
    </div>
    <div @click="$emit('filterKnives', 'Точилки для ножей')" class="text-center flex flex-col items-center cursor-pointer">
      <img class="w-[46px] h-[46px]" src="../../assets/knifeShapeners.png" alt="knifeShapers">
      <p class="pt-[31px] opacity-40 text-[17px] text-[#FFFFFF] hover:opacity-100 hover:text-[#FF0000]">Точилки для ножей</p>
    </div>
    <div @click="$emit('filterKnives', 'Аксессуары для кухни')" class="text-center flex flex-col items-center cursor-pointer">
      <img src="../../assets/kitchenAccessories.png" alt="kitchenAccessory">
      <p class="pt-[31px] opacity-40 text-[17px] text-[#FFFFFF] hover:opacity-100 hover:text-[#FF0000]">Аксессуары для кухни</p>
    </div>
  </div>
</template>
<script setup>
defineEmits([
"filterKnives",
])
</script>