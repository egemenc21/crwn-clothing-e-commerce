import {Fragment, useContext} from "react"; // to use as a replacement <div></div> but not displaying html element div
import {Outlet} from "react-router-dom"; //Link actually is an anchor tag
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropDown from "../../components/cart-dropdown/cart-dropdown.components";
import {UserContext} from "../../contexts/user.contexts";
import {CartContext} from "../../contexts/cart.contexts";
import {ReactComponent as CrwnLogo} from "../../assets/crown.svg";
import {signOutUser} from "../../utils/firebase/firebase.utils";
import {NavigationContainer,LogoContainer,NavLinks,NavLink} from "./navigation.styles";

const Navigation = () => {
  const {currentUser} = useContext(UserContext);
  const {stateOfCart} = useContext(CartContext);


  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">
            SHOP
          </NavLink>
          {currentUser ? (
            <NavLink as='span' onClick={signOutUser}> 
            {/* changing it from link to span */}
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">
              SIGN IN
            </NavLink>
          )}
          <CartIcon/>
        </NavLinks>
        {stateOfCart && <CartDropDown/>}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;
