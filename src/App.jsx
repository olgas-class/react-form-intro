import { useEffect, useState } from "react";
import TodosList from "./components/TodosList";
import Alert from "./components/Alert";

function App() {
  const initialTasks = ["Fare la spesa", "Pulire casa", "Fare il bucato"];

  const [newTodo, setNewTodo] = useState("");
  const [todosList, setTodosList] = useState(initialTasks);
  const [filteredList, setFilteredList] = useState(todosList);
  const [error, setError] = useState(false);
  const [search, setSearch] = useState("");

  const gestisciSubmit = (event) => {
    event.preventDefault();
    if (newTodo.trim() !== "") {
      setTodosList([newTodo, ...todosList]);
      setNewTodo("");
    } else {
      setError(true);
    }
  };

  const gestisciDelete = (indexToDelete) => {
    // const copyArray = todosList.toSpliced(index, 1);
    const copyArray = todosList.filter(
      (curTodo, curIndex) => curIndex !== indexToDelete
    );
    setTodosList(copyArray);
  };

  const handleInputChange = (event) => {
    if (error && event.target.value !== "") {
      setError(false);
    }
    setNewTodo(event.target.value);
  };

  useEffect(() => {
    const filteredList = todosList.filter((curTodo) =>
      curTodo.toLowerCase().includes(search.trim().toLowerCase())
    );
    setFilteredList(filteredList);
  }, [search]);

  return (
    <>
      <div className="container">
        <div className="w-75 mx-auto">
          <h2 className="text-center">Le mie todos</h2>

          <form className="d-flex my-4" onSubmit={gestisciSubmit}>
            <input
              value={newTodo}
              onChange={handleInputChange}
              autoComplete="off"
              className="form-control"
              type="text"
              aria-label="Aggiungi un nuovo todo"
            />
            <button className="btn btn-primary">Aggiungi</button>
          </form>
          {error && (
            <Alert content="Nessun valore inserito. Riprova" type="danger" />
          )}

          <div className="my-3">
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              type="search"
              className="form-control"
              aria-label="Cerca Todo"
              placeholder="Cerca ..."
            />
          </div>

          {todosList.length > 0 ? (
            <TodosList
              todos={filteredList}
              deleteTodo={(index) => {
                gestisciDelete(index);
              }}
            />
          ) : (
            <Alert content="Nulla da fare" type="success" />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
