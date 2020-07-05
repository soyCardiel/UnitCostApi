import { Router } from 'express';
import LoginDomain from './../domain/login';

const router: Router = Router();

router.get('/getSession', (req, res) => {
    res.json( LoginDomain.getSession() );
});


export default router;