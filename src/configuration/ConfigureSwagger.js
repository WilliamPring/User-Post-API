import swaggerUi from 'swagger-ui-express'
import config from 'config'
export default class ConfigureSwagger {
    constructor() {
        this.swaggerConfig = config.get('Swagger')
    }
    configure(app) {
        app.use(this.swaggerConfig.swaggerPath,
            swaggerUi.serve,
            swaggerUi.setup(null, {swaggerOptions: {url: this.swaggerConfig.swaggerApidocs }}))
    }
}