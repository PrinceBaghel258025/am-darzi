const Attribute = require("../models/attribute");

const getAttribute = async (req, res) => {
  const attributes = await Attribute.find({});
  if(!attributes) {
      return res.status(404).json({
          error: "no data found"
      })
  }
  // will be better if we send images along
  return res.status(200).json({
      attributes
  })
};

// const addAttribute = async (req, res) => {


//   // will also receive multipart/form-data

//   // const images = req.files.map((file) => file.originalname);

//   const data = JSON.parse(req.body.data);

//   const attributeName = Object.keys(data)[0];
//   const variants = data[attributeName].map((el) => ({
//     title: el.title,
//     imgSrc: '/public/images/custom/' +  el.title + '.jpg',
// }));
//   // const customName = JSON.parse(req.body.data)
//   console.log();
//   // return res.status(200).json({
//   //     message: "ok"
//   // }
//   // )

//   // let {name: customName, variants} = req.body;
//   // length of variants and images must be same

//   //   if (!customName) {
//   //     return res.status(400).json({
//   //       message: "Provide the name of the custom",
//   //     });
//   //   }
//   //   try {
//   //     // construct variants array

//   const attribute = await Attribute.create({
//     name: attributeName,
//     values,
//   });
//   return res.status(200).json({
//     attribute,
//   });
// };

const addAttribute = async (req, res) => {
  const {name: attributeName, images} = req.body;
  const isExist = await Attribute.findOne({name: attributeName});
  console.log(isExist)
  if(isExist ) {
    console.log("got in if")
    return res.status(403).json({
      message: "Attribute already available"
    })
  }
  console.log(req.body);

  try{

    const attribute = await Attribute.create({
      name: attributeName,
      hasImages: images,
      values: []
    })

    return res.status(201).json({
      message: "attribute created",
      attribute
    })
  } catch(err) {
    console.log(err)
    return res.status(500).json({
      error: "something went wrong on the server"
    })
  }


}

const updateAttribute = async (req, res) => {
  const {id} = req.params;

  if(!id) {
    return res.status(400).json({
      error: "please provide id of the attribute to be updated"
    })
  }

  const { value } = req.body;

  try{

    const attribute = await Attribute.findById(id);
    if(!attribute){
      return res.status(400).json({
        error: "no such attribute exists"
      })
    }

    const updatedAttribute = await Attribute.findByIdAndUpdate(id, {
      values: [
        {
          title: value,
          imgSrc: ''
        }
      ]
    }, {new : true})

  } catch(err) {
    console.log(err);
    return res.status(500).json({
      error: "something went wrong on the server"
    })
  }


}

module.exports = {
  getAttribute,
  addAttribute,
  updateAttribute
};
