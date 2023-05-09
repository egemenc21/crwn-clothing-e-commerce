import {Fragment, useContext} from "react"; // to use as a replacement <div></div> but not displaying html element div
import {Outlet, Link} from "react-router-dom"; //Link actually is an anchor tag
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropDown from "../cart-dropdown/cart-dropdown.components";
import {UserContext} from "../../contexts/user.contexts";
import {CartContext} from "../../contexts/cart.contexts";
import {ReactComponent as CrwnLogo} from "../assets/crown.svg";
import {signOutUser} from "../../utils/firebase/firebase.utils";
import "./navigation.styles.scss";

const Navigation = () => {
  const {currentUser} = useContext(UserContext);
  const {stateOfCart} = useContext(CartContext);


  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIcon/>
        </div>
        {stateOfCart && <CartDropDown/>}
      </div>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;
