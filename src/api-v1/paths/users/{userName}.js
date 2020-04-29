import {genericCallback }  from '../../../utils'
const getDoc = ({
  description: 'Get User Detail',
  operationId: 'getUser',
  tags: ['User'],
  parameters: [
    { name: 'userName', type: 'string', in: 'path', required: true}
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
const putDoc = ({
  description: 'Get User Detail',
  operationId: 'updateUser',
  tags: ['User'],
  parameters: [
    { name: 'userName', type: 'string', in: 'path', required: true}
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

export default function (userService) {
  const operations = {
    GET,
    PUT
  };

  function GET(req, res) {
    const {userName } = req.params;
    userService.getUser(userName, (err, data)=> genericCallback(err, data, res))
  }
  function PUT(req, res) {
    userService.updateUser(req.body, (err, data)=> genericCallback(err, data, res))
  }
  PUT.apiDoc = putDoc;
  GET.apiDoc = getDoc;
  return operations;
}