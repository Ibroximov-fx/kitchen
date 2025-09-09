<template>
  <div class="w-200px]">
    <select
        v-model="selectedLocale"
        @change="changeLocale"
    >
      <option
          v-for="locale in locales"
          :key="locale.value"
          :value="locale.value"
      >
        {{ locale.label }}
      </option>
    </select>
  </div>
</template>

<script setup>
import {ref} from 'vue'
import {useI18n} from "vue-i18n";

let {locale} = useI18n();
let locales = [
  {value: "uz", label: "Uzbek"},
  {value: "ru", label: "Ruski"},
  {value: "eng", label: "English"},
];
let savedLocale = localStorage.getItem("selectedLocale") || "uz";
let selectedLocale = ref(savedLocale);
locale.value = savedLocale;
let changeLocale = () => {
  locale.value = selectedLocale.value;
  localStorage.setItem("selectedLocale", selectedLocale.value);
};
</script>