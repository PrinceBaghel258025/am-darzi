import axios from "axios";

const baseUrl = "http://localhost:5000/admin/customizations";

const addCustomization = async (data) => {
  try {
    const res = await axios.post(baseUrl, data);
    console.log(res.data.customization);
    return res.data.customization;
  } catch (err) {
    console.log(err.response.status);
    if (err.response.status === 403) {
      console.log("Customization already exist");
      return "Customization already exists";
    }
  }
};

const getAllCustomizations = async () => {
    try{
        const res = await axios.get(baseUrl);
        console.log(res.data)
        return res.data.customizations; 
    } catch(err){
        console.log(err);
        return null;
    }
}

const updateCustomization = async (cusId, data) => {
  try{
    console.log(cusId)
    console.log("inside customization service", data)
    const res = await axios.patch(`${baseUrl}/${cusId}`, data, {
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

export default { addCustomization, getAllCustomizations, updateCustomization };
