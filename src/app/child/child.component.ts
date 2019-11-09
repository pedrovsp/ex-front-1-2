import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input() familia;
  @Output() evento = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  emitir() {
    this.evento.emit('opa!');
  }

}
