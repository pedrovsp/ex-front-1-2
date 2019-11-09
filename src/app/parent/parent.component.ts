import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  familia = [
    { nome: 'vitor', sobrenome: 'carvalho' },
    { nome: 'camila', sobrenome: 'carvalho' },
    { nome: 'vitor', sobrenome: 'carvalho' },
  ];

  constructor() { }

  ngOnInit() {
  }

  alerta(evento) {
    alert(evento);
  }

}
