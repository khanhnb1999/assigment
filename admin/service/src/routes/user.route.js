import express from 'express';

import { getOneUser } from '../controllers/user.controller';

const router = express.Router();

router.get("/users/:id", getOneUser);

export default router;