const router = require("express").Router();
const petsController = require("../../controllers/petsController");

// Matches with "/api/pets"
router.route("/")
  .get(petsController.findAll)
  .post(petsController.create);

// Matches with "/api/pets/:id"
router
  .route("api/pets/:id")
  .get(petsController.findById)
  .put(petsController.update)
  .delete(petsController.remove);

module.exports = router;
