import logo from "./logo.svg";
import "./App.css";
import "./Components/Profile/Address";
import "./Components/Profile/FullName";
import "./Components/Profile/Photo";
import Photo from "./Components/Profile/Photo";
import Address from "./Components/Profile/Address";
import FullName from "./Components/Profile/FullName";

function App() {
  return (
    <div className="App">
      <Photo />
      <FullName />
      <Address />
    </div>
  );
}

export default App;
