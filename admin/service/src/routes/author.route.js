import express from 'express';

import { signUp,singIn } from '../controllers/author.controller';

const router = express.Router();

router.post('/sign-up', signUp);
router.post('/sign-in', singIn);

export default router;