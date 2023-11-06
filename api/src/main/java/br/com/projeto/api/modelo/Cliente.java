package br.com.projeto.api.modelo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

/*criar a tabela do banco de dados; 
  Trafega informações atraves da API */

@Entity
@Table(name = "clientes")  
@Getter
@Setter
public class Cliente {

    @Id    // id do tipo auto_increment
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long codigo;

    private String nome;

    private int idade;

    private String cidade;
    
}
