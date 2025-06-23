<template>
    <div class="z-50 relative px-8 lg:px-12 py-3 h-28 flex justify-between items-center">
        <div>
          <img 
              :src = "profile" 
              alt = "Profil" 
              class = "w-16 h-16 sm:w-24 sm:h-24 border border-gray-300 rounded-full p-1"
              loading = "lazy" 
          />
        </div>

        <div class = "flex flex-row-reverse lg:flex-row lg:space-x-12 items-center">
            <div>  
                <Menubar 
                    :model = "items"    
                    class = "text-sm bg-transparent right-0"
                    :pt="{
                        rootList: checked ? 
                                    'bg-gray-500 sm:bg-transparent gap-6 lg:w-auto w-40 lg:p-0 p-6 lg:left-0 -left-28':
                                    'gap-6 lg:w-auto w-40 bg-white lg:p-0 p-6 lg:left-0 -left-28',
                        itemLink: checked ?
                                    'font-varela text-sm text-white hover:text-blue-400':
                                    'font-varela text-sm text-black hover:text-blue-700', 
                        itemContent: 'bg-transparent',
                        button: checked ?
                                    'text-white':
                                    'text-black',
                    }"
                />
            </div>

            <div class="lg:mr-0 sm:mr-8 mr-4">
                <DropdownLang 
                    :checked="checked"
                />
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

const props = defineProps({
    checked: Boolean,
});

const emit = defineEmits(["update:checked"]);

const items = computed(() => [
    { label: t('home'), command: () => scrollToSection('welcome') },
    { label: t('feature'), command: () => scrollToSection('feature') },
    { label: t('skills'), command: () => scrollToSection('skill') },
    { label: "PORTFOLIO", command: () => scrollToSection('portfolio') },
    { label: t('resume'), command: () => scrollToSection('resume') },
    { label: "CONTACT", command: () => scrollToSection('contact') },
]);

const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};

</script>
