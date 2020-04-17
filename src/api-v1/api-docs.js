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
            bio: {type: 'string'},
            // restaurants: {
            //   type: 'array',
            //   items: "Restaurant"
            // }
        },
        required: ['userName', 'born', 'name', 'bio']
      },
      UserFollowRequest: {
        type: 'object',
        properties: {
            users: { type: 'array', items: {  $ref: '#/definitions/User'} }
        }
      },
      UserUnFollowRequest: {
        type: 'object',
        properties: {
            users: { type: 'array', items: { $ref: '#/definitions/User' } },
        }
      },
      User: {
        type: 'object',
        properties: {
          id: {
            description: 'The userid',
            type: 'integer'
          },
          username: {
            description: 'The username',
            type: 'string'
          }
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