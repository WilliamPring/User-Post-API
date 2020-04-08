import ConfigureSwagger from './ConfigureSwagger'
import ConfigureOpenAPI from './ConfigureOpenAPI'
import ConfigureLogger from './ConfigureLogger'

const loggerInstance = new ConfigureLogger();
export const configure = app => {
    new ConfigureOpenAPI().configure(app),
    new ConfigureSwagger().configure(app)
}

export const logger = loggerInstance.logger;