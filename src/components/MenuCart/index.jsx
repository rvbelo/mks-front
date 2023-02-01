import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import * as Styled from "./styled";
import { CloseCircle } from "@styled-icons/ionicons-sharp/CloseCircle";
import ProductCart from "../ProductCart";
import { useSelector } from "react-redux";

const MenuCart = ({ show, onClose, data }) => {
  const [isBrowser, setIsBrowser] = useState(false);
  const products = useSelector((state) => state.carts.products);

  const priceFinaly = products.reduce(function(accumulator,object){
    return accumulator + object.price*object.quantity
  },0);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleCloseClick = () => {
    onClose();
  };

  const modalContent = show ? (
    <Styled.StyledModalOverlay>
      <Styled.StyledModal>
        <Styled.StyledModalHeader>
          <Styled.Title>
            Carrinho <br /> de compras
          </Styled.Title>
          <Styled.CloseIcon
            onClick={() => {
              handleCloseClick(onClose());
            }}
          />
        </Styled.StyledModalHeader>

        <Styled.Tbody>
          <Styled.Tr>
            {products.map((item, key) => (
              <ProductCart
                key={key}
                data={{
                  id: item.id,
                  photo: item.photo,
                  name: item.name,
                  price: item.price,
                  brand: item.brand,
                  quantity: item.quantity,
                }}
              />
            ))}
          </Styled.Tr>
        </Styled.Tbody>

        <Styled.Tfoot>
          <Styled.Value>
            <Styled.Text>Total</Styled.Text>
            <Styled.Text>R${priceFinaly}</Styled.Text>
          </Styled.Value>

          <Styled.Button onClick={() => {}}>Finalizar Compra</Styled.Button>
        </Styled.Tfoot>
      </Styled.StyledModal>
    </Styled.StyledModalOverlay>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
};

export default MenuCart;
