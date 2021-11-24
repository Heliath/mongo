import { Router } from "express";
import { UserController } from "../controllers/UserController";

const router = Router();

router.get('/', UserController.users)
router.get('/:id', UserController.users)

router.get('/:id/articles', UserController.wrote)

router.delete('/', UserController.delete)
router.delete('/:id', UserController.delete)

export default router;