import "../css/app.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/headers/Navbar";
import Basket from "./components/headers/basket";
import HomePage from "./screen/homePage";
import ShopPage from "./screen/shopPage";
import SalePage from "./screen/salePgae";
import DashBoardPage from "./screen/dash-boardPage";
import Footer from "./components/footer";
import "../css/navbar.css";
import "../css/footer.css";
import Auth from "./components/auth";

function App() {
  const location = useLocation();
  console.log(location);

  return (
    <>
      {location.pathname === "/dashboard" ? null : <Navbar />}

      <Routes>
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/sale" element={<SalePage />} />
        <Route path="/dashboard" element={<DashBoardPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
      {location.pathname === "/dashboard" ? null : <Footer />}
      <Basket />

      <Auth />
    </>
  );
}

export default App;
