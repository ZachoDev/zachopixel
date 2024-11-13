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
    ci: '',
    name: '',
    email: '',
    password: '',
})

const UserRegister = async () => {
    await Auth.Register(UserCredentials)
    if (!Auth.user?.name) {
            denied.value = true
        return 
    }
    alert(Auth.registerMessage)
    router.push('/auth/login')
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
                    <span class="text-primary font-medium mt-10 ">Regístrate</span>
                </div>

                <form @submit.prevent="UserRegister">
                    <label for="ci1"
                        class="block text-surface-900 dark:text-surface-0 text-xl font-medium mb-2">Cedula</label>
                    <InputText id="ci1 "type="text" maxlength="8" placeholder="12345678" class="w-full md:w-[30rem] mb-8" 
                        v-model="UserCredentials.ci" />

                    <label for="name1"
                        class="block text-surface-900 dark:text-surface-0 text-xl font-medium mb-2">Nombre</label>
                    <InputText id="name1" type="text" placeholder="Nombre" class="w-full md:w-[30rem] mb-8"
                        v-model="UserCredentials.name" />

                    <label for="email1"
                        class="block text-surface-900 dark:text-surface-0 text-xl font-medium mb-2">Correo electronico</label>
                    <InputText id="email1" type="text" placeholder="Correo electronico" class="w-full md:w-[30rem] mb-8"
                        v-model="UserCredentials.email" />

                    <label for="password1"
                        class="block text-surface-900 dark:text-surface-0 font-medium text-xl mb-2">Contraseña</label>
                    <Password id="password1" v-model="UserCredentials.password" placeholder="Contraseña"
                        :toggleMask="true" class="mb-4" fluid :feedback="false"></Password>

                    <div class="flex items-center justify-between mt-2 mb-8 gap-8">
                        <NuxtLink class="font-medium no-underline ml-2 text-right cursor-pointer text-primary" to="/auth/login">Iniciar Sesión</NuxtLink>
                    </div>
                    <Button class="w-full md:w-[30rem] mb-8" label="Registrar" type="submit" />
                    <div class="flex items-center justify-center mt-2">
                        <Message severity="error" v-show="denied">{{ Auth.registerMessage }}</Message>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<style scoped></style>