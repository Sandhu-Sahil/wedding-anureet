import "./index.css";
import Background from "./components/background";
import YoutubeVideo from "./components/youtube";

function App() {
  return (
    <div className="App">
      <div className="Card">
        <h3>Hello</h3>
        <YoutubeVideo />
      </div>
      <Background />
    </div>
  );
}

export default App;