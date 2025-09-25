import { Request, Response } from 'express';
import { taskService } from '../services/task.service';

export const getTasks = async (_req: Request, res: Response) => {
  try {
    const tasks = await taskService.getAll();
    res.json(tasks);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erreur serveur' });
  }
};

export const getTaskById = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);
    try {
        const task = await taskService.getOneById(id);
        res.json(task);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erreur serveur' });
    }
};

export const createTask = async (req: Request, res: Response) => {
    // const { title, description, userId } = req.body;
    console.log(req.body);
    try {
        const task = await taskService.create(req.body);
        res.status(201).json(task);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erreur serveur' });
    }
};