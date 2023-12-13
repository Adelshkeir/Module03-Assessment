import Article from "./articlemodel.js";
import User from "./usermodel.js";
import fs from "fs";
import path from "path";

class articlesController {
  //Create article
  static async createarticle(req, res) {
    try {
      const image = req.file.filename;
      const user = await User.findByPk(req.params.userId);
      const newarticle = await Article.create({ ...req.body, image: image });
      if (!newarticle) {
        return res.status(400).json("article creation failed");
      }
      await newarticle.setUser(user);
      return res.status(201).json(newarticle);
    } catch (error) {
      console.log(error);
    }
  }

  //Get all articles
  static async getallarticles(req, res) {
    try {
      const articles = await Article.findAll();
      return res.status(200).json(articles);
    } catch (error) {
      console.log(error);
    }
  }

  //Delete
  static async deletearticle(req, res) {
    try {
      const deletedarticle = await Article.findByPk(req.params.id);

      if (!deletedarticle) {
        return res.status(404).json("the article was not found");
      }

      const imageToDelete = deletedarticle.image;

      await Article.destroy({
        where: {
          id: req.params.id,
        },
      });
      if (imageToDelete) {
  
        const imagePath = path.join("./upload", imageToDelete);
        fs.unlinkSync(imagePath);
      }

      return res.status(200).json({ deletedarticle });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  //update article
  static async updatearticle(req, res) {
    try {
      const oldarticle = await Article.findByPk(req.params.id);
      const oldImage = oldarticle.image;

      const newData = { ...req.body };

      if (req?.file?.filename) {
        newData.image = req?.file?.filename;
      }

      const [updatedarticle] = await Article.update(newData, {
        where: {
          id: req.params.id,
        },
      });

      if (!updatedarticle) {
        return res.status(404).json("please enter the fields you want to edit");
      }

      if (oldImage) {
        const oldImagePath = path.join("/upload", "upload", oldImage);
        if (fs.existsSync(oldImagePath)) {
          fs.unlinkSync(oldImagePath);
        } else {
          console.error("File not found:", oldImagePath);
        }
      }
      const newarticle = await Article.findByPk(req.params.id);
      return res.status(200).json(newarticle);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async findarticleById(req, res) {
    try {
      const article = await Article.findByPk(req.params.id);
      if (!article) {
        return res.status(404).json("article not found");
      }
      return res.status(200).json(article);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}

export default articlesController;
