import axios from "axios";

const baseUrl = "http://localhost:5000/admin/attributes";

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

export default { addAttribute, getAllAttributes, updateAttribute };
