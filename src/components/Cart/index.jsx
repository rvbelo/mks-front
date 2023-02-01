import * as Styled from "./styled";
import { ShoppingCart } from "@styled-icons/typicons/ShoppingCart";
import { useSelector } from "react-redux";

const Cart = (props) => {
  const cart = useSelector((state) => state.carts.products || 0);
  const context = useSelector((state) => state);

  return (
    <Styled.Box onClick={props.onClick}>
      <ShoppingCart size="19px" className="icon" />
      <Styled.Value>{cart.length}</Styled.Value>
    </Styled.Box>
  );
};

export default Cart;
