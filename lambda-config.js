module.exports = {
  region: 'ap-northeast-1',
  handler: 'index.handler',
  role: 'arn:aws:iam::882219098944:role/lambda_s3_exec_role',
  functionName: 'gulpSample',
  timeout: 10
  // eventSource: {
  //  EventSourceArn: <event source such as kinesis ARN>,
  //  BatchSize: 200,
  //  StartingPosition: "TRIM_HORIZON"
  //}
}