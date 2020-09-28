import logger from "../../helpers/logins/login.helper";

var moment = require('moment');
const AWS = require('aws-sdk');

const s3 = new AWS.S3();
const myBucket = 'squint-crawler-jsons';

/**
 * Autor: Christopher siverio
 * fecha: 21-07-2020
 */
export const uploadS3 = async (json: any, chanel = "metions", folder = "v2", api = "metions") => {

  const date: Date = new Date();

  const myKey = `${chanel}/${folder}/repository/${api}_${moment(date).format("YYYYMMDDHHmmss")}${Math.random()}.json`

  let params = {
    Bucket: myBucket,
    Key: myKey,
    ACL: 'public-read',
    ContentType: 'application/json',
    Body: JSON.stringify(json),
  }
  
  let putObjectPromise = s3.putObject(params).promise();

  await putObjectPromise.then((data: any) => {
    logger.debug(`Successfully uploaded data to  ${myBucket}/${myKey}`);
    return 1
  }).catch((err: any) => {
    logger.error(`Unable to upload file: ${myBucket}/${myKey} to upload to s3`, err)
    return 0;
  });

  return 1
}