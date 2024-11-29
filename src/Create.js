import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Lucacel");
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const todo = { title, body, author };

    setIsPending(true);

    fetch(`http://localhost:8000/blogs`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(todo),
    }).then(() => {
      console.log("new todo added");
      setIsPending(false);
      navigate("/");
    });
  };

  return (
    <div className="create">
      <h2>Add a new todo</h2>
      <form onSubmit={handleSubmit}>
        <label>Todo title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <label htmlFor="">Todo body:</label>
        <textarea
          value={body}
          required
          onChange={(e) => setBody(e.target.value)}
        ></textarea>

        <label>todo author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="Lucacel">Lucacel</option>
          <option value="Andrei">Andrei</option>
          <option value="Mihai">Mihai</option>
          <option value="Vlad">Vlad</option>
        </select>

        {!isPending && <button>Add todo</button>}
        {isPending && <button disabled>Adding todo...</button>}
        <p>{title}</p>
        <p>{body}</p>
        <p>{author}</p>
      </form>
    </div>
  );
};

export default Create;
