<template>
    <div class="px-8 lg:px-12">
        <h2 
            class="text-center font-varela font-light text-xl"
            :class="{
                'text-blue-400': checked,
                'text-blue-700/70': !checked
            }"
        > 
            {{ t('mySkills') }}
        </h2>

        <div class="mt-10 lg:mx-32 grid grid-cols-2 lg:grid-cols-5 justify-center gap-16 items-stretch">
            <div 
                v-for="stack in stacks"
                :key="stack.id"
                class="p-6 shadow text-center rounded-lg cursor-pointer hover:scale-105 ease-in-out transition-all duration-300 h-full min-h-[200px] flex flex-col justify-center"
                :class="{
                    'bg-gray-600': checked,
                    'bg-white': !checked
                }"
            >
                <img 
                    :src="stack.logo"
                    class="w-20 mx-auto"
                >
                <p class="mt-4">
                    {{ stack.techno }}
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

import figma from "../../assets/images/stack/figma.png";
import react from "../../assets/images/stack/react.png";
import vue from "../../assets/images/stack/vue.png";
import nuxt from "../../assets/images/stack/nuxt.png";
import laravel from "../../assets/images/stack/laravel.png";
import django from "../../assets/images/stack/django.png";
import mysql from "../../assets/images/stack/mysql.png";
import postgresql from "../../assets/images/stack/postgresql.png";
import docker from "../../assets/images/stack/docker.png";
import git from "../../assets/images/stack/git.png";

const { t, locale } = useI18n();

const props = defineProps({
    checked: Boolean,
});

const stacks = [
    {
        id: 1,
        techno: "Figma",
        logo: figma,
    },
    {
        id: 2,
        techno: "React",
        logo: react,
    },
    {
        id: 3,
        techno: "Vue",
        logo: vue,
    },
    {
        id: 4,
        techno: "Nuxt",
        logo: nuxt,
    },
    {
        id: 5,
        techno: "Laravel",
        logo: laravel,
    },
    {
        id: 6,
        techno: "Django",
        logo: django,
    },
    {
        id: 7,
        techno: "MySQL",
        logo: mysql,
    },
    {
        id: 8,
        techno: "PostgreSQL",
        logo: postgresql,
    },
    {
        id: 9,
        techno: "Git",
        logo: git,
    },
    {
        id: 10,
        techno: "Docker",
        logo: docker,
    },
]
</script>