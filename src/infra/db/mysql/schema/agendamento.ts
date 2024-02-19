import { EntitySchema } from 'typeorm'
import { Paciente } from './paciente'
import { Podologo } from './podologo'

export interface Agendamento {
  id: number
  paciente: Paciente
  podologo: Podologo
  dataHora: Date
  descricao: string
  situacao: string
}

export const AgendamentoSchema = new EntitySchema<Agendamento>({
  name: 'Agendamento',
  tableName: 'agendamento',
  columns: {
    id: {
      type: 'int',
      primary: true,
      generated: true
    },
    dataHora: {
      name: 'data_hora',
      type: 'datetime'
    },
    descricao: {
      name: 'descricao',
      type: 'varchar',
      length: 255,
      default: null
    },
    situacao: {
      name: 'situacao',
      type: 'varchar',
      length: 255,
      default: null
    }
  },
  relations: {
    paciente: {
      target: 'Paciente',
      type: 'many-to-one',
      createForeignKeyConstraints: true,
      joinTable: true,
      cascade: true,
      inverseSide: 'Agendamento',
      joinColumn: {
        name: 'paciente_id',
        referencedColumnName: 'id'
      }
    },
    podologo: {
      target: 'Podologo',
      type: 'many-to-one',
      createForeignKeyConstraints: true,
      joinTable: true,
      cascade: true,
      inverseSide: 'Agendamento',
      joinColumn: {
        name: 'podologo_id',
        referencedColumnName: 'id'
      }
    }
  }
})
