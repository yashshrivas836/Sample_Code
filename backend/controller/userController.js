import User from "../models/userModel.js";

// Create a new user
export const createUser = async (req, res) => {
  try {
    const {
      name,
      role_id,
      email,
      phone,
      password,
      profile_picture,
      emergency_contact,
      address,
      date_of_birth,
      gender,
    } = req.body;

    if (!name || !role_id || !email || !phone || !password) {
      return res.status(400).json({ message: "Required fields are missing" });
    }

    const newUser = await User.create({
      name,
      role_id,
      email,
      phone,
      password,
      profile_picture,
      emergency_contact,
      address,
      date_of_birth,
      gender,
    });

    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all users
export const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a user by ID
export const getUserById = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a user
export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await User.update(req.body, { where: { user_id: id } });

    if (updated[0] === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User updated successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a user
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await User.destroy({ where: { user_id: id } });

    if (deleted === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
