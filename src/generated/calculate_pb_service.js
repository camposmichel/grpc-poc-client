// package: calc
// file: calculate.proto

var calculate_pb = require("./calculate_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Calculate = (function () {
  function Calculate() {}
  Calculate.serviceName = "calc.Calculate";
  return Calculate;
}());

Calculate.Operation = {
  methodName: "Operation",
  service: Calculate,
  requestStream: false,
  responseStream: false,
  requestType: calculate_pb.OperationRequest,
  responseType: calculate_pb.OperationReply
};

exports.Calculate = Calculate;

function CalculateClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

CalculateClient.prototype.operation = function operation(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Calculate.Operation, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.CalculateClient = CalculateClient;

