import { Link } from 'react-router-dom'
import MainLayout from '../../components/layout/MainLayout'
import { Button } from '../../components/ui/button'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '../../components/ui/collapsible'

export default function HomePage() {
  return (
    <MainLayout>
      <div className="max-w-6xl mx-auto py-10 px-4 space-y-12">
        {/* Hero */}
        <header className="bg-white rounded-[25px] border border-[#d7d7d7] shadow-[0px_20px_43px_#00000005,0px_79px_79px_#00000005,0px_177px_106px_#00000003,0px_315px_126px_transparent,0px_492px_138px_transparent] p-6 md:p-10 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 space-y-4">
            <div className="flex items-center gap-3">
              <img src="/boaz--studyy-1.png" alt="Boaz Study" className="h-10 w-auto" />
              <span className="text-[#0140ff] font-bold text-lg">Boaz Study</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-[#0140ff] leading-tight">
              Une plateforme claire pour vos services étudiants
            </h1>
            <p className="text-[#565656] text-sm md:text-base max-w-2xl">
              Attestations de virement, preuves de versement, wallet, financement : centralisez et suivez vos démarches dans une interface responsive, mockée et prête à être branchée au backend.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild className="bg-[#0140ff] hover:bg-[#0133d1] text-white rounded-[12px] px-6">
                <Link to="/home/attestation">Demander une attestation</Link>
              </Button>
              <Button asChild className="bg-[#0140ff] hover:bg-[#0133d1] text-white rounded-[12px] px-6">
                <Link to="/avi">Dashboard</Link>
              </Button>
              <Button variant="outline" className="border-[#d7d7d7] text-[#0140ff] hover:bg-[#f5f6fa] rounded-[12px] px-6">
                <Link to="/home">Explorer les services</Link>
              </Button>
            </div>
           
          </div>
          <div className="w-full md:w-[340px]">
            <div className="bg-[#f5f6fa] rounded-[20px] border border-[#d7d7d7] p-5 space-y-3 text-center">
              <h3 className="text-lg font-semibold text-[#0140ff]">Connexion réussie</h3>
              <p className="text-sm text-[#565656]">
                Vous êtes connecté. Accédez à vos services et suivez vos demandes en quelques clics.
              </p>
              <div className="flex justify-center gap-4 text-xs text-[#565656]">
                <span>Attestations</span>
                <span>Wallet</span>
                <span>Financement</span>
              </div>
            </div>
          </div>
        </header>

        {/* Stats */}
        <section className="grid gap-4 md:grid-cols-4">
          {[
            { label: 'Attestations simulées', value: '120+' },
            { label: 'Dossiers financés (mock)', value: '75+' },
            { label: 'Preuves de versement', value: '200+' },
            { label: 'Satisfaction (mock)', value: '4.8/5' },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-white rounded-[20px] border border-[#d7d7d7] shadow-sm p-4 text-center"
            >
              <div className="text-2xl font-bold text-[#0140ff]">{item.value}</div>
              <div className="text-sm text-[#565656]">{item.label}</div>
            </div>
          ))}
        </section>

        {/* Services cards */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-bold text-[#0140ff]">Services disponibles</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              to="/home/attestation"
              className="block rounded-[18px] border border-[#d7d7d7] bg-white p-5 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold">Attestation de virement</h3>
              <p className="text-sm text-[#565656] mt-1">
                Demandez une attestation pour une université cible (mock).
              </p>
            </Link>
            <div className="rounded-[18px] border border-[#d7d7d7] bg-white p-5 shadow-sm">
              <h3 className="text-lg font-semibold">Preuves de versement</h3>
              <p className="text-sm text-[#565656] mt-1">
                Déposez ou consultez vos preuves de paiement (mock).
              </p>
            </div>
            <div className="rounded-[18px] border border-[#d7d7d7] bg-white p-5 shadow-sm">
              <h3 className="text-lg font-semibold">Mon Wallet Boaz</h3>
              <p className="text-sm text-[#565656] mt-1">
                Visualisez soldes et historiques de manière simulée.
              </p>
            </div>
            <div className="rounded-[18px] border border-[#d7d7d7] bg-white p-5 shadow-sm">
              <h3 className="text-lg font-semibold">Financement</h3>
              <p className="text-sm text-[#565656] mt-1">
                Explorez des options de financement fictives et leurs statuts.
              </p>
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-[#0140ff]">Comment ça marche</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { title: '1. Connexion', desc: 'Identifiez-vous et accédez à votre espace.' },
              { title: '2. Choix du service', desc: 'Attestation, preuves, wallet ou financement.' },
              { title: '3. Suivi', desc: 'Consultez l’état  et préparez l’intégration backend.' },
            ].map((step) => (
              <div
                key={step.title}
                className="rounded-[18px] border border-[#d7d7d7] bg-white p-5 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-[#0140ff]">{step.title}</h3>
                <p className="text-sm text-[#565656] mt-1">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-[#0140ff]">FAQ</h2>
          <div className="space-y-2">
            {[
              { q: 'Les données sont-elles réelles ?', a: 'Non, tout est mocké pour développer le front sans backend.' },
              { q: 'Puis-je changer les services ?', a: 'Oui, les cartes sont configurables et branchables à vos futures API.' },
              { q: 'Est-ce responsive ?', a: 'Oui, la page adopte le thème et le layout déjà utilisés dans AVI.' },
            ].map((item) => (
              <Collapsible key={item.q} className="border border-[#d7d7d7] rounded-[14px] bg-white px-4">
                <CollapsibleTrigger className="w-full flex items-center justify-between py-3 text-left font-semibold text-[#0140ff]">
                  {item.q}
                  <span className="text-[#565656] text-xs">+</span>
                </CollapsibleTrigger>
                <CollapsibleContent className="pb-3 text-sm text-[#565656]">
                  {item.a}
                </CollapsibleContent>
              </Collapsible>
            ))}
          </div>
        </section>

        {/* CTA finale */}
        <section className="bg-white rounded-[20px] border border-[#d7d7d7] shadow-[0px_20px_43px_#00000005,0px_79px_79px_#00000005,0px_177px_106px_#00000003,0px_315px_126px_transparent,0px_492px_138px_transparent] p-6 md:p-8 flex flex-col md:flex-row items-center gap-4">
          <div className="flex-1 space-y-1">
            <h3 className="text-xl font-bold text-[#0140ff]">Prêt à tester les services ?</h3>
            <p className="text-sm text-[#565656]">
              Lancez une demande d’attestation  et suivez-la dans le dashboard.
            </p>
          </div>
          <Button asChild className="bg-[#0140ff] hover:bg-[#0133d1] text-white rounded-[12px] px-6">
            <Link to="/home/attestation">Démarrer</Link>
          </Button>
        </section>
      </div>
    </MainLayout>
  )
}


