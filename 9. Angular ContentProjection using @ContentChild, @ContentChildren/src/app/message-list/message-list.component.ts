import { Component, OnInit, ContentChild, AfterContentInit, ContentChildren, QueryList } from '@angular/core';
import { MessageComponent } from '../message/message.component';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit, AfterContentInit {
  constructor() { }
  ngOnInit() {
  }
  @ContentChild(MessageComponent) firstProjectedMessageComponent: MessageComponent
  @ContentChild('projectedTemplateRef') firstProjectedTemplateRefMessageComponent: MessageComponent
  @ContentChildren(MessageComponent) allProjectedMessageComponents: QueryList<MessageComponent>

  ngAfterContentInit() {
    this.firstProjectedMessageComponent.Message = 'This projected message also changed';
    this.allProjectedMessageComponents.toArray().map((item, index) => {
      item.Message = `Projected message was changes in message-list component of ngAfterContentInit  ${index}`
    })
    this.firstProjectedTemplateRefMessageComponent.Message = 'firstProjectedTemplateRefMessageComponent'
  }
}
