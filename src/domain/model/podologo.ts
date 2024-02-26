import { Agendamento } from "./agendamento";

export interface Podologo {
  id?: number;
  senha: string;
  nomeCompleto: string;
  cpf: string;
  email: string;
  telefone: string;
  dataNascimento: string;
  genero: string;
  endereco: string;
  agendamentos: Agendamento[]
}