import { Component } from '@angular/core';
import { Cliente } from '../modelo/Cliente';
import { ClienteService } from '../servico/cliente.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {

  // Objeto do tipo cliente
  cliente = new Cliente();

  // Variável para visibilidade dos botões
  btnCadastro:boolean = true;

  // Json de clientes
  clientes:Cliente[] = [];

  // LIberando acesso ao cliente.service.ts
  constructor(private servico:ClienteService){}

  // Método de seleção de clientes(sem retorno)
  selecionar():void{
    // Acessando o método do cliente.service.ts (seleção de * clientes)
    this.servico.selecionar()
    .subscribe(retorno => this.clientes = retorno);  // retorno = lista de clientes
  }

  // Método de inicialização (Nativo do Angular)
  ngOnInit(){
    this.selecionar();
  }


}
