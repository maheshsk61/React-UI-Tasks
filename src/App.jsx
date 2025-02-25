import { Link } from "react-router-dom";

const App = () => {
  const tasksList = ["toDo", "pagination"];
  return (
    <>
      <h1>List of Tasks</h1>
      {tasksList.map((tasklist, index) => {
        return (
          <div key={index}>
            <Link to={`/tasks/${tasklist}`}>
              {index + 1}. {tasklist}
            </Link>
          </div>
        );
      })}
    </>
  );
};
export default App;
