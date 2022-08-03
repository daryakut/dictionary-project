import "./App.css";
import logo5 from "./logo5.svg";
import Dictionary from "./Dictionary";
import { SocialIcon } from "react-social-icons";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo5} className="App-logo img-fluid" alt="logo"></img>
      </header>
      <main>
        <Dictionary defaultKeyword="play" />
      </main>
      <footer className="App-footer">
        <SocialIcon
          url="https://github.com/daryakut/dictionary-project"
          bgColor="#24292E"
          target="_blank"
          className="mr-4"
          network="github"
        />
      </footer>
    </div>
  );
}

export default App;
