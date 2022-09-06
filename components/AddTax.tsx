import React from "react"
import { Vehicles, VehiclesTypes } from "../lib/Vehicles"
import { useCalculator } from "../context/CalculatorContext"
import {
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Button,
  Select,
  Box,
} from "@chakra-ui/react"
import { Formik, Form, Field } from "formik"

interface initialValues {
  vehicle: string
  date: string
  taxZone: string
}

export const AddTax: React.FC = () => {
  const { state, dispatch } = useCalculator()

  function validateVehicleType(value: string) {
    let error
    if (!value) {
      error = "Type of Vehicle is required"
    }
    return error
  }

  const initialValues: initialValues = {
    date: "2013-02-08 06:27:00",
    taxZone: "gothenburg",
    vehicle: "car",
  }
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        const normalizeVehicle = values.vehicle.toLowerCase()
        setTimeout(() => {
          dispatch({
            type: "add_tax",
            payload: {
              id: state.calculated_taxes.length,
              dates: [new Date(values.date)],
              taxZone: "gothenburg",
              vehicle: Vehicles.getVehicle(normalizeVehicle),
            },
          })
          actions.setSubmitting(false)
        }, 1000)
      }}
    >
      {(props) => (
        <Form>
          <Box display="flex">
            <Field name="date">
              {({ field, form }: any) => (
                <FormControl>
                  <FormLabel>Date</FormLabel>
                  <Input {...field} placeholder="e.g 2013-02-08 06:27:00" />
                </FormControl>
              )}
            </Field>
            <Field name="taxZone" validate={validateVehicleType}>
              {({ form }: any) => (
                <FormControl
                  isInvalid={form.errors.taxZone && form.touched.date}
                >
                  <FormLabel>Tax Zone</FormLabel>
                  <Select placeholder="Select option">
                    <option value="gothenburg">Gothenburg</option>
                  </Select>
                  <FormErrorMessage>{form.errors.taxZone}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Field name="vehicle">
              {({ field }: any) => (
                <FormControl>
                  <FormLabel>Vehicle</FormLabel>
                  <Select
                    placeholder="Select Vehicle"
                    name="vehicle"
                    onChange={field.onChange}
                  >
                    {Object.keys(VehiclesTypes).map((v, i) => (
                      <option key={i} value={v}>
                        {v}
                      </option>
                    ))}
                  </Select>
                </FormControl>
              )}
            </Field>
          </Box>
          <Button
            mt={2}
            mb={12}
            colorScheme="teal"
            isLoading={props.isSubmitting}
            type="submit"
          >
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  )
}
