import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CartMessageAlert from "./components/CartMessageAlert";

function App() {
  return (
    <div className="app">
      <Navbar />
      <CartMessageAlert />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
