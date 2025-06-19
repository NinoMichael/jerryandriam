<template>
    <div class="px-16">
        <h2 class="font-varela text-center text-blue-700/70 font-light text-xl">
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
                        activeBar: 'bg-blue-700/70'
                    }"
                >
                    <Tab 
                        value="0" 
                        class="w-full text-lg rounded-lg py-3 font-semibold"
                    >
                        Éducation
                    </Tab>
                    <Tab 
                        value="1" 
                        class="w-full text-lg rounded-lg py-3 font-semibold"
                    >
                        Stage
                    </Tab>
                    <Tab 
                        value="2" 
                        class="w-full text-lg rounded-lg py-3 font-semibold"
                    >
                        Expérience
                    </Tab>
                </TabList>

                <TabPanels class="bg-transparent">
                    <TabPanel 
                        value="0"
                        class="mt-8 grid grid-cols-2 gap-12 bg-transparent"
                    >
                        <div 
                            v-for="education in educations"
                            :key="education.id"
                            class="p-8 rounded-lg bg-white shadow"
                        >
                            <i class="pi pi-graduation-cap text-4xl text-blue-700/70"/>
                            <div class="mt-4 flex justify-between items-center">
                                <div class="flex flex-col space-y-1">
                                    <h4 class="font-semibold text-xl">
                                        {{ education.fact }}
                                    </h4>
                                    <p>
                                        {{ education.school }}
                                    </p>
                                </div>
                                <Chip 
                                    :label="education.year"
                                    class="text-xs bg-blue-700/70 text-white p-2" 
                                />
                            </div>

                            <p class="mt-8 w-80">
                                {{ education.description }}
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

const educations = [
    {
        id: 1,
        school: "Université ESMIA - Mahamasina",
        fact: "Licence en Informatique",
        year: "2022-2025",
        description: "Sortant en 3ème année au sein de l'Université ESMIA - Filière : Informatique",
    },
    {
        id: 2,
        school: "Lycée Privé Saint Joseph Ivato",
        fact: "Baccalauréat",
        year: "2020",
        description: "Sortant en 3ème année au sein de l'Université ESMIA - Filière : Informatique",
    },
]
</script>