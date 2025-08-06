function Welcome() {
  return <h1>Hello, React!</h1>;
}

ReactDOM.render(<Welcome />, document.getElementById('root'));
const todos = [
  { id: 1, title: "Learn React", completed: false },
  { id: 2, title: "Build a ToDo App", completed: false },
];
function createToDoComponent(todo) {
  const li = document.createElement("li");
  li.textContent = todo.title;
  li.className = todo.completed ? "completed" : "";
  return li;
}
