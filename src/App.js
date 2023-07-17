import "./index.css";
import Background from "./components/background";
import YoutubeVideo from "./components/youtube";
// import GoogleDriveUploader from "./components/driveUploader";

function App() {
  return (
    <div className="App">
      <div className="Card">
        <h3>Hello</h3>
        <YoutubeVideo />
        {/* <GoogleDriveUploader /> */}
      </div>
      <Background />
    </div>
  );
}

export default App;