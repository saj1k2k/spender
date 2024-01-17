import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout.tsx";
import ErrorPage from "../pages/ErrorPage.tsx";
import Home from "../pages/Home.tsx";
import Transactions, {
  transactionAction,
  transactionLoader,
} from "../pages/Transactions.tsx";
import Catigories, {
  categoriesAction,
  categoryLoader,
} from "../pages/Catigories.tsx";
import Auth from "../pages/Auth.tsx";
import ProtectedRoute from "../components/ProtectedRoute.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "transactions",
        loader: transactionLoader,
        action: transactionAction,
        element: (
          <ProtectedRoute>
            <Transactions />
          </ProtectedRoute>
        ),
      },
      {
        path: "categories",
        action: categoriesAction,
        loader: categoryLoader,
        element: (
          <ProtectedRoute>
            <Catigories />
          </ProtectedRoute>
        ),
      },
      {
        path: "auth",
        element: <Auth />,
      },
    ],
  },
]);
