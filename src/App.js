import Description from "./components/Description";
import Header from "./components/Header";
import Inputs from "./components/Inputs"
import Validation from "./components/Validation";

import './index.css'
function App() {
  
  return (
    <div className="App-container">
      <Description/>
      <Header/>
      <Inputs />
    </div>
  );
}

export default App;
