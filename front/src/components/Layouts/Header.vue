<template>
    <div class = "z-30 relative px-8 lg:px-12 py-3 h-28 flex justify-between items-center">
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
                        rootList: checked ? 
                                    'bg-gray-500 sm:bg-transparent gap-6 lg:w-auto w-40 lg:p-0 p-6 lg:left-0 -left-28':
                                    'gap-6 lg:w-auto w-40 lg:p-0 p-6 lg:left-0 -left-28',
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
    { label: t('home') },
    { label: t('feature') },
    { label: t('skills') },
    { label: "PORTFOLIO" },
    { label: t('resume') },
    { label: "CONTACT" },
]);
</script>
