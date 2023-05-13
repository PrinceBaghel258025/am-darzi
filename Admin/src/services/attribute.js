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

const updateAttribute = async (req, res) => {
  try{
    const res = axios.patch(`${baseUrl}`)
  } catch(err) {
    console.log(err)
    return null;
  }
}

export default { addAttribute, getAllAttributes };
