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
      UserFollowerRequest: {
        type: 'object',
        properties: {
            unfollowUser: { type: 'array', items: { $ref: '#/definitions/User' } },
            followUser: { type: 'array', items: {  $ref: '#/definitions/User'} }
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
      // WorldResponse: {
      //   type: 'object',
      //   properties: {

      //   }
      // },
      UserResponse: {
        type: 'object',
        properties: {

        }
      },
    },

    paths: {}
  };

  export default apiDoc;