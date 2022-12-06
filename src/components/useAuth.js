import router from '@/router'
import { firebaseApp } from '@/components/useFirebase'

import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { useAuth as firebaseAuth } from '@vueuse/firebase/useAuth'

const auth = getAuth(firebaseApp)

const { isAuthenticated, user } = firebaseAuth(auth)

export const useAuth = () => {
  const login = async (Email, password) => {
    await signInWithEmailAndPassword(auth, Email, password)
    return isAuthenticated.value
  }

  const logout = async () => {
    await signOut(auth)
    router.push({ name: 'Home' })
  }
  return { isAuthenticated, user, login, logout }
}
