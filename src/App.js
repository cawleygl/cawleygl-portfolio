import Navigation from "./components/Navigation"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Portfolio from "./pages/Portfolio"
import './App.css';

import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route exact path="/" component={About} />
        <Route export path="/contact" component={Contact} />
        <Route export path="/portfolio" component={Portfolio} />
      </Switch>
    </>
  );
}

export default App;
