import {genericCallback }  from '../../../../utils'
const postDoc = ({
  description: 'Returns worlds by name',
  operationId: 'createImagesForReview',
  tags: ['Review'],
  consumes: ['multipart/form-data'],
  parameters: [
    {
      name: 'image',
      in: 'formData',
      description: 'The first Image of your food',
      type: 'file'
    },
    {
      name: 'image1',
      in: 'formData',
      description: 'The second Image of your food',
      type: 'file'
    },
    {
      name: 'image2',
      in: 'formData',
      description: 'The three Image of your food',
      type: 'file'
    },
    {
      name: 'image3',
      in: 'formData',
      description: 'The four Image of your food',
      type: 'file'
    },
    {
      name: 'resterantId',
      in: 'formData',
      description: 'resterant uuid',
      type: 'string'
    },
    {
      name: 'reviewSummary',
      in: 'formData',
      description: 'Review Summary',
      type: 'string'
    },
    {
      name: 'starRating',
      in: 'formData',
      description: 'Star Rating to 5',
      type: 'integer'
    },
    {
      name: 'foods',
      in: 'formData',
      description: 'List of Food Names',
      type: 'array',
      items: {type: 'string'}
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





export default function (reviewService) {
  const operations = {
    POST,
  };

  function POST(req, res) {
    const data = [];
    console.log(req.body)
    reviewService.createImagesForReview(req.body, (err, data)=> genericCallback(err, data, res))
  }

  POST.apiDoc = postDoc;
  return operations;
}