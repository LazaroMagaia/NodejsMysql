const { createUser,deleteUser, updateUser, getUserById, getUsers } = require("./userController");
const router = require("express").Router();

router.post("/", createUser);
router.get("/",getUsers);
router.get("/:id",getUserById);
router.put("/",updateUser);
router.delete("/",deleteUser);

module.exports= router;