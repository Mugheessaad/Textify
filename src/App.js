import './App.css';
import Header from './components/Header';
import Bodyclass from './components/Bodyclass';
import { useState } from 'react';
import BodyFunction from './components/BodyFunction';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link
} from "react-router-dom"; 
function App() {

  const [state,setState] = useState("light");
  return (
    <div className="App">
      <Router>
      <Header state={state} setState={setState}/>
      <Routes>
      <Route path="/" element= { <BodyFunction state={state}/>} />
      <Route path="/about" element={ <About state={state}/>}/>
        </Routes>
      {/* <About/> */}
      {/* <Bodyclass state={state}/> */}
      </Router>
    </div>
  );
}

export default App;
