import React, { useEffect, useState } from "react";

const ToDoList = () => {
  const [toDoList, setToDoList] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const [indexToBeEdited, setIndexToBeEdited] = useState(null);
  const [buttonToggle, setButtonToggle] = useState(true);

  const addToTaskList = () => {
    if (title && description) {
      if (indexToBeEdited === null) {
        setToDoList([
          ...toDoList,
          { title, description, date: new Date().toISOString().split("T")[0] },
        ]);
        setError("");
      } else {
        const updatedTasks = toDoList.map((value, index) => {
          return index === indexToBeEdited
            ? {
                ...value,
                title,
                description,
                date: new Date().toISOString().split("T")[0],
              }
            : value;
        });
        setToDoList(updatedTasks);
        setButtonToggle(true);
      }
    } else {
      setError("Please add to-do lists before clicking Add button");
    }
    setTitle("");
    setDescription("");
  };

  useEffect(() => {
    console.log(toDoList);
  }, [toDoList]);

  const statusHandler = (index, newStatus) => {
    const updatedTasks = toDoList.map((value, i) => {
      return i === index ? { ...value, status: newStatus } : value;
    });
    setToDoList(updatedTasks);
  };

  const handleDelete = (index) => {
    const updatedTasks = toDoList.filter((value, i) => {
      return index !== i;
    });
    setToDoList(updatedTasks);
  };

  const handleEdit = (index) => {
    const task = toDoList[index];
    setTitle(task.title);
    setDescription(task.description);
    setIndexToBeEdited(index);
    setButtonToggle(false);
  };

  return (
    <div>
      <style>
        {`
              table,th,td {
                border:1px solid black;
                border-collapse: collapse;
                padding: 10px;
              }
              input[type="text"] {
                padding: 10px;
              }
            `}
      </style>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "10px",
        }}
      >
        <label htmlFor="title" style={{ marginRight: "10px" }}>
          Title
        </label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "10px",
        }}
      >
        <label htmlFor="description" style={{ marginRight: "10px" }}>
          Description
        </label>
        <input
          id="description"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "10px",
        }}
      >
        <button onClick={addToTaskList} style={{ padding: "8px 16px" }}>
          {buttonToggle ? "Add" : "Update"}
        </button>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <table style={{ marginTop: "10px" }}>
          <thead>
            <tr>
              <th>Index</th>
              <th>Title</th>
              <th>Description</th>
              <th>Date</th>
              <th>Status</th>
              <th>To Delete</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {toDoList.length > 0 &&
              toDoList.map((value, index) => {
                if (!value.title.trim() || !value.title.trim()) {
                  return null;
                }
                return (
                  <tr key={index}>
                    <td>{index}</td>
                    <td>{value.title}</td>
                    <td>{value.description}</td>
                    <td>{value.date}</td>
                    <td>
                      <button
                        style={{
                          background:
                            value.status === "done" ? "green" : "initial",
                        }}
                        onClick={() => statusHandler(index, "done")}
                      >
                        ✔
                      </button>
                      <button
                        style={{
                          background:
                            value.status === "notDone" ? "red" : "initial",
                        }}
                        onClick={() => statusHandler(index, "notDone")}
                      >
                        ✖
                      </button>
                    </td>
                    <td>
                      <button onClick={() => handleDelete(index)}>🗑️</button>
                    </td>
                    <td>
                      <button onClick={() => handleEdit(index)}>✏</button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
      <h1 style={{ textAlign: "center", color: "red" }}>{error && error}</h1>
    </div>
  );
};

export default ToDoList;
