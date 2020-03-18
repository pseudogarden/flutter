import { Router } from 'express';
import { Pay } from '../controllers';

const router = Router();

router.post('/', Pay.addSubaccount);
router.get('/', Pay.getSubaccount);
router.get('/all', Pay.allSubaccounts);

export default router;
