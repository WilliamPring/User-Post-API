module.exports = ({
    baseUrl: 'www.google.com',
    graphqlUrl: 'http://localhost:3004/',
    S3Bucket: {
        bucketName: 'foodie-s3',
        id: '',
        secret: ''
    },
    //amqp://admin:pass@localhost
    Queue: {
        url: 'localhost',
        user: 'admin',
        secret: 'pass',
        topic: {
            image: 'user.review.image',
            error: 'app.alert.error',
            warning: 'app.alert.warning'
        }
    }
})