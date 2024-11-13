<script setup lang="ts"> 
definePageMeta({ 
  layout: 'auth',
});
import { useLayout } from '@/composables/layout';
import { ref, reactive } from 'vue';
import { useAuthStore } from '~/store/auth/useAuthStore';

const { isDarkTheme } = useLayout();
const Auth = useAuthStore();
const router = useRouter()

const checked = ref(false)
const denied = ref(false)

const UserCredentials= reactive({
    email: '',
    password: '',
})

const UserLogin = async()=>{
    await Auth.Login(UserCredentials)
    console.log('USUARIO: ', Auth.user?.name, 'TOKEN: ', Auth.token)
    
      if (!Auth.user?.name || !Auth.token) {
          denied.value = true
        return
      }
    console.log('loginMessage:', Auth.loginMessage) // Debug del mensaje
    router.push('/dashboard')
}
</script>

<template>
    <div class="flex flex-col items-center justify-center">
      <div class="rounded-[56px] p-[0.3rem] bg-gradient-to-b from-primary from-10% to-transparent to-30% ">
        <div class="w-full bg-surface-0 dark:bg-surface-900 py-20 px-8 sm:px-20" style="border-radius: 53px">

          <!-- Logo de Tepuy -->
          <div class="text-center mb-8">
            <div class="flex justify-center text-surface-900 dark:text-surface-0 text-3xl font-medium mb-4 ">
                <Image v-show="isDarkTheme" src="/assets/Tepuy-logo-dark.svg" alt="logo" class="" width="240" />
                <Image v-show="!isDarkTheme" src="/assets/Tepuy-logo.svg" alt="logo" class="" width="240" />
            </div>
            <span class="text-primary font-medium mt-10">Inicia Sesión</span>
          </div>

          <form @submit.prevent="UserLogin">

            <!-- Input email -->
            <label for="email1"
              class="block text-surface-900 dark:text-surface-0 text-xl font-medium mb-2">Email</label>
            <InputText id="email1" type="text" placeholder="Email address" class="w-full md:w-[30rem] mb-8"
              v-model="UserCredentials.email" />

            <!-- Input password -->
            <label for="password1"
              class="block text-surface-900 dark:text-surface-0 font-medium text-xl mb-2">Password</label>
            <Password id="password1" v-model="UserCredentials.password" placeholder="Password" :toggleMask="true" class="mb-4" fluid
              :feedback="false"></Password>

            <!-- Boton de recuerdarme, contraseña olvidada y submit-->
            <div class="flex items-center justify-between mt-2 mb-8 gap-8">
              <div class="flex items-center">
                <Checkbox v-model="checked" id="rememberme1" binary class="mr-2"></Checkbox>
                <label for="rememberme1">Remember me</label>
              </div>

              <NuxtLink class="font-medium no-underline ml-2 text-right cursor-pointer text-primary" to="/auth/register">Crear cuenta</NuxtLink>
              <NuxtLink class="font-medium no-underline ml-2 text-right cursor-pointer text-primary" to="/auth/forgot">Olvidé mi contraseña</NuxtLink>

            </div>
            <Button class="w-full md:w-[30rem] mb-8" label="Login" type="submit"/>

            <!-- Mensaje al fallar el login -->
            <div class="flex items-center justify-center mt-2">
              <Message severity="error" v-show="denied">{{ Auth.loginMessage }}</Message>
            </div>

          </form>
        </div>
      </div>
    </div>
</template>

<style scoped>
</style>
