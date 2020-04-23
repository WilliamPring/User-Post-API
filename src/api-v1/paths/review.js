import {genericCallback }  from '../../utils'
const postDoc = ({
  description: 'Returns worlds by name',
  operationId: 'createReview',
  tags: ['Review'],
  consumes: ['application/json', 'multipart/form-data'],
  parameters: [
    {
        in: 'body', schema: {
            $ref: '#/definitions/UserReviewRequest'
        }, name: 'userRequest'
    },
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
    console.log(req.files.image); // the uploaded file object
    reviewService.createReview(req.body, (err, data)=> genericCallback(err, data, res))
  }

  POST.apiDoc = postDoc;
  return operations;
}