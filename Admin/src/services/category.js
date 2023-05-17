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
    try{

        const res = await axios.post(`${baseUrl}/categories`, data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        console.log(res)
        // return res.data.category;
        return {category: res.data.category, message: 'Created successfully'};
    } catch (err){
        console.log(err.response.data.message);
        return {category: null, message: err.response.data.message}
    }
}

const updateCategory = async (id, data) => {
    try{
        const res = await axios.patch(`${baseUrl}/categories/${id}`, data);
        return {updatedCategory : res.data.updateCategory, message: "Added Successfully"}
    } catch(err){
        console.log("updateCategory Error")
        return {updatedCategory: null, message: err.response.data.message}
    }
}

export default {getCategories, getCategory, productsByCategory, addCategory, updateCategory}