import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import ChakraRTLProvider from "../chakra/chakra-rtl-provider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraRTLProvider>
      <Component {...pageProps} />
    </ChakraRTLProvider>
  );
}

export default MyApp;
