import { Component, OnInit, ViewChild, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { MessageComponent } from '../message/message.component';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit, AfterViewInit {

  // Here instance firstMessageComponent, allMessageComponents as access Message which is @input to messagecomponent.

  @ViewChild(MessageComponent) firstMessageComponent: MessageComponent;
  @ViewChildren(MessageComponent) allMessageComponents: QueryList<MessageComponent>;

  //template reference view child
  @ViewChild('templateRefMessage') firstMessageComponentUsingTemplateRef: MessageComponent;

  constructor() { }

  ngOnInit() {
    // this.firstMessageComponent.Message = 'this was changed from message-list component';
    // Here we can't change message, as child won't be initialized.
  }
  ngAfterViewInit() {
    // 1----->
    // this.firstMessageComponent.Message = 'this was changed from message-list component';

    // 2----->
    // it will iterate all messagecompoents and we are changing those messages
    this.allMessageComponents.toArray().map((item, index) => {
      item.Message = `this was changed from message-list component ${index}`
    });

    // 3----->
    // using template reference
    this.firstMessageComponentUsingTemplateRef.Message = 'changes in message-list component using template reference'
  }
  public messagelist = ['message1', 'message2', 'message3', 'message4'];
}
