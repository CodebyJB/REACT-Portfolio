import { Link } from "react-router-dom";

function Logo() {
  return (
    <div>
      Logo
      <Link to="/">
        <img src="../img/Logo.png" alt="Logo"></img>
      </Link>
    </div>
  );
}

export default Logo;
