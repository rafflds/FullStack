package br.com.projeto.api.controle;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.projeto.api.modelo.Cliente;
import br.com.projeto.api.repositorio.Repositorio;

@RestController
public class Controle {

    /*informam ao Spring para procurar uma instância adequada de uma classe de dependência 
    e injetá-la automaticamente no componente que requer essa dependência. */
    @Autowired  
    private Repositorio acao;

    
    /*
    Rota de cadastramento de clientes
    * Thunder Client
    * (Post) localhost:8080
    {
        "nome":"Thales",
        "idade": 5,
        "cidade":"Candangolândia"
    }
    */ 
    @PostMapping("/")
    public Cliente cadastrar(@RequestBody Cliente c){
        return acao.save(c);
    }
 
 
 
 
 
 
 
    // Método de retorno para testar 
    /*@GetMapping("/")
    public String teste(){
        return "Hello World!";
    }
    */
    
}
