import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import { Header } from "./Header";
import { ProductsPage } from "./ProductsPage";
import { SignupPage } from "./SignupPage";
import { LoginPage } from "./LoginPage";
import { Footer } from "./Footer";
import {ProductsNewPage} from './ProductsNewPage'
import { ProductsShowPage } from "./ProductsShowPage";

const router = createBrowserRouter([
  {
    element: (
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    ),
    children: [
      {
        path: "/",
        element: <ProductsPage />,
      },
      {
        path: "/signup",
        element: <SignupPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/products/new",
        element: <ProductsNewPage />
      },
      {
        path : '/products/:id',
        element: <ProductsShowPage />,
        loader: ({ params }) => axios.get(`http://localhost:3000/products/${params.id}.json`).then((response) => response.data),
      },
      ],
    },
  ]);


function App() {
  return <RouterProvider router={router} />;
}

export default App;