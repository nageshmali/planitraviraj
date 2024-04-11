import Aboutus from "./Components/Aboutus";
import Heropage from "./Components/Heropage";
import LoggedIn from "./Components/LoggedIn";
import Schedule from "./Components/Schedule";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Heropage/>}/>
      <Route path="/loggedin" element={<LoggedIn/>}/>
      <Route path="/schedule" element={<Schedule/>}/>
      <Route path="/about" element={<Aboutus/>}/>

    </Routes>
  );
}

export default App;
