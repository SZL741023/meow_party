import { RouterProvider, createHashRouter } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import CartTest from "./pages/CartTest";


function App() {
  const routes = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "products",
      element: <Product />,
    },
    {
      path: "cart",
      element: <CartTest />,
    },
  ];

  const router = createHashRouter(routes);

  return (

    <div className="app">
      <div className="container mt-3">
        <RouterProvider router={router} />
      </div>
    </div>

  );
}

export default App;
