package br.com.projeto.api.controle;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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


    /*
     Listar os registros adicionados
     (GET) localhost:8080  - Thunder client
     */
    @GetMapping("/")
    public Iterable<Cliente> selecionar(){
        return acao.findAll();
    }


    /*
     Alterar os registros já salvos
     (PUT) localhost:8080 -Thunder Client
     */
    @PutMapping("/")
    public Cliente editar(@RequestBody Cliente c){
        return acao.save(c);
    }
 

    /*
     Deletar os registros já salvos, pelo seu 'id'
     (DEL) localhost:8080/4  -Thunder Client
    */
    @DeleteMapping("/{codigo}")
    public void remover(@PathVariable long codigo){
        acao.deleteById(codigo);
    }
 
 
  
    // Método de retorno para testar 
    /*@GetMapping("/")
    public String teste(){
        return "Hello World!";
    }
    */
    
}
