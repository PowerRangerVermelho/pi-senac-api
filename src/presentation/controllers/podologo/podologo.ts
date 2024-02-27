import { AddPodologo, PodologoDto } from '../../../domain/usecase/add-podologo'
import { ok, serverError } from '../../../presentation/helpers/http-helper'
import {
  Controller,
  HttpRequest,
  HttpResponse
} from '../../../presentation/protocols'

export class PodologoController implements Controller {
  private readonly addPodologo: AddPodologo
  constructor(addPodologo: AddPodologo) {
    this.addPodologo = addPodologo
  }
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const body = httpRequest.body

      const podologoDto: PodologoDto = {
        senha: body.senha,
        nomeCompleto: body.nomeCompleto,
        cpf: body.cpf,
        email: body.email,
        telefone: body.telefone,
        dataNascimento: body.dataNascimento,
        genero: body.genero,
        endereco: body.endereco
      }

      const podologo = this.addPodologo.add(podologoDto)

      return ok(podologo)
    } catch (error) {
      serverError()
    }
  }
}
