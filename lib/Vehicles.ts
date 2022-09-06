export enum VehiclesTypes {
  Car = "car",
  Bus = "bus",
  Motorbike = "motorbike",
  Tractor = "tractor",
  Emergency = "emergency",
  Diplomat = "diplomat",
  Foreign = "foreign",
  Military = "military",
}

export interface IVehicle {
  id: string
  tollFree: boolean
}

export interface BaseVehicle {
  id: string
}

export interface Vehicle<T extends BaseVehicle> {
  create(value: T): void
  getVehicle(id: string): T | undefined
  getVehicleType(id: string): string | undefined
  isTollFree(id: string): boolean | undefined
}

export class VehicleCollection implements Vehicle<BaseVehicle | IVehicle> {
  private vehicle: Record<string, IVehicle> = {}

  public create(value: IVehicle): void {
    this.vehicle[value.id] = value
  }

  public getVehicle(id: string): IVehicle | undefined {
    return this.vehicle[id]
  }

  public getVehicleType(id: string): string | undefined {
    return this.vehicle[id].id
  }

  public isTollFree(id: string): boolean | undefined {
    return this.vehicle[id].tollFree
  }
}

export const Vehicles = new VehicleCollection()

Vehicles.create({
  id: VehiclesTypes.Car,
  tollFree: false,
})

Vehicles.create({
  id: VehiclesTypes.Bus,
  tollFree: true,
})

Vehicles.create({
  id: VehiclesTypes.Motorbike,
  tollFree: true,
})

Vehicles.create({
  id: VehiclesTypes.Tractor,
  tollFree: false,
})

Vehicles.create({
  id: VehiclesTypes.Emergency,
  tollFree: true,
})

Vehicles.create({
  id: VehiclesTypes.Diplomat,
  tollFree: true,
})

Vehicles.create({
  id: VehiclesTypes.Foreign,
  tollFree: true,
})

Vehicles.create({
  id: VehiclesTypes.Military,
  tollFree: true,
})
