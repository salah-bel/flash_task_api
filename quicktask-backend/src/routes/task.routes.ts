import { Router } from "express";
import {getTasks, getTaskById, createTask} from "../controllers/task.controller";
const router = Router();

router.get("/", getTasks);
router.get("/:id", getTaskById);
router.post("/", createTask);

export default router;