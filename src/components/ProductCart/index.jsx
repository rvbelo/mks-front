import Image from "next/image";
import * as Styled from "./styled";
import { useDispatch } from "react-redux";
import CardProductCart from "./Card";
import {
  addProduct,
  decrementProduct,
  removeProduct,
} from "../../features/product/cartSlice";

const ProductCart = ({ data }) => {
  const dispatch = useDispatch();

  const priceFinaly = data.price * data.quantity;

  return (
    <Styled.Card>
      <Styled.CloseIcon
        size={18}
        color="#000000"
        onClick={() => {
          dispatch(
            removeProduct({
              id: data.id,
            })
          );
        }}
      />
      <Styled.CloseX
        onClick={() => {
          dispatch(
            removeProduct({
              id: data.id,
            })
          );
        }}
      >X</Styled.CloseX>

      <Styled.Box>
        <Image
          src={data.photo}
          alt={data.brand}
          width={56}
          height={67}
          className="img"
        />
        <Styled.Title>{data.name}</Styled.Title>
        <Styled.Div>
        <CardProductCart
          data={data}
          onIncrementItem={() => {
            dispatch(
              addProduct({
                id: data.id,
                name: data.name,
                photo: data.photo,
                price: data.price,
              })
            );
          }}
          onDecrementItem={() => {
            dispatch(
              decrementProduct({
                id: data.id,
                name: data.name,
                photo: data.photo,
                price: data.price,
              })
            );
          }}
        />

        <Styled.Price>R$ {Math.trunc(priceFinaly)}</Styled.Price>
        </Styled.Div>
      </Styled.Box>
    </Styled.Card>
  );
};

export default ProductCart;
