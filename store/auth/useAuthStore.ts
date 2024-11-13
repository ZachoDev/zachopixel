import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
    const token = ref('')
    const loginMessage = ref('')
    const logoutMessage = ref('')
    const registerMessage = ref('')
    const ForgotMessage = ref('')
    const user = ref<Data>({})

    const { ConsultaHTTP } = consultas()

    async function Register(data: Data) {
        const Register = await ConsultaHTTP<ResponseRegisterData>('POST','register', data)
        
        if (Register) {
            // Usa el operador ?? para asignar un mensaje predeterminado en caso de que alguno de los campos de Register sea undefined
            registerMessage.value = Register.message ?? "Ocurrio un error al intentar Registrarse"
            user.value = Register.user ?? {}
            token.value = ''
            logoutMessage.value = ''
            loginMessage.value = ''
        }
    }

    async function Login(data: Data) {
        const Login = await ConsultaHTTP<ResponseLoginData>('POST','login', data)
        console.log(Login?.user.name)
        const objeto = {
            ci:'12345678',
            name:'ricardo',
            email:'ricardo@gmail.com',
            password:'12345678',
        }
        for (let i in objeto) {
            console.log(i)
        }
        if (Login) {
            // Usa el operador ?? para asignar un mensaje predeterminado en caso de que Login.message sea undefined
            loginMessage.value = Login.message ?? 'Ocurrió un error al intentar iniciar sesión'
            token.value =  Login.token ?? ''
            user.value = Login.user ?? {}
            logoutMessage.value = ''
        }
    }
    
    async function Logout(data: Data) {
        const Logout = await ConsultaHTTP<ResponseLogoutData>('POST','logout', data, token.value)
        
        if (Logout) {
            // Usa el operador ?? para asignar un mensaje predeterminado en caso de que Logout.message sea undefined
            logoutMessage.value = Logout.message ?? "Ocurrio un error al intentar cerrar sesión"
            token.value = ''
            user.value = {}
            loginMessage.value = ''
        }
    }

    async function Forgot(data: Data) {
        const Forgot = await ConsultaHTTP<BaseResponse>('POST','forgot', data)
        
        if (Forgot) {
            // Usa el operador ?? para asignar un mensaje predeterminado en caso de que Forgot.message sea undefined
            ForgotMessage.value = Forgot.message ?? "Ocurrio un error al intentar restablecer la contraseña"
        }
    }


/* async function Register(Register: Register){
        const { ci, name, email, password } = Register
        try{
            const url = 'http://127.0.0.1:8000/api/register'
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({
                    ci: ci,
                    name: name,
                    email: email,
                    password: password,
                })
            })
            const Resjson = await response.json()
            registerMessage.value = Resjson.message
            
            if(Resjson){
                user.value = Resjson.user
            }
        }
        catch (err){
            console.log(err);
        }
    } */

/* async function Login(Login: Credentials){
        const { email, password } = Login
        try{
            const url = 'http://127.0.0.1:8000/api/login'
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                })
            })
            const Resjson = await response.json()
            loginMessage.value = Resjson.message
            
            if(Resjson){
                token.value = Resjson.token
                user.value = Resjson.user
            }
        }
        catch (err){
            console.log(err);
        }
    } */

/* async function Logout(data: string){
        try{
            const url = 'http://127.0.0.1:8000/api/logout'
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type':'application/json',
                    'Authorization': `Bearer ${token.value}`
                },
                body: JSON.stringify({
                    data: data,
                })
            })
            const Resjson = await response.json()

            // Reiniciamos los valores del store
            logoutMessage.value = Resjson.message
            token.value = ''
            user.value = ''
            loginMessage.value = ''
        }
        catch (err){
            console.log(err);
        }
    } */

    return {
        Register,
        Logout, 
        Login,
        Forgot,
        registerMessage,
        loginMessage,
        logoutMessage,
        ForgotMessage,
        token,
        user,
    }
},
    {
    persist: true,
})
