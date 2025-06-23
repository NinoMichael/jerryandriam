<template>
    <div class=" w-full px-8 lg:px-12 flex md:flex-row flex-col-reverse md:space-x-8 lg:space-x-28 justify-center lg:items-start items-center lg:mx-0 mx-auto">
        <div class = "mt-8 md:w-1/2 lg:mt-0">
            <h1 class="text-center text-[2rem] md:text-start lg:text-[2.5rem] font-varela">
                {{ t('hello') }} <br>
                <strong :class = "{'text-blue-400': checked, 'text-blue-700/70': !checked}">ANDRIAMIHAJA Henintsoa Jerry</strong> <br>    
                <span>&lt;&gt;{{ text }}<span class="animate-blink">|</span>&lt;/&gt;</span>
            </h1>
            <p class="mt-8 md:text-start text-center">
                {{ t('intro') }}
            </p>
            <a
                :href="cv"
                download="CV_ANDRIAMIHAJA_Henintsoa_Jerry.pdf"
                class="cursor-pointer text-white w-64 shadow rounded p-3 mt-10 flex justify-center items-center md:mx-0 mx-auto transition duration-300"
                :class="{
                    'bg-blue-400': checked,
                    'bg-blue-700/70 hover:bg-blue-700': !checked
                }"
            >
                {{ t('downloadCv') }}
                <i class="pi pi-download ml-2"></i>
            </a>

        </div>

        <div 
            class="z-0 mt-32 lg:mt-16 w-full md:w-96 lg:w-[28rem] h-44 lg:h-96 shadow-2xl rounded-2xl overflow-visible"
            :class = "{
                'bg-gray-700/50 shadow-gray-500/60 inset-shadow-lg' : checked, 
                'bg-gray-200/40 inset-shadow-lg border border-gray-300/40': !checked}"
        >
            <img 
                :src = "jerry" 
                alt = "Jerry"
                class = "absolute z-0 -top-4 lg:-top-28 left-16 w-80 md:w-96 md:left-auto lg:w-[33rem]"
                loading = "lazy"    
            >
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { useI18n } from 'vue-i18n';

import jerry from "../../assets/images/main_picture.png";
import cv from "../../assets/document/CV_ANDRIAMIHAJA_Henintsoa_Jerry.pdf";

const props = defineProps({
    checked: Boolean,
});

const { t, locale } = useI18n();

const text = ref(""); 
const fullText = ref(t("frontend"));
let index = 0;
let isDeleting = false;
let timeoutId = null;

const typeEffect = () => {
  if (!isDeleting && index < fullText.value.length) {
    text.value += fullText.value[index];
    index++;
    timeoutId = setTimeout(typeEffect, 150);
  } else if (isDeleting && index > 0) {
    text.value = text.value.slice(0, -1);
    index--;
    timeoutId = setTimeout(typeEffect, 100);
  } else {
    isDeleting = !isDeleting;
    timeoutId = setTimeout(typeEffect, 1500);
  }
};

const restartAnimation = () => {
  clearTimeout(timeoutId);
  fullText.value = t("frontend");
  text.value = "";
  index = 0;
  isDeleting = false;
  typeEffect();
};

onMounted(() => {
  typeEffect();
});

watch(locale, restartAnimation);
</script>

<style>
@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

.animate-blink {
  display: inline-block;
  animation: blink 1s step-end infinite;
}

</style>