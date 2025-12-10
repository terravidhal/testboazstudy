import { create } from 'zustand'
import type { LoginRequest, LoginResponse } from '../contracts/auth.contracts'
import { mockLogin } from '../services/mock/auth.mock'

interface AuthState {
  user: LoginResponse['user'] | null
  accessToken: string | null
  isAuthenticated: boolean
  loading: boolean
  error: string | null
  login: (payload: LoginRequest) => Promise<void>
  logout: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  accessToken: null,
  isAuthenticated: false,
  loading: false,
  error: null,
  async login(payload) {
    try {
      set({ loading: true, error: null })
      const response = await mockLogin(payload)
      set({
        user: response.user,
        accessToken: response.accessToken,
        isAuthenticated: true,
        loading: false,
      })
    } catch (e) {
      set({ error: 'Identifiants invalides', loading: false, isAuthenticated: false })
    }
  },
  logout() {
    set({ user: null, accessToken: null, isAuthenticated: false })
  },
}))


