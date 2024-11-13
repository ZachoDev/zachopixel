<script setup lang="ts">
definePageMeta({ 
  layout: 'auth' 
});

import { useLayout } from '@/composables/layout';
import { ref, reactive } from 'vue';
import { useAuthStore } from '~/store/auth/useAuthStore';

const { isDarkTheme } = useLayout();
const Auth = useAuthStore();
const router = useRouter()

const denied = ref(false)

const UserCredentials = reactive({
    email: '',
})

const UserLogin = async () => {
    await Auth.Forgot(UserCredentials)
    if (!Auth.user || !Auth.token) {
        denied.value = true
        return
    }
    console.log('loginMessage:', Auth.loginMessage) // Debug del mensaje
    router.push('/')
}
</script>

<template>
    <div class="flex flex-col items-center justify-center">
        <div class="rounded-[56px] p-[0.3rem] bg-gradient-to-b from-primary from-10% to-transparent to-30% ">
            <div class="w-full bg-surface-0 dark:bg-surface-900 py-20 px-8 sm:px-20" style="border-radius: 53px">
                <div class="text-center mb-8">
                    <div class="flex justify-center text-surface-900 dark:text-surface-0 text-3xl font-medium mb-4 ">
                        <Image v-show="isDarkTheme" src="/assets/Tepuy-logo-dark.svg" alt="logo" class="" width="240" />
                        <Image v-show="!isDarkTheme" src="/assets/Tepuy-logo.svg" alt="logo" class="" width="240" />
                    </div>
                    <span class="text-primary font-medium mt-10">Recuperar contraseña</span>
                </div>

                <form @submit.prevent="UserLogin" class="w-full md:w-[30rem] mb-8">
                    <div class="flex flex-col items-center justify-center">
                        <label for="email1"
                            class="block text-surface-900 dark:text-surface-0 text-xl font-medium mb-2">Email</label>
                        <InputText id="email1" type="text" placeholder="Email address" class="w-full md:w-[30rem] mb-4"
                            v-model="UserCredentials.email" />

                        <div class="flex w-full items-center justify-between mb-4 gap-8">

                            <NuxtLink class="font-medium no-underline text-right cursor-pointer text-primary"
                                to="/auth/register">Crear cuenta</NuxtLink>
                            <NuxtLink class="font-medium no-underline text-right cursor-pointer text-primary"
                                to="/auth/login">Iniciar Sesión</NuxtLink>
                        </div>
                        <Button class="block w-full md:w-[30rem] mb-8" label="Enviar" type="submit" />
                        <div class="flex items-center justify-center mt-2">
                            <Message severity="error" v-show="denied"> {{ Auth.ForgotMessage }} </Message>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<style scoped></style>