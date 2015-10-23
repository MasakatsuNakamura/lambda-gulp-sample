console.log('Loading function');

var aws = require('aws-sdk');
var s3 = new aws.S3({apiVersion: '2006-03-01'});
exports.handler = function(event, context) {
  console.log('Received event:', JSON.stringify(event, null, 2));
  var param ={Bucket:"sanix-data-analysis", Key:"fhRK0XGVb3cR1r1S3x9j3j3DRFGUyRYC/pv_sensors.json"};
  s3.getObject(param, function(err,data) {
    if (err) {
        context.fail(err.message);
    } else {
      var pvsensors = JSON.parse(data.Body);
      var resp = {};
      resp['Received event'] = event;
      for (var key in pvsensors) {
        var pvsensor = pvsensors[key];
        var items = [];
        items.push(key);
        for (var item in pvsensor) {
          items.push(pvsensor[item]);
        }
        var line = items.join(",").replace(/[\r\n]+/, " ");
        if (line.indexOf(event.query) != -1) {
          resp[key] = pvsensor["発電所名"];
        }
      }
      context.succeed(resp);
    }
  });
};

