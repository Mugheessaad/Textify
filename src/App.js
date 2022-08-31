import './App.css';
import Header from './components/Header';
import Bodyclass from './components/Bodyclass';
import { useState } from 'react';
import BodyFunction from './components/BodyFunction';
function App() {

  const [state,setState] = useState("light");
  return (
    <div className="App">
      <Header state={state} setState={setState}/>
      <BodyFunction state={state}/>
      {/* <Bodyclass state={state}/> */}

      {/* <Message /> */}
      {/* <Greet /> */}
      {/* <Count /> */}
      {/* <Greet name="Mughees" age="23" /> */}
      {/* <Greet name="Saad" age="21" /> */}
      {/* <Greet name="rehan" age="13" /> */}
      {/* <Welcome name="Mughees" age="23" /> */}
      {/* <Welcome name="Saad" age="21" /> */}
      {/* <Welcome name="rehan" age="13" /> */}
    </div>
  );
}

export default App;
