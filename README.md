# Bem vindo!

## Problema
``` Usando Angular 8, crie um componente para exibir os nomes e notas dos alunos (do exercício anterior) ao iniciar a página por um HTTP request. ```

> ## Princípios

* Single Responsibility Principle (SRP)
* Open Closed Principle (OCP)

> ## Design Patterns

* Factory

> ## Metodologias e Designs

* TDD
* Clean Architecture
* Conventional Commits

> ## Bibliotecas e Ferramentas
* Typescript
* Git
* Faker
* Husky
* Lint Staged


> ## Setup

``` bash
# Instalar depenências
npm install

# Executa o serviço de API fake para obtenção dos dados
json-server --watch src/assets/data/students.json

# Executa a aplicação
ng serve

# Roda os testes
npm run test
```