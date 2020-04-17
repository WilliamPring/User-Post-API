import {genericCallback }  from '../../../../utils'
const putDoc = ({
  description: 'Get User Detail',
  operationId: 'updateUserFollower',
  consumes: ['application/json'],
  parameters: [
    { name: 'userId', type: 'string', in: 'path', required: true},
    {
      in: 'body', schema: {
          $ref: '#/definitions/UserFollowRequest'
      }, name: 'updateUserFollower', required: true
    }
  ],
  responses: {
    200: {
      description: 'A list of worlds that match the requested name.',
      schema: {
        $ref: '#/definitions/UserResponse'
      }
    },
    default: {
      description: 'Error',
      schema: {
        $ref: '#/definitions/Error'
      }
    }
  }
});
const deleteUserFollower = ({
  description: 'Get User Detail',
  operationId: 'update user',
  parameters: [
    { name: 'userId', type: 'string', in: 'path', required: true},
    {
      in: 'body', schema: {
        $ref: '#/definitions/UserUnFollowRequest'
      }, name: 'userRequest'
    }
  ],
  responses: {
    200: {
      description: 'A list of worlds that match the requested name.',
      schema: {
        $ref: '#/definitions/UserFollowRequest'
      }
    },
    default: {
      description: 'Error',
      schema: {
        $ref: '#/definitions/Error'
      }
    }
  }
});

export default function (userService) {
  const operations = {
    PUT,
    DELETE
  };

  function PUT(req, res) {
    const {userId } = req.params;
    const userUpdatePayload = req.body;
    userService.updateUserFollower(userId, userUpdatePayload, (err, data)=> genericCallback(err, data, res))
  }
  function DELETE(req, res) {
    return null;
  }
  PUT.apiDoc = putDoc;
  DELETE.apiDoc = deleteUserFollower;
  return operations;
}