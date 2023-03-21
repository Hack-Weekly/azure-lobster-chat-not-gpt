import { HashRouter, Route, Routes } from "react-router-dom";
import { Landing } from "./pages/Landing";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route element={<Landing />} path="/" />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
