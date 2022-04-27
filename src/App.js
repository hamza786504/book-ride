import './App.css';
import { Route , Routes } from "react-router-dom";
import Home from './Components/Home';
import NotFound from "./Components/NotFound";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
