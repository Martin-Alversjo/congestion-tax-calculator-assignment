import type { AppProps } from "next/app"
import { ChakraProvider } from "@chakra-ui/react"
import { CalculatorProvider } from "../context/CalculatorContext"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <CalculatorProvider>
        <Component {...pageProps} />
      </CalculatorProvider>
    </ChakraProvider>
  )
}

export default MyApp
