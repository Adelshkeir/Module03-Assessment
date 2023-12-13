import User from "./usermodel.js";

class usersController {
  static async getAllUsers(req, res) {
    try {
      const users = await User.findAll();
      if (users.length === 0) {
        return res.status(404).json("there are no available users");
      }
      return res.status(200).json(users);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async findUserById(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      if (!user) {
        return res.status(404).json("user not found");
      }
      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async deleteUser(req, res) {
    try {
      const deleteduser = await User.findByPk(req.params.id);
      if (!deleteduser) {
        return res.status(404).json("the user was not found");
      }

      await User.destroy({
        where: {
          id: req.params.id,
        },
      });
      return res.status(200).json({ deleteduser });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async createUser(req, res) {
    try {
      const { username } = req.body;
      const newUser = await User.create({
        username,
      });

      if (!newUser) {
        errors.push("Error creating user");
        return res.status(500).json({ errors });
      }
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}

export default usersController;
