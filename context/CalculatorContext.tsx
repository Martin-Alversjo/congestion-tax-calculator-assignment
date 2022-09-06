import * as React from "react"
import { initialCalculatedTaxes } from "./InitialState"
import { TollingStationData } from "../types/TollingStationData"

type Action = {
  type: "add_tax"
  payload: TollingStationData
}

type State = { calculated_taxes: TollingStationData[] }
type CalculatorProviderProps = { children: React.ReactNode }

const CalculatorContext = React.createContext<{
  state: State
  dispatch: React.Dispatch<any>
}>({
  state: initialCalculatedTaxes,
  dispatch: () => null,
})

function calculatorReducer(state: State, action: Action): State {
  switch (action.type) {
    case "add_tax": {
      return {
        calculated_taxes: [
          ...state.calculated_taxes,
          {
            id: action.payload.id,
            dates: action.payload.dates,
            vehicle: action.payload.vehicle,
            taxZone: action.payload.taxZone,
          },
        ],
      }
    }
    default: {
      throw new Error(`Action type does not exist.`)
    }
  }
}
function CalculatorProvider({ children }: CalculatorProviderProps) {
  const [state, dispatch] = React.useReducer(
    calculatorReducer,
    initialCalculatedTaxes
  )
  const value = { state, dispatch }
  return (
    <CalculatorContext.Provider value={value}>
      {children}
    </CalculatorContext.Provider>
  )
}

function useCalculator() {
  const context = React.useContext(CalculatorContext)
  if (context === undefined) {
    throw new Error(
      "The hook: useCalculator,  must be used within the related CalculatorProvider"
    )
  }
  return context
}

export { CalculatorProvider, useCalculator }
