import React, { useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import * as FaIcons from "react-icons/fa";
import * as GiIcons from "react-icons/gi";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { signOutStart } from "../../redux/user/user.actions";
import Dropdown from "../menu-dropdown/menu-dropdown.component";

import {
  HeaderContainer,
  OptionsContainer,
  OptionLink,
  NavItem,
  OptionLogo,
  MenuIcon,
} from "./header.styles";

const Header = ({ currentUser, hidden, signOutStart }) => {
  const [isClicked, setClicked] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClicked(!isClicked);
  const closeMobileMenu = () => setClicked(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <HeaderContainer>
      <OptionLogo to="/" onClick={closeMobileMenu}>
        <GiIcons.GiBowman /> Hire GoT
      </OptionLogo>
      <MenuIcon onClick={handleClick}>
        <i className={isClicked ? <FaIcons.FaTimes /> : <FaIcons.FaBars />}>
          <FaIcons.FaBars />
        </i>
      </MenuIcon>
      <OptionsContainer className={isClicked ? "LinkActive" : ""}>
        <NavItem>
          <OptionLink to="/blogs">BLOGS</OptionLink>
        </NavItem>
        <NavItem onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
          <OptionLink to="/shop" onClick={closeMobileMenu}>
            SHOP
          </OptionLink>
          {dropdown && <Dropdown />}
        </NavItem>
        <NavItem>
          <OptionLink to="/contact">CONTACT</OptionLink>
        </NavItem>
        {currentUser ? (
          <NavItem>
            <OptionLink onClick={signOutStart}>SIGN OUT</OptionLink>
          </NavItem>
        ) : (
          <NavItem>
            <OptionLink to="/signin">SIGN IN</OptionLink>
          </NavItem>
        )}
        <CartIcon />
      </OptionsContainer>
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
