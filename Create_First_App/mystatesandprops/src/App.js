import "./App.css";
import User from "./user.jsx";
function App() {
  const users = [
    { name: "Abc", age: 21, email: "abc@gmail" },
    { name: "Bcd", age: 23, email: "Bcd@gmail" },
    { name: "Cde", age: 24, email: "Cde@gmail" },
  ];
  return (
    <div className="App">
      {/* <User name="Abhishek " /> */}

      {users.map((user, index) => (
        <User key={index} name={user.name} age={user.age} email={user.email} />
      ))}
    </div>
  );
}

export default App;
