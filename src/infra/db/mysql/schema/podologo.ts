import { EntitySchema } from "typeorm";
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

export const PodologoSchema = new EntitySchema<Podologo>({
  name: "Podologo",
  tableName: "cadastro_podologos",
  columns: {
    id: {
      name: "id_podologo",
      type: 'int',
      primary: true,
      generated: true,
    },
    senha: {
      type: "varchar",
      length: 255,
      default: null,
    },
    nomeCompleto: {
      name: "nome_completo",
      type: "varchar",
      length: 255,
      default: null,
    },
    cpf: {
      name: "cpf",
      type: "varchar",
      length: 255,
      default: null,
    },
    email: {
      name: "email",
      type: "varchar",
      length: 255,
      default: null,
    },
    telefone: {
      name: "telefone",
      type: "varchar",
      length: 15,
      default: null,
    },
    dataNascimento: {
      name: "data_nascimento",
      type: "date",
      default: null,
    },
    genero: {
      name: "genero",
      type: "varchar",
      length: 20,
      default: null,
    },
    endereco: {
      name: "endereco",
      type: "varchar",
      length: 255,
      default: null,
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
