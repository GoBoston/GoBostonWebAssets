import PropTypes from "prop-types";

const Wrapper = ({ children }) => {
  return <>{children}</>;
};

// Prop type validation
Wrapper.propTypes = {
  children: PropTypes.node
};

export default Wrapper;
