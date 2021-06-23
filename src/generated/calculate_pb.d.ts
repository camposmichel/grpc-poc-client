// package: calc
// file: calculate.proto

import * as jspb from "google-protobuf";

export class OperationRequest extends jspb.Message {
  getNum1(): number;
  setNum1(value: number): void;

  getNum2(): number;
  setNum2(value: number): void;

  getTypeoperation(): number;
  setTypeoperation(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OperationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: OperationRequest): OperationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OperationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OperationRequest;
  static deserializeBinaryFromReader(message: OperationRequest, reader: jspb.BinaryReader): OperationRequest;
}

export namespace OperationRequest {
  export type AsObject = {
    num1: number,
    num2: number,
    typeoperation: number,
  }
}

export class OperationReply extends jspb.Message {
  getMessage(): number;
  setMessage(value: number): void;

  getError(): string;
  setError(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OperationReply.AsObject;
  static toObject(includeInstance: boolean, msg: OperationReply): OperationReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OperationReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OperationReply;
  static deserializeBinaryFromReader(message: OperationReply, reader: jspb.BinaryReader): OperationReply;
}

export namespace OperationReply {
  export type AsObject = {
    message: number,
    error: string,
  }
}

