import { Routes, Route, Navigate } from 'react-router-dom'
import LoginPage from './pages/auth/LoginPage'
import RegisterPage from './pages/auth/RegisterPage'
import HomePage from './pages/home/HomePage'
import AttestationPage from './pages/attestation/AttestationPage'
import { useAuthStore } from './store/authStore'
import { AVI } from './screens/AVI'


function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const isAuth = useAuthStore((state) => state.isAuthenticated)
  return isAuth ? children : <Navigate to="/login" replace />
}

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/avi" element={<AVI />} />
   
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/home/attestation"
        element={
          <ProtectedRoute>
            <AttestationPage />
          </ProtectedRoute>
        }
      />
    </Routes>
  )
}
