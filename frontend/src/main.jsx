import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// import swipper
import "swiper/css";

// Import bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

//  Import fonts and icons
import '././assets/css/icofont.min.css';
import '././assets/css/animate.css';
import '././assets/css/style.min.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "./home/Home.jsx";  // <Home /> Permet d'afficher la page d'accueil n'oubliez pas de l'importer

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,  // <App /> permet d'afficher la page d'accueil
    children: [
      {
        path: "/",
        element: <Home />,  // <Home /> permet d'afficher la page d'accueil
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

