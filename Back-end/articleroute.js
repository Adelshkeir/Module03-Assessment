import articlesController from "./articlecontroller.js";
import upload from './middlewares/multermiddleware.js';
import express from "express"

const articleRouter = express.Router();


articleRouter.post('/', upload.single('image'), articlesController.createarticle);


articleRouter.get('/', articlesController.getallarticles);

articleRouter.get('/:id', articlesController.findarticleById);


articleRouter.patch('/:id',upload.single('image'), articlesController.updatearticle);


articleRouter.delete('/:id', articlesController.deletearticle);



export default articleRouter;