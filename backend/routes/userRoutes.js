import express from "express";
import {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
} from "../controller/userController.js";

const router = express.Router();

// Routes for User CRUD operations
router.post("/", createUser); // Create a new user
router.get("/", getUsers); // Get all users
router.get("/:id", getUserById); // Get a specific user by ID
router.put("/:id", updateUser); // Update a user
router.delete("/:id", deleteUser); // Delete a user

export default router;
