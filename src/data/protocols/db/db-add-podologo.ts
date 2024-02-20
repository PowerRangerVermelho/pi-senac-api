import { Podologo } from "@/domain/model/podologo";
import { AddPodologo, PodologoDto } from "@/domain/usecase/add-podologo";

export class DbAddPodologo implements AddPodologo {
  add (podologoDto: PodologoDto): Podologo {
    throw new Error("Method not implemented.");
  }
}