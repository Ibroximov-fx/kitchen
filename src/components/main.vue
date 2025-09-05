<template>
  <main class="hidden lg:block">
    <section>
      <Home/>
    </section>
    <section class="bg-[#373737]">
      <Knives/>
    </section>
    <section class="bg-[#373737]">
      <AboutCough/>
    </section>
    <section class="bg-[#373737]">
      <AboutKnives/>
    </section>
  </main>
</template>
<script setup>
import Home from "./sections/home.vue";
import Category from "./sections/category.vue";
import Knives from "./sections/knives.vue"
import AboutCough from "./sections/aboutCough.vue";
import AboutKnives from "./sections/aboutKnives.vue";
</script>