
import path from 'path';
import config from 'config'
import {s3} from '../../configuration'
import base64Img from 'base64-img'
import fs from 'fs'
export const uploadImage = (userNamePrefix, imageName, imageBase64) => {

    var keyName = path.join(userNamePrefix, imageName);
    const bucketName = config.S3Bucket.bucketName;

    const params = {
        Bucket: bucketName,
        Key: 'cat.jpg', // File name you want to save as in S3
        Body: imageBase64
    };

    var dataBase64 = Buffer.from(imageBase64).toString('base64');
    fs.writeFileSync('test.jpg', dataBase64);

    console.log(dataBase64)
    // s3.upload(params, function(err, data) {
    //     if (err) {
    //         throw err;
    //     }
    //     console.log(`File uploaded successfully. ${data.Location}`);
    // });
}