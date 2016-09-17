import apiServer from './api';
import path from 'path';
import httpProxy from 'http-proxy';
import express from 'express';
import expressPromise from 'express-promise';
import cors from 'cors';
import bodyparser from 'body-parser';
import cookieParser from 'cookie-parser';
import * as env from './../shared/env';
const { nodeEnv, host, port, devHost, devPort, apiHost, apiPort } = env;
const publicPath = path.resolve(__dirname, './../../');

console.log(`\nRunning with env variables ${JSON.stringify(env, null, ' ')}`);
console.log(`Static assets served at ${publicPath}`);

const app = express();

app.use(expressPromise());
app.use(cors());
app.use(cookieParser());

const apiServerDomain = `http://${apiHost}:${apiPort}`;
const apiProxy = httpProxy.createProxyServer({
    target: apiServerDomain
});

app.use('/api', (req, res) => {
    apiProxy.web(req, res, { target: apiServerDomain });
});
//Body parser must come after api proxy
app.use(bodyparser.json());

app.use(express.static(publicPath));

const proxy = httpProxy.createProxyServer();
if (nodeEnv !== 'production') {
    var bundle = require('./bundle.js');
    bundle();

    app.all('/build/*', (req, res) => {
        proxy.web(req, res, {
            target: `http://${devHost}:${devPort}`
        });
    });
}

proxy.on('error', function(e) {
    console.log('Could not connect to proxy, please try again...');
});

export const generateHTMLString = (componentHTML, initialState) => `
    <!doctype html>
    <html>
      <head>
        <title>Angular 2 App</title>
        <meta name="description" content="Angular 2 App" />
        <meta name="author" content="Walker Randolph Smith" />
        <script src="node_modules/core-js/client/shim.min.js"></script>
        <script src="node_modules/zone.js/dist/zone.js"></script>
        <script src="node_modules/reflect-metadata/Reflect.js"></script>

        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
        </script>
      </head>
      <body>
        <my-app>Loading...</my-app>
        <script src="/build/bundle.js"></script>
      </body>
    </html>
`;

app.use('/', (req, res) => {
    const markup = generateHTMLString('', env);
    res.status(200).end(markup);
});

export default app;

app.listen(port, (err, message) => {
    if(err) {
        console.error(err);
    } else {
        console.info(`==> 💻  Open up http://${host}:${port}/ in your browser when bundle is valid. \n`);
    }
});