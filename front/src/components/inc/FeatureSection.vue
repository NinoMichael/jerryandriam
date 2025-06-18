<template>
    <div class="px-16">
        <h2 class="font-varela text-center text-blue-700/70 font-light text-xl">
            {{ t('feature') }}
        </h2>
        <p class="mt-4 text-2xl text-center font-semibold">
            {{ t('tailorMade') }}   
        </p>

        <div class="mt-10 grid grid-cols-3 gap-8 items-stretch">
            <div class="bg-white flex flex-col space-y-4 shadow rounded-lg p-8 transform transition-all duration-300 ease-in-out hover:scale-105 hover:bg-blue-700 hover:text-white hover:shadow-xl group cursor-pointer h-full">
                <i class="pi pi-database text-3xl text-blue-700/70 group-hover:text-white"/>
                <h4 class="font-semibold text-xl">
                    {{ t('mockupDesign') }}
                </h4>
                <p>
                    {{ t('creationOfMockup') }}
                </p>
            </div>

            <div class="bg-white flex flex-col space-y-4 shadow rounded-lg p-8 transform transition-all duration-300 ease-in-out hover:scale-105 hover:bg-blue-700 hover:text-white hover:shadow-xl group cursor-pointer h-full">
                <i class="pi pi-desktop text-3xl text-blue-700/70 group-hover:text-white"/>
                <h4 class="font-semibold text-xl">
                    {{ t('appDevelopment') }}
                </h4>
                <p>
                    {{ t('creationOfApp') }}
                </p>
            </div>

            <div class="bg-white flex flex-col space-y-4 shadow rounded-lg p-8 transform transition-all duration-300 ease-in-out hover:scale-105 hover:bg-blue-700 hover:text-white hover:shadow-xl group cursor-pointer h-full">
                <i class="pi pi-wrench text-3xl text-blue-700/70 group-hover:text-white"/>
                <h4 class="font-semibold text-xl">
                    Maintenance & support
                </h4>
                <p>
                    {{ t('maintenanceTxt') }}
                </p>
            </div>
        </div>

    </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n();
</script>