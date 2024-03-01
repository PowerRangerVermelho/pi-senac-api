import { Agendamento } from "./agendamento"

export interface Paciente {
  id: number
  nome: string
  cpf: string
  email: string
  telefone: string
  dataNascimento: Date
  genero: string
  endereco: string
  agendamentos: Agendamento[]
}