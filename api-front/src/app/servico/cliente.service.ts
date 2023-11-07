import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  // Caminho da Url, para API Back-end
  private url:string = 'http://localhost:8080';

  /*Construtor (realizar requisições da API)
  Necessita dele para cadastrar, selecionar, alterar e remover */ 
  constructor(private http:HttpClient) { }
}
