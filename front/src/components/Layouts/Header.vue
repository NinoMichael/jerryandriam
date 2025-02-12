<template>
    <div class = "px-12 py-3 h-28 flex justify-between items-center">
        <div>
          <img 
              :src = "profile" 
              alt = "Profil" 
              class = "w-24 h-24 border border-gray-300 rounded-full p-1"
              loading = "lazy" 
          />
        </div>

        <div class = "flex space-x-6 items-center">
            <nav>
                <ul class = "flex space-x-8 text-sm">
                    <li>{{ t('home')}}</li>
                    <li>{{ t('feature')}}</li>
                    <li>{{ t('resume')}}</li>
                    <li>PORTFOLIO</li>
                    <li>CONTACT</li>
                </ul>
            </nav>

            <div>
                <DropdownLang />
            </div>
        </div>
    </div>
</template>

<script setup>
import profile from "../../assets/images/jerry_profile.png";
import DropdownLang from "../DropdownLang.vue";
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>
