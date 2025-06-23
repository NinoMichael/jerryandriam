<template>
    <div 
        :class="{'bg-gray-700 text-white': checked, 'bg-gray-200 text-black/80': !checked}" 
        class="relative transition-all duration-700 overflow-x-hidden pb-20"
    >
        <Header :checked="checked" />

        <div 
            id="welcome"
            class="lg:my-20 my-8"
        >
            <WelcomeSection v-model:checked="checked"/>
        </div>

        <div
            id="feature"  
            v-animateonscroll="{ 
                enterClass: 'translate-y-10 transform transition-all duration-500',
                leaveClass: 'translate-y-0' 
            }"
            class="my-24"
        >
            <FeatureSection v-model:checked="checked"/>
        </div>

        <div 
            id="skill"
            v-animateonscroll="{ 
                enterClass: 'translate-y-10 transform transition-all duration-500',
                leaveClass: 'translate-y-0' 
            }"
            class="my-24 lg:my-36"
        >
            <SkillSection v-model:checked="checked"/>
        </div>

        <div 
            id="portfolio"
            ref="el"
            :class="[
                'transition-all duration-500',
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            ]"
            class="my-24 lg:my-36"
        >
            <PortfolioSection v-model:checked="checked"/>
        </div>

        <div 
            id="resume"
            v-animateonscroll="{ 
                enterClass: 'translate-y-10 transform transition-all duration-500',
                leaveClass: 'translate-y-0' 
            }"
            class="my-24 lg:my-36"
        >
            <ResumeSection v-model:checked="checked"/>
        </div>

        <div
            id="contact"
            v-animateonscroll="{ 
                enterClass: 'translate-y-10 transform transition-all duration-500',
                leaveClass: 'translate-y-0' 
            }"
            class="mt-24 lg:mt-36 mb-28"
        >
            <ContactSection v-model:checked="checked"/>
        </div>

        <div>
            <Footer v-model:checked="checked"/>
        </div>

        <div class="fixed bottom-72 right-2">
            <SwitchTheme v-model:checked="checked"/>
        </div>

        <ScrollTop 
            :pt="{
                root: 'text-white bg-blue-700/70 rounded-full',
            }"
        />
    </div>

    <SpeedInsights />
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';
import { SpeedInsights } from '@vercel/speed-insights/vue';
import ScrollTop from 'primevue/scrolltop';

import Header from "./components/Layouts/Header.vue";
import WelcomeSection from "./components/inc/WelcomeSection.vue"
import FeatureSection from "./components/inc/FeatureSection.vue"
import SkillSection from "./components/inc/SkillSection.vue"
import SwitchTheme from "./components/SwitchTheme.vue";
import PortfolioSection from './components/inc/PortfolioSection.vue';
import ResumeSection from './components/inc/ResumeSection.vue';
import ContactSection from './components/inc/ContactSection.vue';
import Footer from './components/Layouts/Footer.vue';

const checked = ref(localStorage.getItem("theme") === "dark");

const el = ref(null);
const isVisible = ref(false);

onMounted(() => {
    if (checked.value) {
        document.body.classList.add("bg-gray-700", "text-white");
    } else {
        document.body.classList.add("bg-gray-100", "text-black/80");
    }
});

watch(checked, (newVal) => {
    localStorage.setItem("theme", newVal ? "dark" : "light");
});

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true;
        observer.disconnect();
      }
    },
    { threshold: 0.1 }
  )

  if (el.value) observer.observe(el.value);
})
</script>
