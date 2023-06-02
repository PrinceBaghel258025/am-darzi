import axios from 'axios';


const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL ? process.env.NEXT_PUBLIC_BACKEND_URL + '/admin' : 'http://localhost:5000/admin';

axios.defaults.withCredentials = true;

// OR

const instance = axios.create({
    withCredentials: true
})



const getCategories = async (token) => {
    console.log("inside getCategories", token)
    const res = await instance.get(`${baseUrl}/categories`, {
        headers: {
            Authorization: `${token}`
        }
    })
    console.log("getCategories", res.data)
    return res.data.categories;
}

const getCategory = async (id) => {
    const res = await instance.get(`${baseUrl}/categories/${id}`)
    return res.data.category;
}

const productsByCategory = async (id) => {
    console.log("making a request", id);
    const res = await instance.get(`${baseUrl}/categories/products/${id}`);

    return res.data.products;
}

const addCategory = async (data) => {
    try{

        const res = await instance.post(`${baseUrl}/categories`, data, {
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
        const res = await instance.patch(`${baseUrl}/categories/${id}`, data);
        return {updatedCategory : res.data.updateCategory, message: "Added Successfully"}
    } catch(err){
        console.log("updateCategory Error")
        return {updatedCategory: null, message: err.response.data.message}
    }
}
const deleteCategory = async (id) => {
    console.log("hit deleteCategory")
    try{
        const res = await instance.delete(`${baseUrl}/categories/${id}`);
        console.log(res);
    } catch(err){
        console.log(err)
    }
}

export default {getCategories, getCategory, productsByCategory, addCategory, updateCategory, deleteCategory}