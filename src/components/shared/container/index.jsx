import * as classes from "./Container.module.css";

import PropTypes from "prop-types";

const ALLOWED_CONTAINER_TYPES = ["div", "section", "main"];

const Container = ({ type = "div", id, className = "", children }) => {
  if (!ALLOWED_CONTAINER_TYPES.includes(type)) {
    throw new Error(
      `Invalid Container 'type' specified. Allowed types: ${ALLOWED_CONTAINER_TYPES.join(
        ", "
      )}`
    );
  }

  const Component = type;

  return (
    <Component id={id} className={`${className}`}>
      {children}
    </Component>
  );
};

Container.propTypes = {
  type: PropTypes.oneOf(ALLOWED_CONTAINER_TYPES),
  id: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Container;
