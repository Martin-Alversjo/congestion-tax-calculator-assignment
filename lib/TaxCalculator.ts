import { isNumInArray } from "../utils/isNumInArray"
import { Vehicles, IVehicle } from "./Vehicles"

interface TTaxCalculator {
  getTax(vehicle: IVehicle, dates: Date[]): number | undefined
  getTollFee(date: Date, vechicle: IVehicle): number
  isTollFreeDate(date: Date): boolean
}

const prices = {
  priceGroup0: 0,
  priceGroup1: 8,
  priceGroup2: 13,
  priceGroup3: 18,
}

class CTaxCalculator implements TTaxCalculator {
  getTax(vehicle: IVehicle, dates: Date[]): number {
    let intervalStart: Date = dates[0]
    let totalFee: number = 0

    for (let i = 0; i < dates.length; i++) {
      const date: Date = dates[i]
      let nextFee: number = this.getTollFee(date, vehicle)
      let tempFee = this.getTollFee(intervalStart, vehicle)

      let diffInMillies = date.getTime() - intervalStart.getTime()
      let minutes = diffInMillies / 1000 / 60

      if (minutes <= 60) {
        if (totalFee > 0) totalFee -= tempFee
        if (nextFee >= tempFee) tempFee = nextFee
        totalFee += tempFee
      } else {
        totalFee += nextFee
      }

      if (totalFee > 60) totalFee = 60
    }

    return totalFee
  }

  getTollFee(date: Date, vehicle: IVehicle): number {
    if (this.isTollFreeDate(date) || Vehicles.isTollFree(vehicle.id))
      return prices.priceGroup0

    const hour: number = date.getHours()
    const minute: number = date.getMinutes()

    // Could improve this to a helper function and solve it with parameters
    if (hour == 6 && minute >= 0 && minute <= 29) return prices.priceGroup1
    else if (hour == 6 && minute >= 30 && minute <= 59)
      return prices.priceGroup2
    else if (hour == 7 && minute >= 0 && minute <= 59) return prices.priceGroup3
    else if (hour == 8 && minute >= 0 && minute <= 29) return prices.priceGroup2
    else if (hour <= 14) return prices.priceGroup1
    else if (hour >= 8 && hour <= 14 && minute >= 30 && minute <= 59)
      return prices.priceGroup1
    else if (hour == 14 && minute <= 59) return prices.priceGroup1
    else if (hour == 15 && minute >= 0 && minute <= 29)
      return prices.priceGroup2
    else if ((hour == 15 && minute >= 0) || (hour == 16 && minute <= 59))
      return prices.priceGroup3
    else if (hour == 17 && minute >= 0 && minute <= 59)
      return prices.priceGroup2
    else if (hour == 18 && minute >= 0 && minute <= 29)
      return prices.priceGroup1
    else return prices.priceGroup0
  }

  isTollFreeDate(date: Date): boolean {
    const year: number = date.getFullYear()
    const month: number = date.getMonth() + 1
    const day: number = date.getDay()
    const dayOfMonth: number = date.getDate()

    if (day == 6 || day == 0) return true

    if (year == 2013) {
      return this.getTollFreeDates(month, dayOfMonth)
    }
    return false
  }

  getTollFreeDates(month: number, dayOfMonth: number): boolean {
    switch (month) {
      case 1: {
        return isNumInArray([1], dayOfMonth)
      }
      case 3: {
        return isNumInArray([28, 29], dayOfMonth)
      }
      case 4: {
        return isNumInArray([1, 29], dayOfMonth)
      }
      case 5: {
        return isNumInArray([1, 8, 9], dayOfMonth)
      }
      case 6: {
        return isNumInArray([5, 6, 21], dayOfMonth)
      }
      case 7: {
        return true
      }
      case 11: {
        return isNumInArray([1], dayOfMonth)
      }
      case 12: {
        return isNumInArray([24, 25, 26, 31], dayOfMonth)
      }
      default: {
        return false
      }
    }
  }
}

const TaxCalculator = new CTaxCalculator()

export default TaxCalculator
