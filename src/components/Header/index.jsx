import { useState } from "react";
import Cart from "../Cart";
import MenuCart from "../MenuCart";
import Logo from "./logo";
import * as Styled from "./styled";

const Header = () => {
  const [showCart, setShowCart] = useState(false);

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <Styled.Header>
      <Styled.Container>
        <Logo />
        <Cart onClick={toggleCart} />
        <MenuCart show={showCart} />
      </Styled.Container>
      <MenuCart onClose={() => setShowCart(false)} show={showCart} />
    </Styled.Header>
  );
};

export default Header;
