// pages/_app.tsx

import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import { extendTheme } from "@chakra-ui/react";

// Importing custom styles or global styles if needed

const theme = extendTheme({
  // Custom theme configurations if needed
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
