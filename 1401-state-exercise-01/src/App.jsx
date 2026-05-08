import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  const [greeting, setGreeting] = useState("Welcome!");
  const [isActive, setIsActive] = useState("");

  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const [isActivated, setIsActivated] = useState(false);

  function handleToggle() {
    setIsActive((prev) => !prev);
  }

  function activateHandler() {
    setIsAlertVisible(true);
    handleToggle();
  }

  function confirmHandler() {
    setIsActivated(true);
    setIsAlertVisible(false);
  }

  function cancelHandler() {
    setIsAlertVisible(false);
    setIsActivated(false);
  }

  function updateGreeting() {
    const currentTime = new Date().getSeconds();

    setGreeting(currentTime);
  }

  return (
    <>
      {!isActivated && !isAlertVisible && (
        <button onClick={activateHandler} class="action-btn">
          Activate
        </button>
      )}

      {isAlertVisible && (
        <div className="alert-box">
          <h2>Warning~</h2>
          <p>Are you sure ?</p>
          <button onClick={confirmHandler} className="confirm-btn">
            Confirm
          </button>
          <button onClick={cancelHandler} className="cancel-btn">
            Cancel
          </button>
        </div>
      )}

      {isActivated && <h3 className="success-message">Mode activated</h3>}
    </>
  );
}

export default App;
