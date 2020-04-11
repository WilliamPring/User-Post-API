const apiDoc = {
    swagger: '2.0',
    basePath: '/api/v1',
    info: {
      title: 'User API',
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
      UserPolicyRequest: {
        type: 'object',
        properties: {
            userName: { type: 'string' },
            born: {type: 'string'},
            name: {type: 'string'},
            bio: {type: 'string'}
        },
        required: ['userName', 'born', 'name', 'bio']
      },
      WorldResponse: {
        type: 'object',
        properties: {

        }
      },
      UserResponse: {
        type: 'object',
        properties: {

        }
      },
    },

    paths: {}
  };

  export default apiDoc;