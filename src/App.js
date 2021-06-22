import ironlogo from "./assets/images/ironhack-logo.svg";
import menuimg from "./assets/images/menu-top.svg";
import backLogo from "./assets/images/react-logo.svg";
import icon1 from "./assets/images/icon1.png";
import icon2 from "./assets/images/icon2.png";
import icon3 from "./assets/images/icon3.png";
import icon4 from "./assets/images/icon4.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

function App() {
  return (
    <div>
      <div className="container1">
        <header className="navbar">
          <img src={ironlogo} />
          <img src={menuimg} />
        </header>
        <div className="d-flex justify-content-center ">
          <div className="text-react align-items-center  ">
            <h1 className="title">Say hello to ReactJS</h1>

            <p className="intro-p">
              You will learn how to use the most popular frontend library, and
              become a super Ninja developer.
            </p>

            <p className="text-awesome ">Awesome!</p>
          </div>
          <div className="background-images col md-2 ">
            <img src={backLogo} className="img-g" />
            <img src={backLogo} className="img-m " />
            <img src={backLogo} className="img-m " />

            <img src={backLogo} className="img-p" />
            <img src={backLogo} className="img-p" />
            <img src={backLogo} className="img-p" />
          </div>
        </div>
      </div>

      <div className="container2">
        <div className="row justify-content-center">
          <div className="col md-3 text-icon">
            <img src={icon1} />
            <h2>Declarative</h2>
            <p>React makes it painless to create interactive UIs.</p>
          </div>
          <div className="col md-3 text-icon">
            <img src={icon2} />
            <h2>Components</h2>
            <p>Build encapsulated components that manage their state.</p>
          </div>
          <div className="col md-3 text-icon">
            <img src={icon3} />
            <h2>Single-Way</h2>
            <p>A set of immutable values are passed to the component's.</p>
          </div>
          <div className="col md-3 text-icon">
            <img src={icon4} />
            <h2>JSX</h2>
            <p>Statically-typed, designed to run on modern browsers.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
