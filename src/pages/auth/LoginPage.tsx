import { useState, type FormEvent } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuthStore } from '../../store/authStore'
import { Button } from '../../components/ui/button'

export default function LoginPage() {
  const navigate = useNavigate()
  const { login, loading, error, isAuthenticated } = useAuthStore()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    await login({ email, password })
    if (isAuthenticated) {
      navigate('/home')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f5f6fa] px-4">
      <div className="w-full max-w-xl">
        <form
          onSubmit={handleSubmit}
          className="w-full bg-white rounded-[25px] border border-[#d7d7d7] shadow-[0px_20px_43px_#00000005,0px_79px_79px_#00000005,0px_177px_106px_#00000003,0px_315px_126px_transparent,0px_492px_138px_transparent] p-6 md:p-8 space-y-5"
        >
          <div className="flex justify-center">
            <img
              src="/boaz--studyy-1.png"
              alt="Boaz Study"
              className="h-10 w-auto"
            />
          </div>

          <div className="text-center space-y-1">
            <h1 className="text-3xl font-bold text-[#0140ff]">Connexion</h1>
            <p className="text-sm text-[#646464]">Accède à ton espace Boaz Study</p>
          </div>

          <div className="space-y-3">
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-[#565656]">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full border border-[#d7d7d7] rounded-[10px] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0140ff]/60"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-[#565656]">Mot de passe</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full border border-[#d7d7d7] rounded-[10px] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0140ff]/60"
              />
            </div>
          </div>

          {error && <p className="text-sm text-red-600">{error}</p>}

          <Button
            type="submit"
            className="w-full bg-[#0140ff] hover:bg-[#0133d1] text-white rounded-[12px] h-11 font-semibold"
            disabled={loading}
          >
            {loading ? 'Connexion...' : 'Se connecter'}
          </Button>

          <p className="text-xs text-center text-slate-500">
            Utilise <span className="font-mono">demo@boaz.com</span> /{' '}
            <span className="font-mono">password</span> pour tester.
          </p>
          <p className="text-xs text-center text-[#565656]">
            Pas encore de compte ?{' '}
            <Link to="/register" className="text-[#0140ff] font-semibold hover:underline">
              Crée-en un ici
            </Link>
            .
          </p>
        </form>
      </div>
    </div>
  )
}


