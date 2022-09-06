import React from "react"
import { useCalculator } from "../context/CalculatorContext"
import { Grid, GridItem } from "@chakra-ui/react"
import { IVehicle } from "../lib/Vehicles"
import TaxCalculator from "../lib/TaxCalculator"

export const TaxList: React.FC = () => {
  const { state } = useCalculator()

  return (
    <div>
      <Grid templateColumns="repeat(6, 1fr)" gap={6}>
        <GridItem colSpan={1} fontWeight="bold" w="100%" h="10">
          ID
        </GridItem>
        <GridItem colSpan={2} fontWeight="bold" w="100%" h="10">
          Dates
        </GridItem>{" "}
        <GridItem w="100%" fontWeight="bold" h="10">
          Tax Zone
        </GridItem>{" "}
        <GridItem w="100%" fontWeight="bold" h="10">
          Vehicle
        </GridItem>
        <GridItem w="100%" fontWeight="bold" h="10">
          Total Cost
        </GridItem>
      </Grid>
      <Grid templateColumns="repeat(6, 1fr)" gap={6}>
        {state.calculated_taxes.length > 0 ? (
          state.calculated_taxes
            .slice(0)
            .reverse()
            .map((ct) => {
              return (
                <>
                  <GridItem w="100%" colSpan={1} h="10">
                    {ct.id}
                  </GridItem>
                  <GridItem
                    w="100%"
                    colSpan={2}
                    display="flex"
                    flexDirection="column"
                    h="auto"
                  >
                    {ct?.dates
                      ? ct.dates.map((d: Date, i: any) => (
                          <span key={i}>{d.toLocaleString()}</span>
                        ))
                      : "No dates was added"}
                  </GridItem>
                  <GridItem w="100%" h="10">
                    {ct.taxZone}
                  </GridItem>
                  <GridItem w="100%" h="10">
                    {ct.vehicle?.id}
                  </GridItem>
                  <GridItem w="100%" h="10">
                    {ct?.vehicle
                      ? TaxCalculator.getTax(ct.vehicle, ct.dates)
                      : "Could not get the tax price."}
                  </GridItem>
                </>
              )
            })
        ) : (
          <GridItem w="100%" h="10">
            There are no tax rules to be found.
          </GridItem>
        )}
      </Grid>
    </div>
  )
}
