import { IVehicle } from "../lib/Vehicles"

export interface TollingStationData {
  id: number
  vehicle: IVehicle | undefined
  dates: Date[]
  taxZone: string
}
