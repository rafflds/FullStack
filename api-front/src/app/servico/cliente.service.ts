import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../modelo/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  // Caminho da Url, para API Back-end
  private url:string = 'http://localhost:8080';

  /*Construtor (realizar requisições da API)
  Necessita dele para cadastrar, selecionar, alterar e remover */ 
  constructor(private http:HttpClient) { }

  // Método para selecionar todos os clientes
  selecionar():Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.url);
  }

  /*
  Método para cadastrar clientes 
  - obter os dados do banco cliente
  - Observable: vai retorna o cliente com estas informações
  */ 
  cadastrar(obj:Cliente):Observable<Cliente>{
    return this.http.post<Cliente>(this.url, obj);
  }
}
