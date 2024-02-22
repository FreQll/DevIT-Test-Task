import PropTypes from "prop-types";
import "./index.css";

const List = ({ list }) => {
  return (
    <ul className="list">
      {list.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
};

List.propTypes = {
  list: PropTypes.array.isRequired,
};

export default List;
