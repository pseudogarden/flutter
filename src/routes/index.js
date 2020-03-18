import { Router } from 'express';
import subaccountRoutes from './subaccount';
/**
 * add your routes here e.g
 * import authRoutes from './auth';
 */

const router = Router();
router.use('/subaccount', subaccountRoutes);
/**
 * declare routes here eg
 * router.use('/auth', authRoutes);
 */

export default router;
