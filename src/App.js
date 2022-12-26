import "./App.css";
import About from "./components/About";
import Header from "./components/Header";
import Contact from "./components/Contact";
import image from "./components/my image.jpeg";
import { Fragment } from "react";

function App() {
  const profile = {
    fullName: "Fayrouz Jadla",
    profession: "Web developpper &amp; Mechanial Engineer",

    bio: "Engineers like to solve problems If there are no problems handily available they will create their own problems",
  };
  //console.log(profile.fullName);
  const showUsername = (name) => alert(`user name: ${name}`);
  return (
    <Fragment>
      <Header name={profile.fullName} show={showUsername}>
        <img
          src={image}
          alt="image"
          style={{ height: "150px", width: "120px", borderRadius: "50%" }}
        />
      </Header>

      <About bio={profile.bio} profession={profile.profession} />
      <Contact />
    </Fragment>
  );
}

export default App;
