import { Router } from "express";
import { ArticleController } from "../controllers/ArticleController";
import { checkRole } from "../middlewares/checkRole";
import { checkToken } from "../middlewares/checkToken";

const router = Router();

router.post('/', ArticleController.create)
router.delete('/', ArticleController.delete)
router.delete('/:id', ArticleController.delete)

export default router;