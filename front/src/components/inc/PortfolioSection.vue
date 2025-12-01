<template>
    <div class="px-8 lg:px-12 2xl:px-52">
        <h2 
            class="font-varela text-center font-light text-xl"
            :class="{
                'text-blue-400': checked,
                'text-blue-700/70': !checked
            }"
        >
            PORTFOLIOS
        </h2>
  
        <div class="mt-10">
            <Tabs 
                value="0"
                class="rounded-lg bg-transparent"
                style="--p-tabs-tablist-background: transparent"
            >
                <TabList
                    class="bg-transparent"
                    :pt="{
                        content: 'grid grid-cols-2 bg-transparent mb-8',
                        activeBar: checked ? 'bg-blue-400' : 'bg-blue-700/70'
                    }"
                >
                    <Tab 
                        value="0" 
                        class="w-full text-lg rounded-lg py-3 font-semibold"
                    >
                        {{ t('uiuxdesign') }}
                    </Tab>
                    <Tab 
                        value="1" 
                        class="w-full text-lg rounded-lg py-3 font-semibold"
                    >
                        {{ t('webapp') }}
                    </Tab>
                </TabList>

                <TabPanels class="bg-transparent">
                    <TabPanel value="0">
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-stretch">
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
                    </TabPanel>

                    <TabPanel value="1">
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-stretch">
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
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </div>
        
        <Dialog
            v-model:visible="detailPortfolioDialog"
            header="Détail"
            modal
            class="w-[85vw] lg:w-[60vw] overflow-scroll lg:!overflow-hidden !lg:h-[28rem] py-2 px-8 pb-16"
            :class="{
                '!bg-gray-700 !text-white': checked,
                '!bg-white !text-black': !checked,
            }"
            :pt="{
                content: 'overflow-scroll lg:!overflow-hidden !h-96',
                footer: '!h-8',
                pcCloseButton: '!outline-none hover:!text-blue-700/70',
            }"
        >
            <div class="my-6 h-full grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                    <div 
                        class="overflow-hidden h-40 lg:h-auto p-6 flex justify-center"
                        :class="{
                            '!bg-blue-400': checked,
                            '!bg-blue-700/40': !checked,
                        }"
                    >
                        <img 
                            :src="selectedPortfolio.overview" 
                            class="h-24 object-cover"
                        />
                    </div>

                    <div class="mt-6 grid grid-cols-3 sm:grid-cols-4 gap-4">
                        <div 
                            v-for="(image, idx) in selectedPortfolio.galleries" 
                            :key="idx"
                            class="relative cursor-pointer"
                            @click="openGallery(idx)"
                        >
                            <img 
                                :src="image" 
                                class="w-full h-20 sm:h-24 object-cover rounded shadow"
                            />
                        </div>
                    </div>
                </div>

                <div>
                    <h4 
                        class="font-varela text-md"
                        :class="{
                            '!text-blue-400': checked,
                            '!text-blue-700': !checked
                        }"
                    >
                        {{ selectedPortfolio.title }}
                    </h4>
                    <p class="font-semibold">
                        {{ selectedPortfolio.stack }} 
                    </p>

                    <p class="mt-6">
                        {{ t(selectedPortfolio.description) }} :
                    </p>

                    <p class="mt-4 ml-4">
                        <ul>
                            <li
                                v-for="feature in selectedPortfolio.features"
                                :key="feature"
                                class="list-disc"
                            >
                                {{ t(feature) }}
                            </li>
                        </ul>
                    </p>

                    <div class="mt-4 flex space-x-4">
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
                                '!bg-gray-600': checked,
                                '!bg-gray-700': !checked,
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
                                '!bg-blue-400': checked,
                                '!bg-blue-700/70': !checked,
                            }"
                        />
                    </div>
                </div>
            </div>
        </Dialog>

        <Dialog
            v-model:visible="galleryDialog"
            header="Galerie"
            modal
            v-on:hide="handleCloseGalleryDialog"
            class="w-[90vw] lg:w-[60vw]"
            :class="{
                '!bg-gray-700 !text-white': checked,
                '!bg-white !text-black': !checked,
            }"
            :pt="{
                content: 'overflow-hidden !h-96',
                header: 'py-4 px-8',
                footer: '!h-8',
                pcCloseButton: '!outline-none hover:!text-blue-700/70',
            }"
        >
            <div class="flex justify-center">
                <img 
                    :src="selectedPortfolio.galleries[currentImage]" 
                    class="max-h-[50vh] object-contain"
                />
            </div>

            <template #footer>
                <div class="flex justify-between w-full px-8 -mt-8">
                    <Button 
                        icon="pi pi-chevron-left"
                        class="h-8 rounded-full w-8"
                        :class="{
                            'bg-blue-400 disabled:bg-blue-400/20': checked,
                            'bg-blue-700/60 disabled:bg-blue-700/20 text-white': !checked
                        }"
                        @click="prevImage"
                        :disabled="currentImage === 0"
                    />
                    <Button 
                        icon="pi pi-chevron-right"
                        class="h-8 rounded-full w-8"
                        :class="{
                            'bg-blue-400 disabled:bg-blue-400/20': checked,
                            'bg-blue-700/60 disabled:bg-blue-700/20 text-white': !checked
                        }"
                        @click="nextImage"
                        :disabled="currentImage === selectedPortfolio.galleries.length - 1"
                    />
                </div>
            </template>
        </Dialog>

    </div>
</template>
  

<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';

import mptimeRegiser from "../../assets/images/portfolio/mp-time/register.png";

import infiswapHome from "../../assets/images/portfolio/infiswap/home.png";
import infiswapLogin from "../../assets/images/portfolio/infiswap/login.png";
import infiswapDashboardNurse from "../../assets/images/portfolio/infiswap/dashboard-nurse.png";
import infiswapCreateReplacement from "../../assets/images/portfolio/infiswap/create-replacement.png";
import infiswapBinomial from "../../assets/images/portfolio/infiswap/binomial.png";
import infiswapSetting from "../../assets/images/portfolio/infiswap/setting.png";
import infiswapDetailReplacement from "../../assets/images/portfolio/infiswap/detail-replacement.png";
import infiswapDashboardAdmin from "../../assets/images/portfolio/infiswap/dashboard-admin.png";
import infiswapCrm from "../../assets/images/portfolio/infiswap/crm.png";

import circus from "../../assets/images/portfolio/circus.png";
import omega from "../../assets/images/portfolio/omega.png";
import esprit from "../../assets/images/portfolio/esprit.png";
import pleyel from "../../assets/images/portfolio/pleyel.png";

const { t, locale } = useI18n();

const props = defineProps({
    checked: Boolean,
});

const detailPortfolioDialog = ref(false);
const selectedPortfolio = ref({});

const handleShowDetail = (portfolio) => {
    selectedPortfolio.value = portfolio;
    detailPortfolioDialog.value = true;
};

const galleryDialog = ref(false);
const currentImage = ref(0);

const openGallery = (index) => {
    currentImage.value = index;
    detailPortfolioDialog.value = false;
    galleryDialog.value = true;
};

const nextImage = () => {
    if (
        selectedPortfolio.value?.galleries &&
        currentImage.value < selectedPortfolio.value.galleries.length - 1
    ) {
        currentImage.value++;
    }
};

const prevImage = () => {
    if (currentImage.value > 0) {
        currentImage.value--;
    }
};

const handleCloseGalleryDialog = () => {
    galleryDialog.value = false;
    detailPortfolioDialog.value = true;
};

const portfolios = [
{
        id: 1,
        title: 'MP-TIME',
        overview: mptimeRegiser, 
        briefing: 'mptimeBrief', 
        stack: "Vue JS, Symfony, MySQL",
        description: "mptimeDesc",
        website: "http://infiswap.be/",
        galleries: [
            infiswapLogin,
            infiswapDashboardNurse,
            infiswapCreateReplacement,
            infiswapBinomial,
            infiswapSetting,
            infiswapDetailReplacement,
            infiswapDashboardAdmin,
            infiswapCrm,
        ],
        features: [
            "mptimeTimesheetFeature",
            "mptimeTimesheetFeature",
            "Gestion d'utilisateur infirmier",
            "Gestion de réponse liée à la demande de remplacement"
        ]
    },
    {
        id: 2,
        title: 'INFISWAP',
        overview: infiswapHome, 
        briefing: 'infiswapBrief', 
        stack: "Nuxt, Laravel, MySQL",
        description: "infiswapDesc",
        website: "http://infiswap.be/",
        galleries: [
            infiswapLogin,
            infiswapDashboardNurse,
            infiswapCreateReplacement,
            infiswapBinomial,
            infiswapSetting,
            infiswapDetailReplacement,
            infiswapDashboardAdmin,
            infiswapCrm,
        ],
        features: [
            'infiswapReplacementFeature',
            'infiswapPartnershipFeature',
            'infiswapNurseFeature',
            'infiswapResponseFeature'
        ]
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