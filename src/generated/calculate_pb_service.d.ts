// package: calc
// file: calculate.proto

import * as calculate_pb from "./calculate_pb";
import {grpc} from "@improbable-eng/grpc-web";

type CalculateOperation = {
  readonly methodName: string;
  readonly service: typeof Calculate;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof calculate_pb.OperationRequest;
  readonly responseType: typeof calculate_pb.OperationReply;
};

export class Calculate {
  static readonly serviceName: string;
  static readonly Operation: CalculateOperation;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class CalculateClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  operation(
    requestMessage: calculate_pb.OperationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: calculate_pb.OperationReply|null) => void
  ): UnaryResponse;
  operation(
    requestMessage: calculate_pb.OperationRequest,
    callback: (error: ServiceError|null, responseMessage: calculate_pb.OperationReply|null) => void
  ): UnaryResponse;
}

