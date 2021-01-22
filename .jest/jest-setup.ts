import config from '../next.config.js';
import { setConfig } from 'next/config';

setConfig({
    publicRuntimeConfig: config.publicRuntimeConfig
});
