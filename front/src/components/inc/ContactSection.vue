<template>
    <div class="px-16">
        <Toast 
            :pt="{
                message: 'p-2 bg-white',
                summary: '-mt-0.5',
                detail: '-mt-1'
            }"
        />
        <h2 class="font-varela text-center text-blue-700/70 font-light text-xl">
            CONTACT
        </h2>
        <p class="mt-4 w-[65%] text-2xl flex justify-center mx-auto text-center font-semibold">
            {{ t('happyToDiscuss') }}   
        </p>

        <form class="mt-6 grid grid-cols-2 gap-24 py-12 px-20 shadow-lg">
            <div class="flex flex-col justify-between">
                <div>
                    <img 
                        :src="handshake"
                        class="rounded-lg"
                    >
                    <div class="mt-8">
                        <p>
                            <i class="pi pi-phone mr-2"/>
                            +261 34 97 001 20
                        </p>
                        <p class="mt-3">
                            <i class="pi pi-envelope mr-2"/>
                            jerryandriam@gmail.com
                        </p>
                    </div>
                </div>

                <div>
                    <h5 class="font-varela text-lg">
                        {{ t('findMe') }}
                    </h5>
                    <div class="mt-3 flex gap-12 items-center">
                        <a
                            v-for="socialLink in socialLinks"
                            :key="socialLink.url"
                            :href="socialLink.url"
                            class="w-12 h-12 flex items-center justify-center rounded-tl-2xl rounded-br-2xl bg-gray-50 text-gray-700 group hover:bg-blue-700/70 hover:text-white transition-colors duration-500 active:scale-90 overflow-hidden"
                        >
                            <i
                                :class="socialLink.icon"
                                class="text-2xl slide-from-top"
                            />
                        </a>
                    </div>
                </div>
            </div>

            <div class="grid space-y-6">
                <div class="flex flex-col space-y-2">
                    <label class="text-blue-700/70 font-semibold">
                        {{ t('fullname') }}
                    </label>
                    <InputText 
                        v-model="formData.fullname"
                        type="text"
                        class="!text-sm !border !border-gray-300 !rounded !py-3 !px-4 focus-within:ring focus-within:ring-blue-700/70"
                    />
                </div>

                <div class="flex flex-col space-y-2">
                    <label class="text-blue-700/70 font-semibold">
                        Email
                    </label>
                    <InputText 
                        v-model="formData.email"
                        type="email"
                        class="!text-sm !border !border-gray-300 !rounded !py-3 !px-4 focus-within:ring focus-within:ring-blue-700/70"
                    />
                </div>

                <div class="flex flex-col space-y-2">
                    <label class="text-blue-700/70 font-semibold">
                        {{ t('subject') }}
                    </label>
                    <InputText 
                        v-model="formData.subject"
                        type="text"
                        class="!text-sm !border !border-gray-300 !rounded !py-3 !px-4 focus-within:ring focus-within:ring-blue-700/70"
                    />
                </div>

                <div class="flex flex-col space-y-2">
                    <label class="text-blue-700/70 font-semibold">
                        {{ t('yourMessage') }}
                    </label>
                    <Textarea 
                        v-model="formData.content"
                        rows="8"
                        class="!text-sm !border !border-gray-300 !rounded !py-3 !px-4 focus-within:ring focus-within:ring-blue-700/70"
                    />
                </div>

                <Button 
                    :label="t('send')"
                    :loading="loading"
                    class="mt-3 py-2 bg-blue-700/70 hover:bg-blue-700 rounded text-white"
                    @click="handleSendEmail"
                />
            </div>
        </form>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { useI18n } from 'vue-i18n';
import InputText from "primevue/inputtext";
import Textarea from "primevue/textarea";
import Button from "primevue/button";
import emailjs from 'emailjs-com';
import Toast from 'primevue/toast';
import { useToast } from 'primevue/usetoast';

const toast = useToast();

import handshake from "../../assets/images/handshake.jpg";

const { t, locale } = useI18n();

const formData = reactive({
    fullname: "",
    email: "",
    subject: "",
    content: "",
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

const SERVICE_ID = 'service_p8gyw8o';
const TEMPLATE_ID = 'template_qiahb8i';
const PUBLIC_KEY = 'nqYZFyXkg9bAhLB_v';

const loading = ref(false);

const handleSendEmail = () => {
    if (formData.fullname == '' || formData.email == '' || formData.subject == '' || formData.content == '' ) {
        toast.add(
                { 
                    severity: 'error',
                    summary: 'Erreur',
                    detail: 'Veuillez remplir tous les champs',
                    life: 3000 
                }
            );
    } else {
        loading.value = true;

        const templateParams = {
            from_name: formData.fullname,
            from_email: formData.email,
            subject: formData.subject,
            message: formData.content,
        };

        emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
            .then(() => {
                formData.fullname = "";
                formData.email = "";
                formData.subject = "";
                formData.content = "";
                loading.value = false;

                toast.add(
                    { 
                        severity: 'info',
                        summary: 'Succès',
                        detail: 'Message envoyé',
                        life: 3000 
                    }
                );
            }, (err) => {
                loading.value = false;
                console.error("FAILED...", err);
                toast.add(
                    { 
                        severity: 'error',
                        summary: 'Oups',
                        detail: 'Une erreur est survenue. Veuillez réessayer',
                        life: 3000 
                    }
                );
            });
    }
};
</script>

<style>
.slide-from-top {
    transition: transform 0.6s ease-in-out, opacity 1s ease-in-out;
    transform: translateY(0);
    opacity: 1;
}

.group:hover > .slide-from-top {
  animation: slide-in-from-top 1s forwards;
}

@keyframes slide-in-from-top {
    0% {
        transform: translateY(-100%);
        opacity: 0.5;
    }
    100% {
        transform: translateY(0);
        opacity: 1;
    }
}
</style>