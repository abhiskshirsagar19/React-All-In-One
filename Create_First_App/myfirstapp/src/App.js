import "./App.css";
// import Example from "./example";
// import User from "./user";
//import { User } from "./user";
function App() {
  const demo = () => {
    console.log("Hi from Demo.....");
  };
  return (
    <div className="App">
      <h1>Hello Abhishek!!</h1>
      {/* <User />
      <Example /> */}
      <button onClick={demo}>Say Hello In Console</button>
      <button onClick={() => demo()}>Say Hello In Console</button>
    </div>
  );
}

export default App;
