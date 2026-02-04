import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: "'Manrope', sans-serif",
    body: "'Manrope', sans-serif",
  },

  textStyles: {
    h1: {
      fontSize: { base: "3xl", md: "5xl", lg: "6xl" },
      fontWeight: 800,
      lineHeight: "1.05",
      letterSpacing: "-0.03em",
    },
  },

  styles: {
    global: {
      body: {
        bg: "background.light",
        color: "#0d141b",
        fontWeight: 400,
      },
    },
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
});

export default theme;
