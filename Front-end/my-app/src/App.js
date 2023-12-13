
import './App.css';
import Homepage from './homepage/homepage';
import { BrowserRouter, Routes, Route} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Homepage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
