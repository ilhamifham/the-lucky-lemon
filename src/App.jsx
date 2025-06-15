import { Routes, Route } from "react-router";
import "./App.css";
import Header from "./components/header/Header.jsx";
import CartContextProvider from "./components/provider/CartContextProvider.jsx";
import HomePage from "./pages/Home.jsx";
import CartPage from "./pages/Cart.jsx";
import ReservationPage from "./pages/Reservation.jsx";

function App() {
  return (
    <CartContextProvider>
      <Header />
      <main>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="reservation" element={<ReservationPage />} />
        </Routes>
      </main>
    </CartContextProvider>
  );
}

export default App;