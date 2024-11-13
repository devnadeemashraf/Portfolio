import * as classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={`${classes["header"]}`}>
      <span className={`${classes["header--brand"]}`}>NA</span>
    </header>
  );
};

export default Header;
