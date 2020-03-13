import React from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Main from "./components/Main.js"

function App() {
  return (
    <Router>
      <div className="App">
        <div className="Site-content">
              
          
          <Main />
                   
        </div>
      </div>
    </Router>
  );
}

export default App;
