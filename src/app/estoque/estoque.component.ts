import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estoque',
  templateUrl: './estoque.component.html',
  styleUrls: ['./estoque.component.scss']
})
export class EstoqueComponent implements OnInit {

  estoque = [
    { id: 1, title: 'furadeira', price: 400, stock: 11 },
    { id: 2, title: 'mesa', price: 1000, stock: 21 },
    { id: 3, title: 'prego', price: 10, stock: 110 },
  ];

  constructor() { }

  ngOnInit() {
  }

  changeStockValue(evento) {
    let productToUpdate = this.estoque.find(item => item.id === evento.id);
    productToUpdate.stock = productToUpdate.stock + evento.updatedStockValue;
  }

}
