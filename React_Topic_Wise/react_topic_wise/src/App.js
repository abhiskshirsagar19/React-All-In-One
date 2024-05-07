import "./App.css";
import Democomponent from "./Democomponent";
import Arraysmap from "./arraysmap";
import BootstrapTabel from "./BootstrapTabel";
import ReusableButton from "./ReusableButton";

function App() {
  const handleClick = () => {
    console.log("Button From App Clicked");
  };
  return (
    <div className="App">
      <Arraysmap />
      <BootstrapTabel />
      <ReusableButton text="Button From App" onClick={handleClick}/>
    </div>
  );
}

export default App;
