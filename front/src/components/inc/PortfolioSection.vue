<template>
    <div class="px-8 lg:px-12">
        <h2 
            class="font-varela text-center font-light text-xl"
            :class="{
                'text-blue-400': checked,
                'text-blue-700/70': !checked
            }"
        >
            PORTFOLIOS
        </h2>
  
        <div class="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-stretch">
            <div 
                v-for="portfolio in portfolios"
                :key="portfolio.id"
                class="p-8 shadow rounded-lg group transition-all duration-300 ease-in-out cursor-pointer"
                :class="{
                    'bg-gray-600': checked,
                    'bg-white': !checked
                }"
                @click="handleShowDetail(portfolio)"
            >
                <div 
                    class="overflow-hidden p-6 flex justify-center"
                    :class="{
                        'bg-blue-400': checked,
                        'bg-blue-700/40': !checked
                    }"
                >
                    <img 
                    :src="portfolio.overview" 
                    class="transition-transform duration-300 ease-in-out group-hover:scale-105"
                    />
                </div>
    
                <div class="mt-5 flex flex-col space-y-3">
                    <h4 
                        class="font-varela text-md"
                        :class="{
                            'text-blue-400': checked,
                            'text-blue-700': !checked
                        }"
                    >
                    {{ portfolio.title }}
                    </h4>
    
                    <p 
                        class="text-xl font-semibold transition-all duration-300 ease-in-out flex items-center justify-between"
                        :class="{
                            'text-white group-hover:text-blue-400': checked,
                            'text-gray-800 group-hover:text-blue-700': !checked,
                        }"
                    >
                        {{ t(portfolio.briefing) }}
                        <i class="pi pi-arrow-up-right text-lg opacity-0 translate-x-2 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-x-0" />
                    </p>
                </div>
            </div>
        </div>
        
        <Dialog
            v-model:visible="detailPortfolioDialog"
            header="Détail"
            modal
            class="w-[60vw] !overflow-hidden !h-[28rem] py-2 px-8 pb-16"
            :class="{
                'bg-gray-700 text-white': checked,
            }"
            :pt="{
                content: '!overflow-hidden !h-96',
                footer: '!h-8',
                pcCloseButton: '!outline-none hover:!text-blue-700/70',
            }"
        >
            <div class="my-6 h-full grid grid-cols-2 gap-12">
                <div 
                    class="overflow-hidden p-6 flex justify-center"
                    :class="{
                        'bg-blue-400': checked,
                        'bg-blue-700/40': !checked,
                    }"
                >
                    <img 
                        :src="selectedPortfolio.overview" 
                        class="object-cover"
                    />
                </div>

                <div>
                    <h4 
                        class="font-varela text-md"
                        :class="{
                            'text-blue-400': checked,
                            'text-blue-700': !checked
                        }"
                    >
                        {{ selectedPortfolio.title }}
                    </h4>
                    <p class="font-semibold">
                        {{ selectedPortfolio.stack }} 
                    </p>

                    <p class="mt-6">
                        {{ t(selectedPortfolio.description) }} 
                    </p>

                    <div class="mt-12 flex flex-col space-y-4">
                        <Button
                            v-if="selectedPortfolio.github" 
                            as="a"
                            :href="selectedPortfolio.github"
                            target="_blank" 
                            rel="noopener"
                            icon="pi pi-github"
                            :label="t('visitGithub')"
                            class="text-white py-2 w-64"
                            :class="{
                                'bg-gray-600': checked,
                                'bg-gray-700': !checked,
                            }"  
                        />
                        <Button
                            v-if="selectedPortfolio.website" 
                            as="a"
                            :href="selectedPortfolio.website"
                            target="_blank" 
                            rel="noopener"
                            icon="pi pi-globe"
                            :label="t('visitWebsite')"
                            class=" text-white py-2 w-64"
                            :class="{
                                'bg-blue-400': checked,
                                'bg-blue-700/70': !checked,
                            }"
                        />
                    </div>
                </div>
            </div>
        </Dialog>
    </div>
</template>
  

<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';

import infiswap from "../../assets/images/portfolio/infiswap.png";
import mingle from "../../assets/images/portfolio/mingle.png";
import circus from "../../assets/images/portfolio/circus.png";
import omega from "../../assets/images/portfolio/omega.png";
import esprit from "../../assets/images/portfolio/esprit.png";
import pleyel from "../../assets/images/portfolio/pleyel.png";

const { t, locale } = useI18n();

const props = defineProps({
    checked: Boolean,
});

const detailPortfolioDialog = ref(false);
const selectedPortfolio = ref(null);

const handleShowDetail = (portfolio) => {
    selectedPortfolio.value = portfolio;
    detailPortfolioDialog.value = true;
};

const portfolios = [
    {
        id: 1,
        title: 'INFISWAP',
        overview: infiswap, 
        briefing: 'infiswapBrief', 
        stack: "Nuxt, Laravel, MySQL",
        description: "infiswapDesc",
        website: "http://infiswap.be/",
    },
    {
        id: 2,
        title: 'MINGLE',
        overview: mingle, 
        briefing: 'mingleBrief',
        stack: "React, Django, PostgreSQL",
        description: "mingleDesc",
        github: "https://github.com/NinoMichael/mingle.git",
    },
    {
        id: 3,
        title: 'CIRCUS',
        overview: circus, 
        briefing: 'circusBrief',
        stack: "React, Django, PostgreSQL",
        description: "circusDesc",
        github: "https://github.com/NinoMichael/circus.git",
    },
    {
        id: 4,
        title: 'OMEGA CONNECT',
        overview: omega, 
        briefing: 'omegaBrief',
        stack: "JavaScript, PHP",
        description: "omegaDesc",
        website: 'https://www.omega-connect.com/',
    },
    {
        id: 5,
        title: 'ESPRIT AUDIO',
        overview: esprit, 
        briefing: 'espritBrief',
        stack: "JavaScript, PHP",
        description: "espritDesc",
        website: 'https://www.esprit-audio.fr/',
    },
    {
        id: 6,
        title: 'PLEYEL GYM',
        overview: pleyel, 
        briefing: 'pleyelBrief',
        stack: "JavaScript, PHP",
        description: "pleyelDesc",
        website: 'https://www.pleyel-gym.com/',
    },
];
</script>