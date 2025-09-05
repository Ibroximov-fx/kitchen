  <template>
    <div class="max-w-[1200px] mx-auto">
      <Category class="" @filter-knives="categoryKnives"/>
      <div class="grid-cols-2 lg:grid grid-cols-4 gap-y-[23px]">
        <div class="relative col-span-2">
          <img src="../../assets/twoKnife.png" alt="twoKnife">
          <p class="absolute font-semibold text-[17px] text-[#FFFFFF] left-[26px] bottom-[28px]">Познакомьтесь с
            коллекцией ножей TUOTOWN</p>
          <img class="absolute right-[28px] bottom-[37px]" src="../../assets/chevronRight.png" alt="chevronRight">
        </div>
        <div v-for="knife in filCategory">
          <SmallKnives :knife="knife"/>
        </div>
      </div>
      <p class="pt-[49px] text-[#FFFFFF] text-[27px] font-medium pb-[125px] text-center">Узнавайте первым о новинках и
        новостях</p>
      <div class="grid-cols-2 md:grid grid-cols-4">
        <div v-for="knife in dataKnife.slice(0, 4)">
          <SmallKnives :knife="knife"/>
        </div>
      </div>
    </div>
    <div class="w-full border opacity-10 border-[#FFFFFF] mt-[60px]"></div>
    <div class="max-w-[1200px] mx-auto">
      <div class="pt-[60px]">
        <div class="flex gap-[53px] justify-center">
          <button @click="newKnives" :class="[num === true ? 'text-[17px] uppercase font-semibold text-[#FFFFFF]' : 'text-[17px] uppercase font-semibold text-[#FFFFFF] opacity-50']">НОВИНКИ</button>
          <button @click="popularKnives" :class="[num === false ? 'text-[17px] uppercase font-semibold text-[#FFFFFF]' : 'text-[17px] uppercase font-semibold text-[#FFFFFF] opacity-50']">ПОПУЛЯРНОЕ</button>
        </div>
        <div class="grid-cols-2 lg:grid grid-cols-4 pt-[30px]">
          <div v-for="popular in filKnives.slice(0, 4)">
            <SmallKnives :knife="popular"/>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full border opacity-10 border-[#FFFFFF] mt-[60px]"></div>
  </template>
  <script setup>
  import SmallKnives from "./smallKnives.vue";
  import {dataKnife} from "../../data/data.js"
  import Category from "./category.vue";
  import {ref} from "vue";
  let allKnives = dataKnife
  let filKnives = ref(allKnives)
  let filCategory = ref(allKnives)
  let num = ref()
  function newKnives() {
    filKnives.value = allKnives.filter(k => k.new === "Новинка")
    num.value = true
  }
  function popularKnives() {
    filKnives.value = [...allKnives].sort((a, b) => {
      const priceA = parseInt(a.cash.replace(/\D/g, ""))
      const priceB = parseInt(b.cash.replace(/\D/g, ""))
      return priceA - priceB
    })
    num.value = false
  }
  function categoryKnives(category){
filCategory.value = dataKnife.filter(item =>{
return item.category === category
})
  }
  </script>