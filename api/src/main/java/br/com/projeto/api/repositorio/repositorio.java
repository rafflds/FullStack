package br.com.projeto.api.repositorio;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import br.com.projeto.api.modelo.Cliente;

// Ações SQL (alterar, excluir, cadastrar...)
@Repository                     // Cliente = class criou a tabela
public interface Repositorio extends CrudRepository<Cliente, Long> {
    
}
