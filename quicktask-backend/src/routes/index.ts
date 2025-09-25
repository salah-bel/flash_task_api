import {Router} from 'express';
import testRouter from './test.routes';
import taskRouter from './task.routes';

const router = Router();
router.use('/test', testRouter);
router.use('/tasks', taskRouter);

export default router;