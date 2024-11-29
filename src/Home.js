import List from "./List";
import useFetch from "./useFetch";
const Home = () => {
  const { data: todo, isPending } = useFetch(`http://localhost:8000/blogs`);

  return (
    <div className="Home">
      {isPending && <div>Loading...</div>}
      {todo && <List blogs={todo} title="List" />}
    </div>
  );
};
export default Home;
