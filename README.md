# Simple Authentication Demo

![login-page](https://github.com/user-attachments/assets/fdd32bf2-7de3-498b-a3a5-475e626ec028)

Uma simples demonstração de um sistema de autenticação usando Spring Boot e React.

## Pré-requisitos

- Java 17 ou superior
- Node 20 ou superior
- Docker (para usa um banco de dados *conteinerizado*)

## Características

- Backend
 - API reativa desenvolvida com Spring Boot Webflux
 - Método de autenticação usando JSON Web Token (JWT):
   - *Access Token*
   - *Refresh Token*
     - Retornado para o cliente em um *Cookie* `HttpOnly`.
- Frontend
  - Desenvolvido com React
  - Após efetuado o login:
    1. O *Access Token* é salvo no `localStorage` do navegador e usado no contexto de autenticação
    2. **Se o Access Token estiver presente** redireciona o usuário para uma nova página, confirmando o êxito do login
