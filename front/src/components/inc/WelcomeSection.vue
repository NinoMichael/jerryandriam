<template>
    <div class = "flex lg:flex-row flex-col-reverse lg:space-x-28 justify-center lg:items-start items-center lg:mx-0 mx-auto">
        <div class = "xl:w-[50%] lg:w-[45%] w-full lg:px-0 px-12 lg:pt-0 pt-20">
            <h1 class="xl:text-[2.6rem] lg:text-[2.3rem] sm:text-[2rem] text-[1.7rem] lg:text-start text-center font-varela">
                {{ t('hello') }} <br>
                <strong :class = "{'text-blue-400': checked, 'text-blue-700/70': !checked}">ANDRIAMIHAJA Henintsoa Jerry</strong> <br>    
                <span>&lt;&gt;{{ text }}<span class="animate-blink">|</span>&lt;/&gt;</span>
            </h1>
            <p class="mt-8 lg:text-start text-center">
                {{ t('intro') }}
            </p>
            <Button 
                class = "text-white shadow rounded p-3 mt-10 flex justify-center lg:mx-0 mx-auto"
                :class = "{
                    'bg-blue-400' : checked,
                    'bg-blue-700/70' : !checked }"  
                :label = "t('downloadCv')"
                icon = "pi pi-download"
                iconPos = "right"
            />
        </div>

        <div 
            class = "z-0 mt-16 lg:w-[32%] sm:w-96 w-80 sm:h-96 h-[22rem] shadow-2xl rounded-2xl overflow-visible"
            :class = "{
                'bg-gray-700/50 shadow-gray-500/60 inset-shadow-lg' : checked, 
                'bg-gray-200/40 inset-shadow-lg border border-gray-300/40': !checked}"
        >
            <img 
                :src = "jerry" 
                alt = "Jerry"
                class = "absolute z-0 xl:-top-[4%] lg:top-1 sm:-top-6 -top-2 min-[560px]:-top-16 max-[400px]:top-12 right-auto left-auto xl:w-[33rem] lg:w-[30rem] w-[29rem]"
                loading = "lazy"    
            >
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { useI18n } from 'vue-i18n';

import Button from 'primevue/button';

import jerry from "../../assets/images/main_picture.png";

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