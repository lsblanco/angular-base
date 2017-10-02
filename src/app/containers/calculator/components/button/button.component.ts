import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'base-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})

export class ButtonComponent implements OnInit {
  style: string= 'Button';
  @Input() value: string;
  @Input() type: string;
  @Output() clickButton = new EventEmitter();
 
  constructor(){ }

  ngOnInit() {
    if (this.type === 'operator') this.style = "ButtonOperate";
    else if (this.type === 'zero') this.style = "ButtonZero";
  }

  onClick(event) {
    this.clickButton.emit(this.value);
  }

}