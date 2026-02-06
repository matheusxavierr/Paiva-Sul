import { ChakraProvider } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import theme from "./theme/theme";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quem-somos" element={<About />} />
        <Route path="/servicos" element={<Services />} />
      </Routes>
    </ChakraProvider>
  );
}
