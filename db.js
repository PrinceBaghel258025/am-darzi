const mongoose = require("mongoose");

const connect = (uri) => mongoose
  .connect(uri)
  .then((res) => console.log("database connected"))
  .catch((err) => {
    console.log(err)
  });


module.exports = connect;