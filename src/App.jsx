import { useState } from "react";

function App() {
  const initialTasks = ["Fare la spesa", "Pulire casa", "Fare il bucato"];

  const [newTodo, setNewTodo] = useState("");
  const [todosList, setTodosList] = useState(initialTasks);

  const gestisciSubmit = (event) => {
    event.preventDefault();
    if (newTodo.trim() !== "") {
      setTodosList([newTodo, ...todosList]);
      setNewTodo("");
    }
  };

  const deleteTodo = (indexToDelete) => {
    // const copyArray = todosList.toSpliced(index, 1);
    const copyArray = todosList.filter(
      (curTodo, curIndex) => curIndex !== indexToDelete
    );
    setTodosList(copyArray);
  };

  return (
    <>
      <div className="container">
        <div className="w-75 mx-auto">
          <h2 className="text-center">Le mie todos</h2>

          <form className="d-flex my-4" onSubmit={gestisciSubmit}>
            <input
              value={newTodo}
              onChange={(event) => setNewTodo(event.target.value)}
              autoComplete="off"
              className="form-control"
              type="text"
              aria-label="Aggiungi un nuovo todo"
            />
            <button className="btn btn-primary">Aggiungi</button>
          </form>

          {todosList.length > 0 ? (
            <ul className="list-group">
              {todosList.map((curTask, index) => (
                <li
                  key={index}
                  className="list-group-item d-flex justify-content-between"
                >
                  <span> {curTask}</span>

                  <button
                    className="btn btn-outline btn-danger"
                    onClick={() => {
                      deleteTodo(index);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-trash"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                      <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                    </svg>
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p>Nulla da fare</p>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
