import type { LoginRequest, LoginResponse } from '../../contracts/auth.contracts'

export async function mockLogin(payload: LoginRequest): Promise<LoginResponse> {
  // Simuler un délai réseau
  await new Promise((resolve) => setTimeout(resolve, 500))

  if (payload.email === 'demo@boaz.com' && payload.password === 'password') {
    return {
      accessToken: 'mock-token',
      user: {
        id: '1',
        firstName: 'Demo',
        lastName: 'User',
        email: payload.email,
        role: 'user',
      },
    }
  }

  throw new Error('Invalid credentials')
}


