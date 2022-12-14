import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router} from "react-router-dom";
import RotasAnimadas from '../src/routes'


export default function App() {
  return (
    <Router>
      <RotasAnimadas />
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);