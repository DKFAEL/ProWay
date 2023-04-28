import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from '../carrinho.service';
import { IProdCar } from '../produtos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements   OnInit {

  itensCarrinho: IProdCar[] = []

  total = 0;

  constructor(
    public CarrinhoService: CarrinhoService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.itensCarrinho = this.CarrinhoService.obterCarrinho();
    this.calcularTotal();
    
  }

  calcularTotal() {
    this.total = this.itensCarrinho.reduce((prev, curr) => prev + (curr.preco * curr.quantidade), 0)
  }

  removeProdutoCarrinho(produtoId: number) {
    this.itensCarrinho = this.itensCarrinho.filter(item => item.id !== produtoId);
    this.CarrinhoService.limparCarrinho(produtoId);
    this.calcularTotal();
  }

  comprar() {
    alert("Compra Finalizada!!!")
    this.CarrinhoService.limparCarrinho(0)
    this.route.navigate(["produtos"])
  }

}
