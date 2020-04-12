import {genericCallback }  from '../../../utils'
const getDoc = ({
  description: 'Get User Detail',
  operationId: 'getUser',
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
    GET
  };

  function GET(req, res) {
    const {userName } = req.params;
    userService.getUser(userName, (err, data)=> genericCallback(err, data, res))
  }
  GET.apiDoc = getDoc;
  return operations;
}