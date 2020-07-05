import { Router } from 'express';
import LoginController from './../../../controllers/loginController';
const router: Router = Router();

router.use('*', (req, res, next) =>{
    console.log({
        by: req.ip,
        to: req.originalUrl,
        method: req.method
    });

    next();
});


router.use('/login', LoginController);

export default router;