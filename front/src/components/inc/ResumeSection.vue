<template>
    <div class="px-8 lg:px-12">
        <h2 
            class="font-varela text-center font-light text-xl"
            :class="{
                'text-blue-400': checked,
                'text-blue-700/70': !checked
            }"
        >
            {{ t('resume') }}
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
                        content: 'grid grid-cols-3 bg-transparent',
                        activeBar: checked ? 'bg-blue-400' : 'bg-blue-700/70'
                    }"
                >
                    <Tab 
                        value="0" 
                        class="w-full text-lg rounded-lg py-3 font-semibold"
                    >
                        {{ t('experience') }}
                    </Tab>
                    <Tab 
                        value="1" 
                        class="w-full text-lg rounded-lg py-3 font-semibold"
                    >
                        {{ t('internship') }}
                    </Tab>
                    <Tab 
                        value="2" 
                        class="w-full text-lg rounded-lg py-3 font-semibold"
                    >
                        {{ t('education') }}
                    </Tab>
                </TabList>

                <TabPanels class="bg-transparent">
                    <TabPanel 
                        value="0"
                        class="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-12 bg-transparent"
                    >
                        <div 
                            v-for="experience in experiences"
                            :key="experience.id"
                            class="p-8 rounded-lg shadow"
                            :class="{
                                'bg-gray-600 text-white': checked,
                                'bg-white text-black/80': !checked
                            }"
                        >
                            <i 
                                class="pi pi-briefcase text-4xl"
                                :class="{
                                    'text-blue-400': checked,
                                    'text-blue-700/70': !checked
                                }"
                            />
                            <div class="mt-4 flex flex-col space-y-3 items-start md:space-y-0 md:flex-row justify-between md:items-center">
                                <div class="flex flex-col space-y-1">
                                    <h4 class="font-semibold text-xl">
                                        {{ t(experience.position) }}
                                    </h4>
                                    <p>
                                        {{ t(experience.company) }}
                                    </p>
                                </div>
                                <Chip 
                                    :label="t(experience.period)"
                                    class="text-xs text-white p-2" 
                                    :class="{
                                        'bg-blue-400': checked,
                                        'bg-blue-700/70': !checked
                                    }"
                                />
                            </div>

                            <p class="mt-8 lg:w-80">
                                {{ t(experience.mission) }}
                            </p>
                        </div>
                    </TabPanel>

                    <TabPanel 
                        value="1"
                        class="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-12 bg-transparent"
                    >
                        <div 
                            v-for="internship in internships"
                            :key="internship.id"
                            class="p-8 rounded-lg shadow"
                            :class="{
                                'bg-gray-600 text-white': checked,
                                'bg-white text-black/80': !checked
                            }"
                        >
                            <i 
                                class="pi pi-briefcase text-4xl"
                                :class="{
                                    'text-blue-400': checked,
                                    'text-blue-700/70': !checked
                                }"
                            />
                            <div class="mt-4 flex flex-col space-y-3 items-start md:space-y-0 md:flex-row justify-between md:items-center">
                                <div class="flex flex-col space-y-1">
                                    <h4 class="font-semibold text-xl">
                                        {{ t(internship.position) }}
                                    </h4>
                                    <p>
                                        {{ t(internship.company) }}
                                    </p>
                                </div>
                                <Chip 
                                    :label="t(internship.period)"
                                    class="text-xs text-white p-2" 
                                    :class="{
                                        'bg-blue-400': checked,
                                        'bg-blue-700/70': !checked
                                    }"
                                />
                            </div>

                            <p class="mt-8 lg:w-80">
                                {{ t(internship.mission) }}
                            </p>
                        </div>
                    </TabPanel>

                    <TabPanel 
                        value="2"
                        class="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-12 bg-transparent"
                    >
                        <div 
                            v-for="education in educations"
                            :key="education.id"
                            class="p-8 rounded-lg shadow"
                            :class="{
                                'bg-gray-600 text-white': checked,
                                'bg-white text-black/80': !checked
                            }"
                        >
                            <i 
                                class="pi pi-graduation-cap text-4xl"
                                :class="{
                                    'text-blue-400': checked,
                                    'text-blue-700/70': !checked
                                }"
                            />
                            <div class="mt-4 flex flex-col space-y-3 items-start md:space-y-0 md:flex-row justify-between md:items-center">
                                <div class="flex flex-col space-y-1">
                                    <h4 class="font-semibold text-xl">
                                        {{ t(education.fact) }}
                                    </h4>
                                    <p>
                                        {{ t(education.school) }}
                                    </p>
                                </div>
                                <Chip 
                                    :label="education.year"
                                    class="text-xs text-white p-2"
                                    :class="{
                                        'bg-blue-400': checked,
                                        'bg-blue-700/70': !checked
                                    }" 
                                />
                            </div>

                            <p class="mt-8 lg:w-80">
                                {{ t(education.description) }}
                            </p>
                        </div>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </div>
    </div>
</template>

<script setup>
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';
import Chip from 'primevue/chip'
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n();

const props = defineProps({
    checked: Boolean,
});

const educations = [
    {
        id: 1,
        school: "esmia",
        fact: "bachelorDegree",
        year: "2022-2025",
        description: "esmiaDesc",
    },
    {
        id: 2,
        school: "Lycée Privé Saint Joseph Ivato",
        fact: "bacc",
        year: "2020",
        description: "baccDesc",
    },
]

const internships = [
    {
        id: 1,
        company: "MG-CONSULTING IT & ACT",
        position: "frontDeveloper",
        period: "periodFrontDeveloper1",
        mission: "missionFrontDeveloper1",
    },
    {
        id: 2,
        company: "R@ndevTeam",
        position: "Webmaster",
        period: "periodWebmaster",
        mission: "missionWebmaster",
    },
    {
        id: 3,
        company: "OFM Madagascar",
        position: "projectOfficer",
        period: "periodProjectOfficer",
        mission: "missionProjectOfficer",
    },     
]

const experiences = [
    {
        id: 1,
        company: "MG-CONSULTING IT & ACT",
        position: "webFullstack",
        period: "periodWebFullstack",
        mission: "missionWebFullstack",
    },
    {
        id: 2,
        company: "freelanceAgency",
        position: "frontDeveloper",
        period: "periodFrontDeveloper2",
        mission: "missionFrontDeveloper2",
    },
]
</script>