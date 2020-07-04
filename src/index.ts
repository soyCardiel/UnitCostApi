import express from 'express';

const app = express();

// settings
app.set('port', 3000);

// middleware


// routes

// static files
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});