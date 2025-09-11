import { Routes, Route } from "react-router";
import "./App.css";
import Header from "./components/header/Header.jsx";
import { CartContextProvider } from "./contexts/useCartContext.jsx";
import HomePage from "./pages/HomePage.jsx";
import CartPage from "./pages/CartPage.jsx";
import ReservationPage from "./pages/ReservationPage.jsx";
import Footer from "./components/footer/Footer.jsx";
import DocumentTitle from "./components/common/DocumentTitle.jsx";

function App() {
  return (
    <CartContextProvider>
      <Header />
      <main>
        <DocumentTitle />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="reservation" element={<ReservationPage />} />
        </Routes>
      </main>
      <Footer />
    </CartContextProvider>
  );
}

export default App;
