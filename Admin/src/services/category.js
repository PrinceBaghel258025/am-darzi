import axios from 'axios';

const baseUrl = 'http://localhost:5000/admin';





const getCategories = async () => {
    const res = await axios.get(`${baseUrl}/category`)
    return res.data.categories;
}

const getCategory = async (id) => {
    const res = await axios.get(`${baseUrl}/category/${id}`)
    return res.data.category;
}

const productsByCategory = async (id) => {
    console.log("making a request", id);
    const res = await axios.get(`${baseUrl}/category/products/${id}`);

    return res.data.products;
}

export default {getCategories, getCategory, productsByCategory}