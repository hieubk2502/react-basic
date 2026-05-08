import PropTypes from "prop-types";

function TabButton(props) {
  return (
    <>
      <li>
        <button onClick={handleClick}>{props.children}</button>
      </li>
    </>
  );
}

function handleClick() {
  alert("test");
}

TabButton.PropTypes = {
  children: PropTypes.string,
};

export default TabButton;
