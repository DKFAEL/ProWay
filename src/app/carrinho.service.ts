import { Injectable } from '@angular/core';
import { IProdCar } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  
  itens: IProdCar[] = []

  constructor() { }

  obterCarrinho() {
     return JSON.parse(localStorage.getItem("carrinho") || "");
  }

  adicionarAoCarrinho(produto: IProdCar) {
    this.itens.push(produto);
    localStorage.setItem("carrinho", JSON.stringify(this.itens))
  }

  limparCarrinho() {
    this.itens = [];
    localStorage.clear();
  }
}
