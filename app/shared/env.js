const DEFAULT_HOST = 'localhost';
const {
    VERSION_NUMBER,
    NODE_ENV,
    HOST, PORT,
    DEV_HOST, DEV_PORT,
    API_HOST, API_PORT
} = process.env;

export const isBrowser = process.browser;
export const nodeEnv = NODE_ENV || 'production';
export const versionNumber = VERSION_NUMBER || '0.0.0.0000';
export const host = HOST || DEFAULT_HOST;
export const port = PORT || 3000;
export const devHost = DEV_HOST || DEFAULT_HOST;
export const devPort = DEV_PORT || 3001;
export const apiHost = API_HOST || DEFAULT_HOST;
export const apiPort = API_PORT || 3002;
