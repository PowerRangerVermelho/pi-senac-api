import { Podologo } from "../../../../domain/model/podologo";
import { EntitySchema } from "typeorm";

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
      type: 'one-to-many',
      target: 'Agendamento',
      joinColumn: true,
      inverseSide: 'Paciente'
    }
  }
});
