import express from 'express';
import routes from './routes';

const app = express();

function create (config: any) {

    app.set('env', config.env);
    app.set('port', config.port);
    
    app.use(express.json());
    app.use(express.urlencoded({extended: false}));
    
    routes.init(app);
};

function start() {
    const port = app.get('port');
    app.listen(port, () => {
        console.log('now listening on port ' + port );
    });
}

const service = { 
    create,
    start
};

export default service;