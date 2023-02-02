import Card from "../Card";
import * as Styled from "./styled";
import { useEffect, useState } from "react";
import { apiProduct } from "../../../services/api";
import { useDispatch } from "react-redux";
import  LoadingSkeleton  from '../../Loading'

const Highlights = () => {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState([]);
  const dispatch = useDispatch();

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
      { !loading ? 
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
      : <LoadingSkeleton/>}
    </Styled.Container>
  );
};

export default Highlights;
