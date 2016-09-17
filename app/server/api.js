import express from 'express';
import expressPromise from 'express-promise';
import cors from 'cors';
import bodyparser from 'body-parser';
import cookieParser from 'cookie-parser';
import * as env from './../shared/env';

const { apiPort } = env;

const app = express();
app.use(expressPromise());
app.use(cors());
app.use(bodyparser.json());
app.use(cookieParser());

app.post('/environment', (req, res) => {
    res.status(200).send(env);
});

export default app;

app.listen(apiPort, (err) => {
    if(err) {
        console.error(err);
    } else {
        console.info(`==> 💻  API Server listening on port ${apiPort}`);
    }
});