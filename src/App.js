import Nav from "./Components/Nav"
import Home from "./Components/Home"
import "./App.css"

function App() {
  return (
    <div className="App">
      <Nav/>

      <Home exact path="/" />

    </div>
  );
}

export default App;
