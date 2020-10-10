# Angular

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

> ## Extras

### Lint-staged + Husky + TsLint + Prettier
* Nossos programas podem não estarem isentos de erros, mas se for consistente e legível, é mais fácil de depurar e manter o mesmo. Essas ferramentas destinam-se apenas a reduzir a chance de surgirem problemas em potencial. No final do dia, você e / ou sua equipe são os responsáveis ​​por garantir que seu código seja fácil de ler.

![alt text](https://github.com/LauanGuermandi/Desafio-Angular/blob/develop/src/assets/images/commit.jpg?raw=true)

![alt text](https://github.com/LauanGuermandi/Desafio-Angular/blob/develop/src/assets/images/push.jpg?raw=true)
