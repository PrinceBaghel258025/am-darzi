const router = require("express").Router();
const designController = require('../controllers/designController')


// router.route("/", () => {});
router.get("/", () => {});

router.get("/:id", designController.getDesigns)


module.exports = router;
