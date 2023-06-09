import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL ? process.env.NEXT_PUBLIC_BACKEND_URL + '/admin/attributes' : 'http://localhost:5000/admin/attributes';

const addAttribute = async (data) => {
  try {
    const res = await axios.post(baseUrl, data);
    console.log(res.data.attribute);
    return res.data.attribute;
  } catch (err) {
    console.log(err.response.status);
    if (err.response.status === 403) {
      console.log("attribute already exist");
      return "Attribute already exists";
    }
  }
};

const getAllAttributes = async () => {
    try{
        const res = await axios.get(baseUrl);
        return res.data.attributes; 
    } catch(err){
        console.log(err);
        return null;
    }
}
const getAttribute = async (id) => {
  console.log("inside getAttribute", id);
  try{
      const res = await axios.get(`${baseUrl}/${id}`);
      return res.data.attribute; 
  } catch(err){
      console.log(err);
      return null;
  }
}

const updateAttribute = async (attId, data) => {
  try{
    console.log("inside attribute service", data)
    const res = await axios.post(`${baseUrl}/${attId}`, data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    console.log("this is req",res);
    return res.data;
  } catch(err) {
    console.log(err)
    return err.response.data;
  }
}

const deleteAttribute = async (id) => {
    console.log("hit deleteAttribute")
    try{
        const res = await axios.delete(`${baseUrl}/${id}`);
        console.log(res);
    } catch(err){
        console.log(err)
    }
}

export default { addAttribute, getAllAttributes,getAttribute, updateAttribute, deleteAttribute };
