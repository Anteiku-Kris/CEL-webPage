const Admin = require("../models/Admin");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.registerAdmin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newAdmin = { email, password: hashedPassword };
    Admin.create(newAdmin, (error, result) => {
      if (error) return res.status(500).json({ error: error.message });
      res.status(201).json({ id: result.insertId, ...newAdmin });
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.loginAdmin = (req, res) => {
  const { email, password } = req.body;
  Admin.getByEmail(email, async (error, admins) => {
    if (error) return res.status(500).json({ error: error.message });
    if (admins.length === 0)
      return res.status(404).json({ message: "Admin not found" });

    const admin = admins[0];
    const passwordMatch = await bcrypt.compare(password, admin.password);
    if (!passwordMatch)
      return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: admin.id, email: admin.email }, "SECRET_KEY", {
      expiresIn: "1h",
    });
    res.json({ token, admin });
  });
};
