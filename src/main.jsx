import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import {
  createBrowserRouter,
  RouterProvider,
  useParams,
} from "react-router-dom";
import ToDoList from "./TasksList/to-do-list.jsx";
import Pagination from "./TasksList/pagination.jsx";
import SearchAndFilter from "./TasksList/product-search-filter.jsx";
import ToggleSwitch from "./TasksList/toggle-switch.jsx";
import DropdownSelector from "./TasksList/drop-down-selection.jsx";

const DynamicTask = () => {
  const { taskName } = useParams();
  return taskName === "toDo" ? (
    <ToDoList />
  ) : taskName === "pagination" ? (
    <Pagination />
  ) : taskName === "search-filter" ? (
    <SearchAndFilter/>
  ) : taskName === "toggle-switch" ? (
    <ToggleSwitch/>
  ) : taskName === "drop-down-selection" ? (
    <DropdownSelector/>
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
