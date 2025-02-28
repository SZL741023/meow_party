import { createHashRouter } from "react-router-dom";
import { Home, ProductPage, CartTest } from "../pages";
import App from "../App.jsx";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "products",
        element: <ProductPage />,
      },
      {
        path: "cart",
        element: <CartTest />,
      },
    ],
  },
];

const router = createHashRouter(routes);

export default router;
