const router = require("express").Router;
// const authController = require('../controllers/authController')
const {loginCheck, isAuth, isAdmin} = require('../middleware/auth')

// router.route("/", () => {});
router.get("/login", () => {});

router.post('/isadmin', authController.isAdmin)
router.post('/signup', authController.signup)
router.post('/signin', authController.signin)
router.get('/user', loginCheck, isAuth, isAdmin, authController.allUsers)

module.exports = router;






module.exports = router;