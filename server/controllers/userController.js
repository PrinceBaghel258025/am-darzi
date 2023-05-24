const userModel = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
// const randomstring = require("randomstring");

const sendMail = async (name, email, token) => {
  try {
    let mailTransport = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 5000,
      secure: true,
      auth: {
        user: "aksingh202140@gmail.com",
        pass: "jksxlexijpkcgwli",
      },
    });

    let details = {
      from: "aksingh202140@gmail.com",
      to: "akkikiller64@gmail.com",
      subject: "For reset password",
      text:
        "<p> Hello " +
        name +
        ', Please the link and <a href="http://localhost:5000/api/reset-password?token=' +
        token +
        '">reset your password</a>',
    };

    mailTransport.sendMail(details, (err) => {
      if (err) {
        console.log("It has an error", err);
      } else {
        console.log("Email has sent");
      }
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      error: error,
    });
  }
};

const userRegistration = async (req, res) => {
  const { firstname, lastname, email, password, retypepassword } = req.body;
  const user = await userModel.findOne({ email: email });
  if (user) {
    res.send({ status: "Failed", message: "Email Already Exits" });
  } else {
    // if (firstname && lastname && email && password && retypepassword) {
      // if (password === retypepassword) {
        try {
          const salt = await bcrypt.genSalt(10);
          const hashPassword = await bcrypt.hash(password, salt);
          const doc = userModel({
            // firstname: firstname,
            // lastname: lastname,
            email: email,
            password: hashPassword,
            // retypepassword: retypepassword,
          });
          const user = await doc.save();

          //jwt token
          const savedUser = await userModel.findOne({ email: email });

          const token = jwt.sign(
            { userID: savedUser._id },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
          );
          userModel.password = null;

          if (user) {
              // return res.status(200).json({...user, accessToken: token})
            res.send({
              status: "Success",
              message: "Registration Successfull",
              user,
              token: token,
            });
          } else {
            return res.status(200).json({
              message: "could not saved to database",
            });
          }
        } catch (error) {
          console.log(error);
          res.send({ status: "Failed", message: "Unable to Register" });
        }
      // } else {
      //   res.send({
      //     status: "Failed",
      //     message: "Password And Confirm Password Doesn't Matched",
      //   });
      // }
    // } else {
    //   res.send({ status: "Failed", message: "All Fields Are Required" });
    // }
  }
};

const userLogin = async (req, res) => {
  console.log(req.body)
  try {
    const { email, password } = req.body;
    if (email && password) {
      const user = await userModel.findOne({ email: email });
      if (user != null) {
        const match = await bcrypt.compare(password, user.password);
        if ( match) {
          //generate jwt
          const token = jwt.sign({ userID: user._id }, process.env.JWT_SECRET, {
            expiresIn: "1d",
          });
          // user.token = token;
          return res.status(200).json({...user._doc, accessToken: token})
          // res
          //   .cookie("authToken", token, {
          //     httpOnly: true,
          //     secure: true,
          //     sameSite: "None",
          //   })
          //   .json({ status: true });

        } else {
          res.send({
            status: "Failed",
            message: "Email or Password is not Valid",
          });
        }
      } else {
        res.send({ status: "Failed", message: "You are not a Register user" });
      }
    } else {
      res.send({ status: "Failed", message: "All Fields Are Required" });
    }
  } catch (error) {
    console.log(error);
  }
};

// static changeUserPassword = async (req, res) =>{
//     const {password, retypepassword} = req.body
//     if(password &&  retypepassword){
//         if(password !== retypepassword){
//             res.send({"status":"Failed", "message":" New password and confirm new password does't match"});
//         }else{
//             const salt = await bcrypt.genSalt(10);
//             const newHashPassword = await bcrypt.hash(password, salt);
//         }
//     }else{
//         res.send({"status":"Failed", "message":"All Fields Are Required"})
//     }

// const forget_password = async (req, res) => {
//   try {
//     const email = req.body.email;
//     const userData = await userModel.findOne({ email: email });
//     if (userData) {
//       const randomString = randomstring.generate();
//       const data = await userModel.updateOne(
//         { email: email },
//         { $set: { token: randomString } }
//       );
//       sendMail(userData.name, userData.email, randomString);
//       res.status(200).send({ success: true, msg: "Please check your email" });
//     } else {
//       res.status(200).send({ success: true, msg: "this email doesn't exit" });
//     }
//   } catch (error) {
//     console.log(error);
//     res.status(400).json({
//       error: error,
//     });
//   }
// };

const reset_password = async (req, res) => {
  try {
    const token = req.query.token;
    const tokenData = await userModel.findOne({ token: token });
    if (tokenData) {
      const password = req.body.password;
      const hashPassword = await bcrypt.hash(password, 10);
      const userDate = await userModel.findByIdAndUpdate(
        { _id: tokenData._id },
        { $set: { password: hashPassword, token: "" } },
        { new: true }
      );
      res.status(200).send({
        success: true,
        msg: "User password has been reset",
        data: userDate,
      });
    } else {
      res
        .status(200)
        .send({ success: true, msg: "This token has been expired." });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({
      error: error,
    });
  }
};

const getAllUsers = async (req, res) => {
    try{
        const users = await userModel.find({});
        if(!users) {
            return res.status(400).json({
                users: []
            })
        }
        console.log("users", users)
        return res.status(200).json(
            users
        )
    } catch(err){
        console.log(err)
        return res.status(500).json({
            error: "Something went wrong on the server"
        })
    }
}

module.exports = {
    getAllUsers,
  userRegistration,
  userLogin,
//   forget_password,
  reset_password,
  sendMail,
};
