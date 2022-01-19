import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//component
import Home from "./view/home/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/maskurnia">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
