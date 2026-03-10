import { prisma } from "../prisma/client.js";
import bcrypt from "bcrypt";

export const getUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      orderBy: { createdAt: "asc" },
    });
    res
      .status(200)
      .json({ data: users, message: "Users fetched successfully" });
  } catch (error) {
    console.error("Error fetching users", error);
    res.status(500).json({ success: false, message: "Failed to fetch Users" });
  }
};

export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await prisma.user.findFirst({
      where: {
        OR: [{ id: id }, { userName: id }, { email: id }],
      },
    });
    res.status(200).json({ data: user, message: "User fetched successfully" });
  } catch (error) {
    console.error("Error fetching user", error);
    res.status(500).json({ success: false, message: "Failed to fetch User" });
  }
};

export const createUser = async (req, res) => {
  try {
    const { firstName, lastName, email, userName, dateOfBirth, password } =
      req.body;

    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        message: "Password should be at least 6 character long",
      });
    }

    let user = await prisma.user.findUnique({
      where: { email: email },
    });

    if (user) {
      return res
        .status(400)
        .json({ success: false, message: `${email} already exists. ` });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    user = await prisma.user.create({
      data: {
        firstName: firstName,
        lastName: lastName,
        email: email,
        userName: userName,
        dateOfBirth: dateOfBirth,
        password: hashedPassword,
        role: "USER",
      },
    });
    res.status(201).json({ success: true, message: "User created" });
  } catch (error) {
    console.error("Error creating user", error);
    res.status(500).json({ success: false, message: "Failed to create user" });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { firstName, lastName, email, userName, dateOfBirth } = req.body;
    console.log(firstName, "hasan");

    const user = await prisma.user.findUnique({
      where: { id: id },
    });

    if (!user) {
      res.status(404).json({ success: false, message: "user unavailable" });
    }

    // Only include fields that are actually provided in the request body
    const dataToUpdate = {
      ...(firstName !== undefined && { firstName }),
      ...(lastName !== undefined && { lastName }),
      ...(email !== undefined && { email }),
      ...(userName !== undefined && { userName }),
      ...(dateOfBirth !== undefined && { dateOfBirth }),
    };

    const updateUser = await prisma.user.update({
      where: { id: id },
      data: dataToUpdate,
    });

    res
      .status(200)
      .json({ success: true, message: "User updated successfully" });
  } catch (error) {
    console.error("Failed to update user", error);
    res.status(500).json({ success: false, message: "Failed to update user" });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await prisma.user.delete({
      where: { id: id },
    });
    res
      .status(200)
      .json({ success: true, message: "User deleted successfully" });
  } catch (error) {
    console.error("Error deleting user", error);
    res.status(500).json({ success: false, message: "Failed to delete user" });
  }
};
