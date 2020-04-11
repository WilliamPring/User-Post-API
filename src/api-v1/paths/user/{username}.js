import {genericCallback }  from '../../../utils'
const getDoc = ({
  description: 'Returns worlds by name',
  operationId: 'followUser',
  parameters: [
    { name: 'user', type: 'string', in: 'query', required: true}
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

    userService.getUser("data", (err, data)=> genericCallback(err, data, res))
  }
  GET.apiDoc = getDoc;
  return operations;
}