const ObjectId = require("mongoose").Types.ObjectId;
const jwt = require('jsonwebtoken')


 const isValidObjectId = (id) => {
  if (ObjectId.isValid(id)) {
    if (String(new ObjectId(id)) === id) return true;
    return false;
  }
  return false;
};

const checkToken = async (token) => {
  const decoded = jwt.verify(token, process.env.JWT_SECRET)
  return decoded;
}


const verifyAdmin = async (req, res, next) => {
  const token = req.headers.authorization;

  // console.log(typeof req.headers.cookie)
  // console.log(req.headers.cookie.split(';'));
  // let foo = req.headers.cookie.split(";").reduce(function(obj, str, index) {
  //   let strParts = str.split("=");
  //   if (strParts[0] && strParts[1]) { //<-- Make sure the key & value are not undefined
  //     obj[strParts[0].replace(/\s+/g, '')] = strParts[1].trim(); //<-- Get rid of extra spaces at beginning of value strings
  //   }
  //   return obj;
  // }, {});

  // console.log(foo['next-auth.session-token'])

  const decoded = await checkToken(token)
  req.userId = decoded.userID;
  console.log(decoded)
  next();
}
module.exports = {
    isValidObjectId,
    verifyAdmin
}
