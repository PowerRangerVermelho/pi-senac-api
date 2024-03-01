import { PacienteListarController } from "../../../presentation/controllers/paciente/paciente-listar"

export const makePacienteController = (): PacienteListarController => {

  return new PacienteListarController()
}