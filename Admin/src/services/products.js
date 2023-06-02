import axios from "axios"


const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL ? process.env.NEXT_PUBLIC_BACKEND_URL + '/admin' : 'http://localhost:5000/admin';
const getAllProducts = async () => {
    const res = await axios.get(`${baseUrl}/products`);

    return res.data.products
}


export default { getAllProducts};