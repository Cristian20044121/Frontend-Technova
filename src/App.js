import "./App.css";
import { Header } from "./Components/Header/Header";
import { Main } from "./Components/Main";

function App() {
  return (
    <div className="App ">
      <div className="md:flex md:gap-5 border ">
        <Header />
        <Main />
      </div>
    </div>
  );
}

export default App;
