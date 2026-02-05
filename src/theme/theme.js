import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: "'Manrope', sans-serif",
    body: "'Manrope', sans-serif",
  },

  colors: {
    brand: {
      50: "#e6f0fb",
      500: "#137fec",
      700: "#0f5fb1",
      900: "#101922",
    },
    background: {
      light: "#f6f7f8",
      dark: "#101922",
    },
  },

  styles: {
    global: {
      html: {
        scrollBehavior: "smooth",
      },
      body: {
        bg: "background.light",
        color: "#0d141b",
      },
    },
  },
});

export default theme;
