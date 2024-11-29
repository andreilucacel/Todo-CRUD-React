import { Link } from "react-router-dom";
const BlogList = ({ blogs, title }) => {
  return (
    <div className="todo-list">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="todo-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>Written byt {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
