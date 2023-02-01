import Image from "next/image";
import PropsTypes from "prop-types";
import * as Styled from "./styled";
import { Archive } from "@styled-icons/typicons/Archive";
import { useDispatch } from "react-redux";
import { addProduct } from "../../../features/product/cartSlice";

const Card = ({ data }) => {
  const dispatch = useDispatch();

  return (
    <Styled.Card>
      <Styled.Box>
        <Image src={data.photo} alt={data.brand} width={127} height={150} />
        <Styled.Content>
          <Styled.Title>{data.name}</Styled.Title>
          <Styled.ContainerPrice>
            <Styled.Price>R${Math.trunc(data.price)}</Styled.Price>
          </Styled.ContainerPrice>
        </Styled.Content>
        <Styled.Description>{data.description}</Styled.Description>
      </Styled.Box>
      <Styled.Button
        onClick={() => {
          dispatch(
            addProduct({
              id: data.id,
              name: data.name,
              photo: data.photo,
              price: data.price,
              quantity: data.quantity,
            })
          );
        }}
      >
        <Archive size="19px" className="icon" color="#fff" />
        <Styled.Buy>COMPRAR</Styled.Buy>
      </Styled.Button>
    </Styled.Card>
  );
};

Card.PropsTypes = {
  photo: PropsTypes.string,
  brand: PropsTypes.string,
  name: PropsTypes.string,
  price: PropsTypes.string,
  description: PropsTypes.string,
};

export default Card;
