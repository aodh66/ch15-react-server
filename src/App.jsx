import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/theme";

import Layout from "./components/Layout";

import { CarsProvider } from "./components/contexts/car.context";
import { UIProvider } from "./components/contexts/UI.context";

// import pages
import List from "./pages/List";
import Add from "./pages/Add";
import Update from "./pages/Update";
import NotFound from "./pages/NotFound";

import CssBaseline from "@mui/material/CssBaseline";

function App() {
  return (
    <Router>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <UIProvider>
          <CarsProvider>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<List />} />
                <Route path="/add" element={<Add />} />
                <Route path="/update/:id" element={<Update />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </CarsProvider>
        </UIProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
