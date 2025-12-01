<template>
    <div class=" w-full px-8 lg:px-12 2xl:px-0 flex md:flex-row flex-col-reverse md:space-x-8 lg:space-x-28 justify-center items-center lg:mx-0 mx-auto">
        <div class = "mt-8 md:w-1/2 lg:mt-0">
            <h1 class="text-center text-[2rem] md:text-start lg:text-[2.5rem] font-varela">
                {{ t('hello') }} <br>
                <strong :class = "{'text-blue-400': checked, 'text-blue-700/70': !checked}">ANDRIAMIHAJA Henintsoa Jerry</strong> <br>    
                <span class="2xl:w-[80%]">&lt;&gt;{{ text }}<span class="animate-blink">|</span>&lt;/&gt;</span>
            </h1>
            <p class="mt-8 md:text-start text-center 2xl:w-[80%]">
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
            class="z-0 mt-20 md:mt-8 lg:mt-24 w-full md:w-96 lg:w-[28rem] h-64 lg:h-96 shadow-2xl rounded-2xl overflow-visible"
            :class = "{
                'bg-gray-700/50 shadow-gray-500/60 inset-shadow-lg' : checked, 
                'bg-gray-200/40 inset-shadow-lg border border-gray-300/40': !checked}"
        >
            <img 
                :src = "jerry" 
                alt = "Jerry"
                class = "absolute z-0 top-28 left-1/4 min-[480px]:left-1/3 w-52 md:w-64 md:top-28 md:left-[60%] lg:top-24 lg:left-2/3 lg:w-80 2xl:top-32 2xl:left-[68%]"    
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

let lastTime = 0;
const speed = 80;

const typeEffect = (time = 0) => {
  if (time - lastTime > speed) {
    if (!isDeleting && index < fullText.value.length) {
      text.value += fullText.value[index];
      index++;
    } else if (isDeleting && index > 0) {
      text.value = text.value.slice(0, -1);
      index--;
    } else {
      isDeleting = !isDeleting;
      lastTime = time;
      return requestAnimationFrame((t) =>
        setTimeout(() => typeEffect(t), 900)
      );
    }
    lastTime = time;
  }
  requestAnimationFrame(typeEffect);
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
  0% { opacity: 1; }
  50% { opacity: 0.3; }
  100% { opacity: 1; }
}

.animate-blink {
  display: inline-block;
  animation: blink 0.8s ease-in-out infinite;
}

</style>