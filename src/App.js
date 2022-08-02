import "./App.css";
import logo from "./logo.jpg";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo img-fluid" alt="logo"></img>
      </header>
      <main>
        <Dictionary defaultKeyword="play" />
      </main>
      <footer className="App-footer">
        <small>Coded by Daria</small>
      </footer>
    </div>
  );
}

export default App;
