import {genericCallback }  from '../../utils'
const getDoc = ({
  description: 'Returns worlds by name',
  operationId: 'getWorlds',
  parameters: [
    {name: 'worldName', type: 'string', in: 'path', required: true}
  ],
  responses: {
    200: {
      description: 'A list of worlds that match the requested name.',
      schema: {
        $ref: '#/definitions/WorldResponse'
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


export default function (worldService) {
  const operations = {
    GET
  };

  function GET(req, res) {
    worldService.getWorlds(req, (err, data)=> genericCallback(err, data, res))
  }
  GET.apiDoc = getDoc;
  return operations;
}