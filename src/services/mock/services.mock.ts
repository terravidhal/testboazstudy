import type {
  AttestationRequest,
  AttestationResponse,
} from '../../contracts/services.contracts'

export async function mockCreateAttestation(
  _payload: AttestationRequest,
): Promise<AttestationResponse> {
  await new Promise((resolve) => setTimeout(resolve, 500))
  const now = new Date()
  return {
    id: 'ATT-' + now.getTime(),
    statut: 'en_attente',
    dateEmission: now.toISOString(),
    urlDocumentPDF: '#',
  }
}


