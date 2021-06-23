// import { OperationRequest, OperationReply } from './../generated/calculate_pb.d';
import { Component, OnInit } from '@angular/core';
import { grpc } from '@improbable-eng/grpc-web';
import { OperationReply, OperationRequest } from 'src/generated/calculate_pb';
import { CalculateClient, ServiceError } from 'src/generated/calculate_pb_service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'grpc-poc';
  
  ngOnInit(): void {
    const client = new CalculateClient('https://7478f5560f29.ngrok.io');

    const req = new OperationRequest();
    req.setNum1(5);
    req.setNum2(4);
    req.setTypeoperation(1);

    const metadata = new grpc.Metadata();
    metadata.set('Access-Control-Allow-Origin', '*');

    client.operation(req, metadata, (error: ServiceError | null, response: OperationReply | null) => {
      console.log('error', error);
      console.log('response', response);
      console.log('response.message', response?.getMessage());
    });
  }

}
