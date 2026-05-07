import logo from "../../assets/react.svg";
import "./Header.css";

let today = new Date().toLocaleDateString();
let time = new Date().toLocaleTimeString();

const welcome = ["Welcome 1", "Welcome 2", "WelCome 3"];

function randomTitle() {
  return Math.floor(Math.random() * welcome.length);
}

function Header() {
  const title = welcome[randomTitle()];

  return (
    <>
      <header>
        <img src={logo} alt="" />
        <h1>{title}</h1>
        <p>
          Today is <strong>{today}</strong>. Current time{" "}
          <strong>{time}</strong>
        </p>
      </header>
    </>
  );
}

export default Header;
