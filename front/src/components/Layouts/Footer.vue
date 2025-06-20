<template>
    <div class="px-72">
        <hr class="border-b border-gray-300 mb-8">
        <p class="text-center">
            © {{ new Date().getFullYear() }} - {{ t('allRightsReserved') }}
        </p>
    </div>
</template>

<script setup>

import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n();
</script>