import type { NextPage } from "next"
import { TaxList } from "../components/TaxList"
import { Box, Container } from "@chakra-ui/react"
import { AddTax } from "../components/AddTax"
import { Vehicles } from "../lib/Vehicles"

const Home: NextPage = () => {
  return (
    <Box py="5rem">
      <Container maxW="900px">
        <AddTax />
        <TaxList />
      </Container>
    </Box>
  )
}

export default Home
