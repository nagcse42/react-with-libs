import "./App.css";
import TechSkills from "./components/tech-skills";
import NotificationToast from "./components/notifaction-toast";
import ModelComponent from "./components/model-component";
import ToolTipComponent from "./components/tool-tip-component";
import CountUpNums from "./components/count-up";

function App() {
  return (
    <div>
      <TechSkills></TechSkills>
      <NotificationToast></NotificationToast>
      <ModelComponent></ModelComponent>
      <ToolTipComponent></ToolTipComponent>
      <CountUpNums></CountUpNums>
    </div>
  );
}

export default App;
