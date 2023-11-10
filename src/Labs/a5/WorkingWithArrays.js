import { useState } from "react";

function WorkingWithArrays() {
    const API = "http://localhost:4000/a5/todos";

    const [todo, setTodo] = useState({
        id: 1,
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-09-09",
        completed: false,
    });


    return (
        <div>
            <h3>Working with Arrays</h3>
            <label for="id">ID</label>
            <input
                id="id"
                value={todo.id}
                onChange={(e) => setTodo({
                    ...todo, id: e.target.value
                })}
                className="form-control mb-2"
                type="number"
            />
            <label for="title">Title</label>
            <input
                id="title"
                value={todo.title}
                onChange={(e) => setTodo({
                    ...todo, title: e.target.value
                })}
                className="form-control mb-2"
                type="text"
            />
            <a
                href={`${API}/${todo.id}/completed/${todo.completed}`}
                className="btn btn-primary me-2 float-end"
            >
                Update Completed
            </a>
            <input
                onClick={() => {
                    var newCompleted = !todo.completed
                    setTodo({
                        ...todo,
                        completed: newCompleted
                    })
                }}
                checked={todo.completed}
                className="form-check-input"
                id="completed"
                type="checkbox" />
            <label className="form-check-label" for="completed">
                Completed?
            </label>
            <br />
            <br />
            <a
                href={`${API}/${todo.id}/description/${todo.description}`}
                className="btn btn-primary me-2 float-end"
            >
                Update Description
            </a>
            <input
                onChange={(e) => setTodo({
                    ...todo,
                    description: e.target.value
                })}
                value={todo.description}
                className="form-control mb-2 w-75"
                type="text" />

            <br />
            <h3>Updating an Item in an Array</h3>
            <a
                href={`${API}/${todo.id}/title/${todo.title}`}
                className="btn btn-primary me-2" >
                Update Title to {todo.title}
            </a>
            <br />
            <h3>Deleting from an Array</h3>
            <a href={`${API}/${todo.id}/delete`}
                className="btn btn-primary me-2">
                Delete Todo with ID = {todo.id}
            </a>
            <br />
            <h4>Retrieving Arrays</h4>
            <a href={API} className="btn btn-primary me-2">
                Get Todos
            </a>
            <br />
            <h4>Retrieving an Item from an Array by ID</h4>
            <label for="id2">ID</label>
            <input
                id="id2"
                className="form-control"
                value={todo.id}
                onChange={(e) => setTodo({
                    ...todo,
                    id: e.target.value
                })} />
            <a href={`${API}/${todo.id}`}
                className="btn btn-primary me-2">
                Get Todo by ID
            </a>
            <br />
            <h3>Filtering Array Items</h3>
            <a href={`${API}?completed=true`}
                className="btn btn-primary me-2" >
                Get Completed Todos
            </a>
            <br />
            <h4>Creating new Items in an Array</h4>
            <a href={`${API}/create`}
                className="btn btn-primary me-2">
                Create Todo
            </a>

        </div>
    );
}
export default WorkingWithArrays;