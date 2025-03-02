import { createHashRouter } from "react-router-dom";
import { Home, ProductPage, Cart } from "../pages";
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
        element: <Cart />,
      },
    ],
  },
];

const router = createHashRouter(routes);

export default router;
