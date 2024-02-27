import { DbAddPodologo } from '../../../data/protocols/db/db-add-podologo'
import { PodologoController } from '../../../presentation/controllers/podologo/podologo'

export const makePodologoController = (): PodologoController => {
  const dbAddPodologo = new DbAddPodologo()
  return new PodologoController(dbAddPodologo)
}
