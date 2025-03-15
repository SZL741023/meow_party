import { createHashRouter } from "react-router-dom";
import { Home, ProductPage, Cart, ProductsList } from "../pages";

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
        path: "productslist",
        element: <ProductsList />,
      },
      {
        path: "product",
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
