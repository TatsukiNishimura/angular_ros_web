import { Component, OnInit } from '@angular/core';
import { String, RoslibService } from '../ros.service';
@Component({
  selector: 'app-ros',
  templateUrl: './ros.component.html',
  styleUrls: ['./ros.component.scss'],
})
export class RosComponent implements OnInit {
  title = 'ng-roslib';

  active = 1;
  connected = false;
  message = '';

  constructor(private roslibService: RoslibService) {
    this.roslibService.chat.subscribe((msg: String) => {
      this.message = msg.data;
    });
    this.roslibService.connected.subscribe((connected: boolean) => {
      this.connected = connected;
    });
    this.roslibService.publishMsgToTopics();
  }
  publishMsg(msg: string): void {
    console.log(msg);
    this.roslibService.publish(msg);
  }
  ngOnInit(): void {}
}