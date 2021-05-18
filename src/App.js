import About from "./pages/About"
import Contact from "./pages/Contact"
import Portfolio from "./pages/Portfolio"
import './App.css';

import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  return (
    <Router>
            <Route exact path="/" component={About} />
            <Route export path="/contact" component={Contact} />
            <Route export path="/portfolio" component={Portfolio} />
</Router>

  );
}

export default App;
