import axios from 'axios';

const baseUrl = 'http://localhost:5000/admin';





const getOrders = async () => {
    const res = await axios.get(`${baseUrl}/orders`)
    console.log("getCategories", res.data)
    return res.data;
}

const getOrder = async (id) => {
    const res = await axios.get(`${baseUrl}/orders/${id}`)
    return res.data.Order;
}

const addOrder = async (data) => {
    try{

        const res = await axios.post(`${baseUrl}/orders`, data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        console.log(res)
        // return res.data.Order;
        return {Order: res.data.Order, message: 'Created successfully'};
    } catch (err){
        console.log(err.response.data.message);
        return {Order: null, message: err.response.data.message}
    }
}

const updateOrder = async (id, data) => {
    try{
        const res = await axios.patch(`${baseUrl}/orders/${id}`, data);
        return {updatedOrder : res.data.updateOrder, message: "Added Successfully"}
    } catch(err){
        console.log("updateOrder Error")
        return {updatedOrder: null, message: err.response.data.message}
    }
}
const deleteOrder = async (id) => {
    console.log("hit deleteOrder")
    try{
        const res = await axios.delete(`${baseUrl}/orders/${id}`);
        console.log(res);
    } catch(err){
        console.log(err)
    }
}

export default {getOrders, getOrder, addOrder, updateOrder, deleteOrder}