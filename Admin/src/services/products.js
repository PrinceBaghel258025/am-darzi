import axios from "axios"


const baseUrl = 'http://localhost:5000/admin'
const getAllProducts = async () => {
    const res = await axios.get(`${baseUrl}/products`);

    return res.data.products
}


export default { getAllProducts};