import {genericCallback }  from '../../utils'
const postDoc = ({
  description: 'Returns worlds by name',
  operationId: 'createNewUser',
  consumes: ['application/json'],
  parameters: [
    {
        in: 'body', schema: {
            $ref: '#/definitions/UserPolicyRequest'
        }, name: 'userRequest'
    }
  ],
  responses: {
    200: {
      description: 'The user that was created',
      schema: {

      }
    },
    default: {
      description: 'ERROR',
      schema: {
        $ref: '#/definitions/Error'
      }
    }
  }
});


export default function (userService) {
  const operations = {
    POST
  };

  function POST(req, res) {
    userService.createNewUser(req.body, (err, data)=> genericCallback(err, data, res))
  }
  POST.apiDoc = postDoc;
  return operations;
}