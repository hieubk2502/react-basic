import PropTypes from "prop-types";

function TabButton(props) {
  return (
    <>
      <li>
        <button>{props.children}</button>
      </li>
    </>
  );
}

TabButton.PropTypes = {
  children: PropTypes.string,
};

export default TabButton;
