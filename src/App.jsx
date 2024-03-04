import React from "react";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import DetailPage from "./pages/DetailPage";

const App = () => {
  return (
    <BrowserRouter>
      <div className="p-5 md:p-10 lg:p-15 xl:px-20">
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/detay/:id" element={<DetailPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
