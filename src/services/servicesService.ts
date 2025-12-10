import type {
  AttestationRequest,
  AttestationResponse,
} from '../contracts/services.contracts'
import { USE_MOCKS } from '../config/env'
import { http } from './http/axiosInstance'
import { mockCreateAttestation } from './mock/services.mock'

export async function createAttestation(
  payload: AttestationRequest,
): Promise<AttestationResponse> {
  if (USE_MOCKS) {
    return mockCreateAttestation(payload)
  }
  const { data } = await http.post<AttestationResponse>('/attestations', payload)
  return data
}


