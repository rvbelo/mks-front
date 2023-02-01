import Card from "../Card";
import * as Styled from "./styled";
import { useEffect, useState } from "react";
import { apiProduct } from "../../../services/api";
import { useDispatch, useSelector } from "react-redux";

const Highlights = () => {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState([]);
  const dispatch = useDispatch();

  function handleAddProduct() {
    dispatch(CartActions.addProduct(product)); 
  }

  const fetchAllData = () => {
    setLoading(true);
    apiProduct
      .get("/?page=1&rows=8&sortBy=id&orderBy=DESC")
      .then((result) => {
        setProduct(result.data.products);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchAllData();
  }, []);

  return (
    <Styled.Container>
      {loading && !product && <p>Carrengando informações...</p>}
      <Styled.Row>
        {product &&
          product.map((item, key) => (
            <Card
              key={key}
              data={{
                id: item.id,
                photo: item.photo,
                brand: item.brand,
                name: item.name,
                price: item.price,
                description: item.description,
              }}
            />
          ))}
      </Styled.Row>
    </Styled.Container>
  );
};

export default Highlights;
