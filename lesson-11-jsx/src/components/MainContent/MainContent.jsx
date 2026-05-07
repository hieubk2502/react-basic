import PropTypes from "prop-types";

MainContent.PropTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string,
};

function MainContent(props) {
  const img = props.img;
  const title = props.title;
  const desc = props.desc;
  return (
    <>
      <li>
        <img src={img} alt={title} />
        <h2>{title}</h2>
        <p>{desc}</p>
      </li>
    </>
  );
}

export default MainContent;
