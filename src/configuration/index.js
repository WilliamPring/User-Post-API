import ConfigureSwagger from './ConfigureSwagger'
import ConfigureOpenAPI from './ConfigureOpenAPI'
export const configure = app => {
    new ConfigureOpenAPI().configure(app),
    new ConfigureSwagger().configure(app)
}
