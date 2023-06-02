import axios from 'axios';



const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL ? process.env.NEXT_PUBLIC_BACKEND_URL + '/admin' : 'http://localhost:5000/admin';


const getUsers = async () => {
    const res = await axios.get(`${baseUrl}/users`)
    console.log("getUsers", res.data)
    return res.data;
}

const getUser = async (id) => {
    const res = await axios.get(`${baseUrl}/users/${id}`)
    return res.data.user;
}


// const addUser = async (data) => {
//     try{

//         const res = await axios.post(`${baseUrl}/users`, data, {
//             headers: {
//                 'Content-Type': 'multipart/form-data'
//             }
//         });
//         console.log(res)
//         // return res.data.user;
//         return {user: res.data.user, message: 'Created successfully'};
//     } catch (err){
//         console.log(err.response.data.message);
//         return {user: null, message: err.response.data.message}
//     }
// }

const updateUser = async (id, data) => {
    try{
        const res = await axios.patch(`${baseUrl}/users/${id}`, data);
        return {updatedUser : res.data.updateUser, message: "Added Successfully"}
    } catch(err){
        console.log("updateUser Error")
        return {updatedUser: null, message: err.response.data.message}
    }
}
const deleteUser = async (id) => {
    console.log("hit deleteUser")
    try{
        const res = await axios.delete(`${baseUrl}/users/${id}`);
        console.log(res);
    } catch(err){
        console.log(err)
    }
}

export default {getUsers, getUser, updateUser, deleteUser}