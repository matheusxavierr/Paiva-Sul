import { ChakraProvider } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import theme from "./theme/theme";

import Home from "./pages/Home";
import About from "./pages/About";

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quem-somos" element={<About />} />
      </Routes>
    </ChakraProvider>
  );
}
