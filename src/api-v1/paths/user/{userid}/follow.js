import {genericCallback }  from '../../../../utils'
const petDoc = ({
  description: 'Get User Detail',
  operationId: 'update user',
  parameters: [
    { name: 'userName', type: 'string', in: 'path', required: true},
    {       in: 'body', schema: {
      $ref: '#/definitions/UserFollowerRequest'
  }, name: 'userRequest'}
  ],
  responses: {
    200: {
      description: 'A list of worlds that match the requested name.',
      schema: {
        $ref: '#/definitions/UserFollowerRequest'
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
    PUT
  };

  function PUT(req, res) {
    const {userName } = req.params;
    userService.getUser(userName, (err, data)=> genericCallback(err, data, res))
  }
  PUT.apiDoc = petDoc;
  return operations;
}