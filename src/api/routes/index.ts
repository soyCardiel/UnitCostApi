import { Express } from 'express';
import apiRoutes from './versions';

function init(app: Express) {
    app.use('/api', apiRoutes);
}

const routesmod = { init };

export default routesmod;