export interface AttestationRequest {
  montant: number
  devise: string
  nomEtudiant: string
  universiteCible: string
}

export interface AttestationResponse {
  id: string
  statut: 'en_attente' | 'validée' | 'refusée'
  dateEmission: string
  urlDocumentPDF: string
}


