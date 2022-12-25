import "./App.css";
import About from "./components/About";
import Header from "./components/Header";
import { Fragment } from "react";
import Contact from "./components/Contact";

function App() {
  const profile = {
    fullName: "Fayrouz Jadla",
    profession: "Web developpper &amp; Mechanial Engineer",

    bio: "Engineers like to solve problems If there are no problems handily available they will create their own problems",
  };
  //console.log(profile.fullName);
  return (
    <Fragment>
      <Header name={profile.fullName} />
      <About bio={profile.bio} profession={profile.profession} />
      <Contact />
    </Fragment>
  );
}

export default App;
