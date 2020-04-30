import express from 'express';
import { configure, logger } from './src/configuration'
import {imageProcessingQueue} from './src/utils'
export default function() {
    const app = express();
    configure(app)
    imageProcessingQueue()
    app.listen(3000, () => logger.info('@Server configure with port %d listening', 3000))
}