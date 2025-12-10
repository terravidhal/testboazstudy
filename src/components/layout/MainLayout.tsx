import { type ReactNode } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { useAuthStore } from '../../store/authStore'

interface MainLayoutProps {
  children?: ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
  const navigate = useNavigate()
  const { user, logout } = useAuthStore()

  function handleLogout() {
    logout()
    navigate('/login')
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <header className="w-full border-b bg-white">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
          <Link to="/home" className="font-semibold">
            Boaz Study
          </Link>
          <nav className="flex items-center gap-4 text-sm">
            <Link to="/home" className="hover:underline">
              Accueil
            </Link>
            <Link to="/avi" className="hover:underline">
              Dashboard
            </Link>
            <Link to="/home/attestation" className="hover:underline">
              Attestation
            </Link>
            {user && (
              <span className="text-slate-600 text-xs md:text-sm">
                {user.firstName} {user.lastName}
              </span>
            )}
            <button
              onClick={handleLogout}
              className="rounded bg-slate-900 px-3 py-1 text-xs md:text-sm font-medium text-white hover:bg-slate-800"
            >
              Déconnexion
            </button>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        {children ?? <Outlet />}
      </main>
    </div>
  )
}

