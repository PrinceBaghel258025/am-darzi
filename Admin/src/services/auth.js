import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL ? process.env.NEXT_PUBLIC_BACKEND_URL + '/admin' : 'http://localhost:5000/admin';

const signIn = async (credentials) => {
    const res = await axios.post(`${baseUrl}/sign-in`, credentials, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    // console.log("inside service",res.data);
    return res.data;
}

export default { signIn };