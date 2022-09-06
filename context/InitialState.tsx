import { Vehicles, VehiclesTypes } from "../lib/Vehicles"

export const initialCalculatedTaxes = {
  calculated_taxes: [
    {
      id: 0,
      vehicle: Vehicles.getVehicle(VehiclesTypes.Car),
      dates: [new Date("2013-01-14 21:00:00")],
      taxZone: "gothenburg",
    },
    {
      id: 1,
      vehicle: Vehicles.getVehicle(VehiclesTypes.Car),
      dates: [new Date("2013-01-15 21:00:00")],
      taxZone: "gothenburg",
    },
    {
      id: 2,
      vehicle: Vehicles.getVehicle(VehiclesTypes.Car),
      dates: [new Date("2013-02-07 06:23:27"), new Date("2013-02-07 15:27:00")],
      taxZone: "gothenburg",
    },
    {
      id: 3,
      vehicle: Vehicles.getVehicle(VehiclesTypes.Car),
      dates: [
        new Date("2013-02-08 06:27:00"),
        new Date("2013-02-08 06:20:27"),
        new Date("2013-02-08 14:35:00"),
        new Date("2013-02-08 15:29:00"),
        new Date("2013-02-08 15:47:00"),
        new Date("2013-02-08 16:01:00"),
        new Date("2013-02-08 16:48:00"),
        new Date("2013-02-08 17:49:00"),
        new Date("2013-02-08 18:29:00"),
        new Date("2013-02-08 18:35:00"),
      ],
      taxZone: "gothenburg",
    },
    {
      id: 4,
      vehicle: Vehicles.getVehicle(VehiclesTypes.Car),
      dates: [new Date("2013-03-26 14:25:00")],
      taxZone: "gothenburg",
    },
    {
      id: 5,
      vehicle: Vehicles.getVehicle(VehiclesTypes.Car),
      dates: [new Date("2013-03-28 14:07:27")],
      taxZone: "gothenburg",
    },
    {
      id: 6,
      vehicle: Vehicles.getVehicle(VehiclesTypes.Motorbike),
      dates: [new Date("2013-12-27 14:25:00")],
      taxZone: "gothenburg",
    },
    {
      id: 7,
      vehicle: Vehicles.getVehicle(VehiclesTypes.Car),
      dates: [new Date("2013-07-03 12:25:00")],
      taxZone: "gothenburg",
    },
    {
      id: 8,
      vehicle: Vehicles.getVehicle(VehiclesTypes.Car),
      dates: [new Date("2013-09-27 16:13:00"), new Date("2013-09-27 17:35:00")],
      taxZone: "gothenburg",
    },
    {
      id: 9,
      vehicle: Vehicles.getVehicle(VehiclesTypes.Motorbike),
      dates: [new Date("2013-12-27 14:25:00")],
      taxZone: "gothenburg",
    },
  ],
}
