import * as Styled from "./styled";
import { Plus, Dash } from "@styled-icons/bootstrap";

const CardProductCart = ({ data, onIncrementItem, onDecrementItem }) => {

  return (
    <Styled.Content>
      <Styled.Text>Qtd:</Styled.Text>

      <Styled.Div>
        <Styled.Button onClick={() => onDecrementItem()}>
          <Dash size={12} color="#000000" className="icon" />
        </Styled.Button>

        <Styled.Input type="number" readOnly value={data.quantity} />
        {/* repensar este compoentn inteiro */}

        <Styled.Button onClick={() => onIncrementItem()}>
          <Plus size={12} color="#000000" className="icon"/>
        </Styled.Button>
      </Styled.Div>
    </Styled.Content>
  );
};

export default CardProductCart;
