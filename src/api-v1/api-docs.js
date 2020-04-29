const apiDoc = {
    swagger: '2.0',
    basePath: '/api/v1',
    info: {
      title: 'User API',
      version: '1.0.0'
    },
    consumes: ['application/json'],
    produces: ['application/json'],
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
        },
        required: ['userName', 'born', 'name', 'bio']
      },
      UserFollowRequest: {
        type: 'object',
        properties: {
          username: {
            description: 'The username',
            type: 'string'
          }
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
          username: {
            description: 'The username',
            type: 'string'
          }
        }
      },



      UserReviewRequest: {
        type: 'object',
        properties: {
          resterantId: {
            type: 'integer'
          },
          reviewSummary: {
            type: 'string'
          },
          starRating: {
            type: 'integer'
          },
          foods: {
            type: 'array',
            items: {type: 'string'}
          }
        }
      },
      UserResponse: {
        type: 'object',
        properties: {

        }
      },
    },
    paths: {},
    tags: [
      { description: 'User API', name: 'User' },
      { description: ' API', name: 'Review' }
  ]
  };

  export default apiDoc;