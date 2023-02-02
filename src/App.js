import './App.css';
import Social from './Social';
import bgMTop from "./images/bg-pattern-top-mobile.svg"
import bgDTop from "./images/bg-pattern-top-desktop.svg"
import bgMBottom from  "./images/bg-pattern-bottom-mobile.svg"
import bgDBottom from  "./images/bg-pattern-bottom-desktop.svg"

function App() {
  return (
    <div className="">
      <img src={bgMTop} alt="" className="block absolute md:hidden" />
      <img src={bgDTop} alt="" className="hidden absolute md:block"/>
      <Social/> 
    </div>
  );
}

export default App;
