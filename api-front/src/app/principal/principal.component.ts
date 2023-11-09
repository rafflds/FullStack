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


  // Quando selecionar um cliente específico
  selecionarCliente(posicao:number):void{

    // seleciona o cliente
    this.cliente = this.clientes[posicao];

    // Os botões ficarão invisiveis
    this.btnCadastro = false;
    this.tabela = false;

  }


  // Método de editar
  editar():void{
    this.servico.editar(this.cliente)
    .subscribe(retorno => {

      // Obter posição do cliente
      let posicao = this.clientes.findIndex(obj=> {
        return obj.codigo = retorno.codigo;
      });

      // Alterar os dados do cliente
      this.clientes[posicao] = retorno;

      // Limpar formulário
      this.cliente = new Cliente();

      // Visibilidade
      this.btnCadastro = true;
      this.tabela = true;

      // Mensagem
      alert('Cliente alterado com sucesso!')
    })
  }
  


  // Método de remover clientes
  remover():void{
    this.servico.remover(this.cliente.codigo)
    .subscribe(retorno => {

      // Obter posição do cliente
      let posicao = this.clientes.findIndex(obj=> {
        return obj.codigo = this.cliente.codigo;
      });

      // Remover cliente 
      this.clientes.splice(posicao, 1);

      // Limpar formulário
      this.cliente = new Cliente();

      // Visibilidade
      this.btnCadastro = true;
      this.tabela = true;

      // Mensagem
      alert('Cliente removido com sucesso!')
    })
  }


  // Método para cancelar
  cancelar():void{
    
     // Limpar formulário
     this.cliente = new Cliente();

     // Visibilidade
     this.btnCadastro = true;
     this.tabela = true;

  }


  // Método de inicialização (Nativo do Angular)
  ngOnInit(){
    this.selecionar();
  }


}
