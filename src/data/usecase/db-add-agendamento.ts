import { Agendamento } from "@/domain/model/agendamento";
import { AddAgendamento, AgendamentoModel } from "../../domain/usecase/add-agendamento";
import { AddAgendamentoRepository } from "../protocols/db/add-agendamento-repository";

export class DbAgendamento implements AddAgendamento {
  private readonly agendamentoRepository: AddAgendamentoRepository
  constructor (agendamentoRepository: AddAgendamentoRepository) {
    this.agendamentoRepository = agendamentoRepository
  }
  async add (agendamentoData: AgendamentoModel): Promise<Agendamento> {
    return await this.agendamentoRepository.add(agendamentoData)
  }

}