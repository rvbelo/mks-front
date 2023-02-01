import axios from "axios";

function APIProduct() {
    return axios.create({baseURL: "https://mks-challenge-api-frontend.herokuapp.com/api/v1/products"})
}

export const apiProduct = APIProduct()
