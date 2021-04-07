import { IconContext } from "react-icons";
import {
  DiAngularSimple,
  DiReact,
  DiJava,
  DiMongodb,
  DiDatabase,
  DiHtml5,
  DiJsBadge,
  DiNodejs,
  DiCss3,
  DiDocker,
  DiGithubBadge,
  DiAws,
  DiSass
} from "react-icons/di";

import { FaLinkedin } from "react-icons/fa";

function TechSkills() {
  return (
    <IconContext.Provider value={{ size: "2rem" }}>
      <div className="App">
        <DiReact color="#00ceff"></DiReact>
        <DiAngularSimple color="#da1111e0"></DiAngularSimple>
        <DiHtml5 color="orange"></DiHtml5>
        <DiCss3 color="#0a7df0"></DiCss3>
        <DiJsBadge color="rgb(214 200 17)"></DiJsBadge>
        <DiJava color="#a56e06"></DiJava>
        <DiNodejs color="#0da380"></DiNodejs>
        <DiMongodb color="green"></DiMongodb>
        <DiDatabase color="grey"></DiDatabase>
        <DiDocker color="rgb(28 135 187)"></DiDocker>
        <DiAws></DiAws>
        <DiSass></DiSass>
        {/* Socila media and git icons */}
        <DiGithubBadge></DiGithubBadge>
        <FaLinkedin color="#0094ff"></FaLinkedin>
      </div>
    </IconContext.Provider>
  );
}

export default TechSkills;
