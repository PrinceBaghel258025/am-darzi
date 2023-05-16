import axios from 'axios';

const baseUrl = 'http://localhost:5000/admin';





const getCategories = async () => {
    const res = await axios.get(`${baseUrl}/categories`)
    console.log("getCategories", res.data)
    return res.data.categories;
}

const getCategory = async (id) => {
    const res = await axios.get(`${baseUrl}/categories/${id}`)
    return res.data.category;
}

const productsByCategory = async (id) => {
    console.log("making a request", id);
    const res = await axios.get(`${baseUrl}/categories/products/${id}`);

    return res.data.products;
}

const addCategory = async (data) => {
    const res = await axios.post(`${baseUrl}/categories`, data);
    console.log(res)
    return res.data.category;
}

export default {getCategories, getCategory, productsByCategory, addCategory}