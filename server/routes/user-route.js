const {
  register,
  login,
  resetPwd,
  getAllUsers,
} = require("../controllers/user-controller");
const express = require("express");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   - name: Authentication
 *     description: Operations related to authentication
 *   - name: Users
 *     description: Operations related to users
 * /register:
 *   post:
 *     tags:
 *       - Authentication
 *     summary: Register a new user
 *     description: Register a new user with email, name, and password
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               name:
 *                 type: string
 *               password:
 *                 type: string
 *                 format: password
 *     responses:
 *       200:
 *         description: User successfully registered
 *       400:
 *         description: Bad request, missing or invalid parameters
 * /login:
 *   post:
 *     tags:
 *       - Authentication
 *     summary: Login
 *     description: Log in with email and password
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *                 format: password
 *     responses:
 *       200:
 *         description: User successfully logged in
 *       401:
 *         description: Unauthorized, invalid credentials
 * /getAllUsers:
 *   get:
 *     tags:
 *       - Users
 *     summary: Get all users
 *     description: Get a list of all registered users
 *     responses:
 *       200:
 *         description: List of users
 * /resetPwd:
 *   post:
 *     tags:
 *       - Authentication
 *     summary: Resets password
 *     description: Resets password of a user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *                 format: password
 *     responses:
 *       200:
 *         description: List of users
 */

router.route("/register").post(register);
router.route("/getAllUsers").get(getAllUsers);
router.route("/login").post(login);
router.route("/resetPwd").post(resetPwd);

module.exports = router;
