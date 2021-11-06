import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html'
})
export class ErrorMessageComponent implements OnInit {

  @Input() error:boolean;
  @Input() messageError:string;
  constructor() { 
    this.error = false;
  }

  ngOnInit(): void {
  }

}
