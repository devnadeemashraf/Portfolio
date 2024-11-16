import * as classes from "./Card.module.css";

import Container from "../container";

/**
 * TODO: Add OnMouseHover Effect with a Cursor Following the Mouse Pointer.
 */
const Card = ({ title = null, className = null, children }) => {
  return (
    <Container type="div" className={`${classes["card"]} ${className}`}>
      {title && <h1>Render Title</h1>}
      {children}
    </Container>
  );
};

export default Card;
