import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { HomePage } from "./pages/HomePage";
import { FindYourCountry } from "./pages/FindYourCountry";

export default function App() {
  return (
    <div className="min-h-screen">
      <div className="max-w-[1180px] mx-auto px-7">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/find-your-country" element={<FindYourCountry />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </div>
    </div>
  );
}