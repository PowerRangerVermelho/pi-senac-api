import { Paciente } from "./paciente"
import { Podologo } from "./podologo"

export interface Agendamento {
  id: number
  paciente: Paciente
  podologo: Podologo
  dataHora: Date
  descricao: string
  situacao: string
}