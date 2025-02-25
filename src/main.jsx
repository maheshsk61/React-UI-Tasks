import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import {
  createBrowserRouter,
  RouterProvider,
  useParams,
} from "react-router-dom";
import ToDoList from "./TasksList/to-do-list.jsx";
import Pagination from "./TasksList/pagination.jsx";

const DynamicTask = () => {
  const { taskName } = useParams();
  return taskName === "toDo" ? (
    <ToDoList />
  ) : taskName === "pagination" ? (
    <Pagination />
  ) : null;
};

const routers = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/tasks/:taskName",
    element: <DynamicTask />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={routers} />
);
