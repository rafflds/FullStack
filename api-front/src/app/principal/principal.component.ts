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

  // Variável para visibilidade da tabela
  tabela:boolean = true;


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


  // Método de seleção de clientes(sem retorno)
  cadastrar():void{
    // Acessando o método do cliente.service.ts (seleção de * clientes)
    this.servico.cadastrar(this.cliente)
    .subscribe(retorno => {

      // Cadastrar o cliente no vetor
      this.clientes.push(retorno);     // retorno = lista de clientes

      // Limpar formulário
      this.cliente = new Cliente();

      // Mensagem
      alert('Cliente cadastrado com sucesso!')
    });  
  }


  // Método para selecionar um cliente específico
  selecionarCliente(){
    
  }


  // Método de inicialização (Nativo do Angular)
  ngOnInit(){
    this.selecionar();
  }


}
