import {Fragment} from "react"; // to use as a replacement <div></div> but not displaying html element div
import {Outlet, Link} from "react-router-dom"; //Link actually is an anchor tag
import { ReactComponent as CrwnLogo } from "../assets/crown.svg";
import './navigation.styles.scss'

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo"/>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/auth">
            SignIn
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;
