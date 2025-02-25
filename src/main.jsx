import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ToDoList from "./TasksList/to-do-list.jsx";

const routers = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/tasks/:taskName",
      element: <ToDoList />,
    },
  ]
);
createRoot(document.getElementById("root")).render(
  <RouterProvider router={routers} />
);
