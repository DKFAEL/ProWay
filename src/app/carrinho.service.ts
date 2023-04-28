import { Injectable } from '@angular/core';
import { IProdCar } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  
  itens: IProdCar[] = []

  constructor() { }

  obterCarrinho() {
      this.itens = JSON.parse(localStorage.getItem("carrinho") || "[]");

      return this.itens;
  }

  adicionarAoCarrinho(produto: IProdCar) {
    this.itens.push(produto);
    localStorage.setItem("carrinho", JSON.stringify(this.itens))
  }

  limparCarrinho(produtoId: number) {
    this.itens = this.itens.filter(item => item.id !== produtoId);
    localStorage.setItem("carrinho", JSON.stringify(this.itens))
  }
}
