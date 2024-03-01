import { Paciente } from "../../../domain/model/paciente";
import { PacienteModel } from "../../../domain/usecase/add-paciente";

export interface AddPacienteRepository {
  add (pacienteData: PacienteModel): Promise<Paciente>
}