import {Fragment} from "react"; // to use as a replacement <div></div> but not displaying html element div
import {Outlet} from "react-router-dom"; //Link actually is an anchor tag
import {useSelector, useDispatch} from "react-redux";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropDown from "../../components/cart-dropdown/cart-dropdown.components";

import {selectCurrentUser} from "../../store/user/user.selector";
import {selectTheStateOfCart} from "../../store/cart/cart.selector";
import {signOutStart} from "../../store/user/user.action";

import {ReactComponent as CrwnLogo} from "../../assets/crown.svg";

import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from "./navigation.styles";


const Navigation = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const stateOfCart = useSelector(selectTheStateOfCart);

  const signOutUser = () => dispatch(signOutStart());

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {stateOfCart && <CartDropDown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;
