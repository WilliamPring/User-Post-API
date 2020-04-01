import express from 'express';
import { configure } from './src/configuration'
export default function() {
    const app = express();
    // initialize({
    //     app,
    //     apiDoc: v1ApiDoc,
    //     paths: resolve(__dirname, './src/api-v1/paths'),
    //     dependencies: {
    //         worldsService: v1WorldsService
    //     },
    //   });
    configure(app)
    app.listen(3000)
}