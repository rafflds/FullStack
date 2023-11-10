# Fullstack
Projeto de cadastro de pessoal, com Springboot e Angular

# Back-end

## Softwares utilizados:

* JDK: https://www.oracle.com/java/technolog...

* Visual Studio Code: https://code.visualstudio.com/

* MySQL: https://dev.mysql.com/downloads/mysql/

* Node.js: https://nodejs.org/en/

* Google Chrome: https://www.google.com.br/chrome/inde...

* Docker com Jenkins


## Extensões do Visual Studio Code:

* Extension Pack for Java: https://marketplace.visualstudio.com/...

* Spring Boot Extension Pack: https://marketplace.visualstudio.com/...

* Lombok Annotations Support for VS Code 

* MySQL: https://marketplace.visualstudio.com/...

* Thunger Client


## Especifícações do projeto Back-end
* Versão do Spring Boot: 3.0.1
* Linguagem: Java
* Grupo: br.com.projeto
* Id: api
* Tipo de empacotamento: JAR
* Versão do Java: 17
* Dependências:
      - Spring Boot DevTools
      - Spring Web
      - Spring Data JPA
      - MySQL Driver
      - Lombok

## Criar o projeto Spring no VSCode
* View:
  - Command Palette
  - spring initializr: Create a Maven Project
  -  3.1.5
  - java
  - br.com.projeto
  - api
  - jar
  - 17
    
* Dependencias do Spring
  - Springboot DevTools
  - Spring Web
  - Spring Data JPA SQL
  - Mysql Driver SQL
  - Lombok

* Pastas
  - controle: Controle (ficaram as rotas)
  - modelo: Cliente.java (criar a tabela do banco de dados; Trafega informações atraves da API)
  - repositorio: Repositorio(ações SQL: Alterar, Atualizar, Acrescentar...)

* Banco de Dados 
  - Configuração do arquivo application.properties:
      #### Altera a estrutura da tabela caso a entidade tenha mudanças.
      spring.jpa.hibernate.ddl-auto=update
      
      #### Acesso ao banco de dados
      spring.datasource.url=jdbc:mysql://${MYSQL_HOST:localhost}:3306/nome_base_de_dados
      
      #### Usuário do banco de dados
      spring.datasource.username=usuário
      
      #### Senha do banco de dados
      spring.datasource.password=senha

# Front-end

## Softwares utilizados:
* Visual Studio Code: https://code.visualstudio.com/
* Angular: https://angular.io
* Bootstrap: https://getbootstrap.com

## Criar o projeto Angular no VSCode
* Terminal:
   - npm install -g @angular/cli  (instalar o angular)
   - npm v  (visulizar a versão instalada) = 16.2.9 - Angular | 18.16.0 - Node | 9.5.1 - NPM
   - ng new api-front (vai criar o projeto, com nome api-front)
   - ng g c principal (criar componente)
   - ng g s servico/cliente (Camada de serviços)

* Dependencias do Angular  
   - Would you like to add Angular routing? (y/N) N
   - Which stylesheet format would you like to use? CSS
  
