const express = require("express");
const router = express.Router();
const {
  userRegistration,
  userLogin,
  forget_password,
  reset_password,
} = require("../controllers/userController");

//Public route
router.post("/register", userRegistration);
router.post("/login", userLogin);
router.post("/forget-password", forget_password);
router.get("/reset-password", reset_password);

router.get("/checkSession", (req, res) => {
  // CheckSession here
  const token = req.cookies?.authToken;
  console.log(token);
  if(!token){
    return res.status(401).json({status: false});
  }
  
  res.json({ status: true });
});
//Private route
// router.post("/changepassword", userController.changeUserPassword)

module.exports = router;