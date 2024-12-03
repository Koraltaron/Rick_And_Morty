import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "",
          element: <HomePage />,
          index: true,
          loader: () => {
            return fetch("https://rickandmortyapi.com/api/character")
          }
        },
        {
          path: "login",
          element: <LoginPage />,
        }
      ]
    }
  ]
);

export default router;