export interface LoginRequest {
  email: string
  password: string
}

export interface LoginResponse {
  accessToken: string
  refreshToken?: string
  user: {
    id: string
    firstName: string
    lastName: string
    email: string
    role: 'user' | 'admin'
  }
}

export interface RegisterRequest {
  firstName: string
  lastName: string
  email: string
  password: string
  confirmPassword: string
}

export interface RegisterResponse {
  id: string
  createdAt: string
}


