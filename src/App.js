import "./App.css";
import Navbar from "./Components/Navbar";
import TextFrom from "./Components/TextFrom";

function App() {
  return (
    <>
      <Navbar title="TextUtils" />
      <div className="container my-3">
        <TextFrom heading="Enter text to analyze" />
      </div>
    </>
  );
}

export default App;
