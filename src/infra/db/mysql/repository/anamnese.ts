import { Anamnese } from "@/domain/model/anamnese";
import { AnamneseModel } from "@/domain/usecase/add-anamnese";
import { AddAnamneseRepository } from "../../../../data/protocols/db/add-anamnese-repository";
import { AppDataSource } from "../data-source";
import { AnamneseSchema } from "../schema/anamnese";

export class AnamneseRepository implements AddAnamneseRepository {
  async add (anamneseData: AnamneseModel): Promise<Anamnese> {
    const anamneseRepository = AppDataSource.getRepository(AnamneseSchema)

    return anamneseRepository.save(anamneseData)
  }

}