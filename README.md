# Angular 2 App

First Angular 2 App.

##Issues

Please file bugs [here][issues].

Include `closes`, `fixes`, or `resolves` in a commit message to close the issue.
For example `git commit -m "This closes #34, and closes #23"`

##Development

### Dependencies
Start by installing all dependencies:
```
npm install
```

### Configure
Create a `.env` file in the root of the application:


#### All Configuration Options
```
HOST=             //webserver host
PORT=             //webserver port
DEV_HOST=         //webpack dev server host
DEV_PORT=         //webpack dev server port
API_HOST=         //api server host
API_PORT=         //api server port
NODE_ENV=         //node environment
VERSION_NUMBER=   //application version number
```


### Run
Start a web server that can be reached by localhost:3000 by default.
```
npm run dev
```

### Test
Run unit tests using the cli.
```
npm test
```