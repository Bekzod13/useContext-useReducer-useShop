import axios from "axios"


const Api = axios.create({
    baseURL: "https://api.escuelajs.co/api/v1/products"
})

export default Api