import express from 'express';
import { configure, logger } from './src/configuration'
export default function() {
    const app = express();
    configure(app)
    app.listen(3000, () => logger.info('@Server configure with port %d listening', 3000))
}