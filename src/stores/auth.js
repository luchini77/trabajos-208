import { ref } from 'vue'
import { defineStore } from 'pinia'
import { auth } from '../firebaseConfig'
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import router from '../router'

export const useUserStore = defineStore('user', () => {

    const users = ref([])
    const loadingSession = ref(false)


    const login = async(email, password) => {

        await signInWithEmailAndPassword(auth, email, password)
        router.push('/home')
    }

    const logout = async() => {

        try {
            await signOut(auth)
            router.push('/')
        } catch (error) {
            console.log(error)
        }
    }

    const currentUser = () => {
        return new Promise((resolve, reject) => {
            const unsuscribe = onAuthStateChanged(auth, user => {
                if(user){
                    users.value = {email: user.email, uid: user.uid}
                }else{
                    users.value = null
                }
                resolve(user)
            },e => reject(e))
            unsuscribe();
        })
    }

    return{
        users,
        loadingSession,
        login,
        logout,
        currentUser,
    }

})