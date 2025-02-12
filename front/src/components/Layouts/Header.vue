<template>
    <div class = "px-12 py-3 h-28 flex justify-between items-center">
        <div>
          <img 
              :src = "profile" 
              alt = "Profil" 
              class = "w-20 h-20 sm:w-24 sm:h-24 border border-gray-300 rounded-full p-1"
              loading = "lazy" 
          />
        </div>

        <div class = "flex flex-row-reverse lg:flex-row lg:space-x-12 items-center">
            <div>  
                <Menubar 
                    :model = "items" 
                    class = "text-sm bg-transparent"
                    :pt="{
                        rootList: 'gap-6 lg:w-auto w-36 lg:p-0 p-6 lg:left-0 -left-24',
                        itemLink: 'font-varela text-sm text-black hover:text-blue-700',
                    }"
                />
            </div>

            <div class="lg:mr-0 sm:mr-8 mr-4">
                <DropdownLang />
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import Menubar from 'primevue/menubar';

import DropdownLang from "../DropdownLang.vue";

import profile from "../../assets/images/jerry_profile.png";

const { t } = useI18n();

const items = computed(() => [
    { label: t('home') },
    { label: t('feature') },
    { label: t('resume') },
    { label: "PORTFOLIO" },
    { label: "CONTACT" },
]);
</script>
