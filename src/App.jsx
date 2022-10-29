import "./App.css";
import Forms from "./Components/Forms";
import Destiny from "./Components/Destiny";
import Header from "./Components/Header";

function App() {
  return (
    <div>
      <Header />
      <div className="flex flex-wrap justify-center items-center gap-3 m-11 ">
        <Forms />
        <Destiny />
      </div>
    </div>
  );
}

export default App;
