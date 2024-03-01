import { Agendamento } from "../../../domain/model/agendamento";
import { AgendamentoModel } from "../../../domain/usecase/add-agendamento";

export interface AddAgendamentoRepository {
  add (agendamentoData: AgendamentoModel): Promise<Agendamento>
}