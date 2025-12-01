<template>
    <div 
        :class="{'bg-gray-700 text-white': checked, 'bg-gray-200 text-black/80': !checked}" 
        class="relative transition-all duration-700 overflow-x-hidden pb-20 2xl:pt-8"
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
            class="my-24"
        >
            <FeatureSection v-model:checked="checked"/>
        </div>

        <div 
            id="skill"
            class="my-24 lg:my-36"
        >
            <SkillSection v-model:checked="checked"/>
        </div>

        <div 
            id="portfolio"
            class="my-24 lg:my-36"
        >
            <PortfolioSection v-model:checked="checked"/>
        </div>

        <div 
            id="resume"
            class="my-24 lg:my-36"
        >
            <ResumeSection v-model:checked="checked"/>
        </div>

        <div
            id="contact"
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
                root: checked ? 'text-white bg-blue-400 rounded-full' : 'text-white bg-blue-700/70 rounded-full',
            }"
        />
    </div>

</template>

<script setup>
import { ref, watch, onMounted } from 'vue';
import { injectSpeedInsights } from '@vercel/speed-insights';

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

injectSpeedInsights();

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

</script>
