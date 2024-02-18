import { EntitySchema } from 'typeorm'
import { Agendamento } from './agendamento'

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

export const PacienteSchema = new EntitySchema<Paciente>({
  name: "Paciente",
  tableName: 'cadastro_pacientes',
  columns: {
    id: {
      type: 'int',
      primary: true,
      generated: true,
    },
    nome: {
      type: String,
      length: 100,
      nullable: false,
    },
    cpf: {
      type: String,
      length: 11,
      nullable: false,
    },
    email: {
      type: String,
      length: 100,
      nullable: false,
    },
    dataNascimento: {
      type: "date",
      nullable: false,
    },
    genero: {
      type: String,
      length: 100,
      nullable: false,
    },
    endereco: {
      type: "text",
      nullable: false,
    },
  },
  relations: {
    agendamentos: {
      type: 'many-to-one',
      target: 'Agendameto',
      joinColumn: true,
      inverseSide: 'Paciente'
    }
  }
});
