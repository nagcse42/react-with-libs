import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/home.component";
import TechSkills from "./components/tech-skills";
import NotificationToast from "./components/notifaction-toast";
import ModelComponent from "./components/model-component";
import ToolTipComponent from "./components/tool-tip-component";
import CountUpNums from "./components/count-up";
import CreditCardComponent from "./components/credit-card-component";
import DatePickerComponent from "./components/date-picker.component";

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/tech-skills">Tech Skills</Link>
          </li>
          <li>
            <Link to="/notification-toast">Notification Toast</Link>
          </li>
          <li>
            <Link to="/model">Model</Link>
          </li>
          <li>
            <Link to="/tool-tip">Tool Tip</Link>
          </li>
          <li>
            <Link to="/count-up">Count Up</Link>
          </li>
          <li>
            <Link to="/credit-card">Credit Card</Link>
          </li>
          <li>
            <Link to="/date-picker">Date Picker</Link>
          </li>
        </ul>
        <hr />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/tech-skills">
            {" "}
            <TechSkills />
          </Route>
          <Route path="/notification-toast">
            {" "}
            <NotificationToast />
          </Route>
          <Route path="/model">
            {" "}
            <ModelComponent />
          </Route>
          <Route path="/tool-tip">
            {" "}
            <ToolTipComponent />
          </Route>
          <Route path="/count-up">
            {" "}
            <CountUpNums />
          </Route>
          <Route path="/credit-card">
            {" "}
            <CreditCardComponent />
          </Route>
          <Route path="/date-picker">
            {" "}
            <DatePickerComponent />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
