import { type FormEvent, useState } from 'react'
import type { AttestationRequest, AttestationResponse } from '../../contracts/services.contracts'
import { createAttestation } from '../../services/servicesService'
import MainLayout from '../../components/layout/MainLayout'

const initialValues: AttestationRequest = {
  montant: 0,
  devise: 'EUR',
  nomEtudiant: '',
  universiteCible: '',
}

export default function AttestationPage() {
  const [form, setForm] = useState<AttestationRequest>(initialValues)
  const [result, setResult] = useState<AttestationResponse | null>(null)

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const response: AttestationResponse = await createAttestation(form)
    setResult(response)
  }

  return (
    <MainLayout>
      <div className="max-w-3xl mx-auto py-10 px-4 space-y-6">
        <h1 className="text-2xl font-bold">Demande d&apos;attestation de virement</h1>
        <form
          onSubmit={handleSubmit}
          className="space-y-4 bg-white p-6 rounded-xl shadow"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">Nom de l&apos;étudiant</label>
              <input
                className="mt-1 w-full border rounded px-3 py-2 text-sm"
                value={form.nomEtudiant}
                onChange={(e) => setForm({ ...form, nomEtudiant: e.target.value })}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Université cible</label>
              <input
                className="mt-1 w-full border rounded px-3 py-2 text-sm"
                value={form.universiteCible}
                onChange={(e) => setForm({ ...form, universiteCible: e.target.value })}
                required
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">Montant</label>
              <input
                type="number"
                className="mt-1 w-full border rounded px-3 py-2 text-sm"
                value={form.montant}
                onChange={(e) =>
                  setForm({ ...form, montant: Number(e.target.value) || 0 })
                }
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Devise</label>
              <input
                className="mt-1 w-full border rounded px-3 py-2 text-sm"
                value={form.devise}
                onChange={(e) => setForm({ ...form, devise: e.target.value })}
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800"
          >
            Soumettre la demande
          </button>
        </form>

        {result && (
          <div className="bg-white p-4 rounded-xl shadow space-y-2">
            <h2 className="font-semibold">Résultat (mock)</h2>
            <p className="text-sm">ID: {result.id}</p>
            <p className="text-sm">Statut: {result.statut}</p>
            <p className="text-sm">
              Date d&apos;émission: {new Date(result.dateEmission).toLocaleString()}
            </p>
          </div>
        )}
      </div>
    </MainLayout>
  )
}


