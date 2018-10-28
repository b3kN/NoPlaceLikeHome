import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent {
  @Input() message = { body: '', type: '', active: false };

  setMessage(body, type, time = 4000) {
    this.message.body = body;
    this.message.type = type;
    this.message.active = true;
    setTimeout(() => { this.message.active = false; }, time);
  }
  
  checkMessageType() {
    if (this.message.type == 'valid') {
      return 'valid fa-check';
    }
    
    if (this.message.type == 'danger') {
      return 'danger fa-close';
    }
    
    if (this.message.type == 'default') {
      return 'fa-info';
    }
    
    return null;
  }
}