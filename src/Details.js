import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useState } from "react";
import { useEffect } from "react";

const Details = () => {
  const { id } = useParams();
  const {
    data: todo,
    error,
    isPending,
  } = useFetch("http://localhost:8000/blogs/" + id);

  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (todo) {
      setIsChecked(todo.completed);
    }
  }, [todo]);

  const handleClick = () => {
    fetch(`http://localhost:8000/blogs/` + todo.id, {
      method: "DELETE",
    }).then(() => {
      navigate("/");
    });
  };

  const handleCheckboxChange = () => {
    setIsChecked((prevState) => !prevState);

    // Send the update to the server if necessary
    fetch(`http://localhost:8000/blogs/` + todo.id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...todo, completed: !isChecked }),
    })
      .then((response) => response.json())
      .then((updatedTodo) => {
        console.log("Todo updated:", updatedTodo);
      });
  };

  return (
    <div className="todo-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {todo && (
        <article>
          <h2>{todo.tilte}</h2>
          <p>Written by {todo.author}</p>
          <div>{todo.body}</div>
          <div>
            <label htmlFor="">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              Mark as completed
            </label>
          </div>
          <button onClick={handleClick}>delete</button>
        </article>
      )}
    </div>
  );
};

export default Details;
