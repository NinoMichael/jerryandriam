<template>
    <div class="px-8 lg:px-72">
        <hr class="border-b border-gray-300 mb-8">

        <div class="lg:hidden">
            <h5 class="font-varela text-center text-lg">
                {{ t('findMe') }}
            </h5>
            <div class="mt-4 flex justify-center gap-12 items-center">
                <a
                    v-for="socialLink in socialLinks"
                    :key="socialLink.url"
                    :href="socialLink.url"
                    class="w-12 h-12 flex items-center justify-center rounded-tl-2xl rounded-br-2xl overflow-hidden"
                    :class="{
                        'bg-gray-600 text-white': checked,
                        'bg-gray-50 text-gray-700': !checked
                    }"
                >
                    <i
                        :class="socialLink.icon"
                        class="text-2xl"
                    />
                </a>
            </div>
        </div>

        <div class="lg:hidden mt-8 text-center">
            <p>
                <i class="pi pi-phone mr-2"/>
                +261 34 97 001 20
            </p>
            <p class="mt-3">
                <i class="pi pi-envelope mr-2"/>
                jerryandriam@gmail.com
            </p>
        </div>

        <p class="mt-16 text-center text-sm lg:text-base lg:mt-0">
            © {{ new Date().getFullYear() }} - {{ t('allRightsReserved') }}
        </p>
    </div>
</template>

<script setup>

import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n();

const props = defineProps({
    checked: Boolean,
});

const socialLinks = [
    {
        label: "Github",
        icon: "pi pi-github",
        url: "https://github.com/NinoMichael",
    },
    {
        label: "Linkedin",
        icon: "pi pi-linkedin",
        url: "https://www.linkedin.com/in/jerry-andriam-572b1b29a/",
    },
    {
        label: "Facebook",
        icon: "pi pi-facebook",
        url: "https://web.facebook.com/ninomichael.andriamihaja/",
    },
]
</script>