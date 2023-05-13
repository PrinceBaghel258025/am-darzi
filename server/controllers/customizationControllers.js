const Customization = require("../models/customizations");

const getCustomization = async (req, res) => {
  const customizations = await Customization.find({});
  if(!customizations) {
      return res.status(404).json({
          error: "no data found"
      })
  }
  // will be better if we send images along
  return res.status(200).json({
      customizations
  })
};

const addCustomization = async (req, res) => {
  // will also receive multipart/form-data

  const images = req.files.map((file) => file.originalname);

  const data = JSON.parse(req.body.data);

  const customName = Object.keys(data)[0];
  const variants = data[customName].map((el) => ({
    title: el.title,
    imgSrc: '/public/images/custom/' +  el.title + '.jpg',
}));
  // const customName = JSON.parse(req.body.data)
  console.log();
  // return res.status(200).json({
  //     message: "ok"
  // }
  // )

  // let {name: customName, variants} = req.body;
  // length of variants and images must be same

  //   if (!customName) {
  //     return res.status(400).json({
  //       message: "Provide the name of the custom",
  //     });
  //   }
  //   try {
  //     // construct variants array

  const custom = await Customization.create({
    name: customName,
    variants,
  });
  return res.status(200).json({
    custom,
  });
};

module.exports = {
  getCustomization,
  addCustomization,
};
