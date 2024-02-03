import { Column, Model, Table } from "sequelize-typescript";

@Table
export class Paciente extends Model {

  @Column
  get nome (): string {
    return this.getDataValue('nome')
  }

  set nome (value: string) {
    this.setDataValue('name', value);
  }


  cpf: string


  email: string


  telefone: string


  data_nascimento: Date


  genero: string


  endereco: string
}