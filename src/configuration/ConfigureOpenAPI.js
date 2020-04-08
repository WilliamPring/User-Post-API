import config from 'config'
import { initialize } from 'express-openapi';
import {resolve} from 'path'
import apiDoc from '../api-v1/api-docs'
import services from '../api-v1/services'
import bodyParser from 'body-parser'
import helmet from 'helmet'
export default class ConfigureOpenApi {
    configure(app) {
        app.use(helmet(config.get('Helmet')))
        initialize({
            apiDoc,
            app,
            exposeApiDocs: true,
            dependencies: services,
            paths: resolve(__dirname, '../api-v1/paths'),
            consumesMiddleware: {
                'application/json': bodyParser.json(),
            }
        });
        app.use((err, _, res, next) =>{
            res.status(err.status ? err.status : 500).json(err)
        })
    }
}