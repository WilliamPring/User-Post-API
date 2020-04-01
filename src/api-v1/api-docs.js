const apiDoc = {
    swagger: '2.0',
    basePath: '/api/v1',
    info: {
      title: 'A getting started API.',
      version: '1.0.0'
    },
    definitions: {
      Error: {
          additionalProperties: true,
      },
      World: {
        type: 'object',
        properties: {
          name: {
            description: 'The name of this world.',
            type: 'string'
          }
        }
      },
      WorldResponse: {
        type: 'object',
        properties: {

        }
      },
    },

    paths: {}
  };

  export default apiDoc;