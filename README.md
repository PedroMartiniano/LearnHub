# LearnHub
Olá! Você está em um de meus principais projetos!
Neste projeto feito em Node.js, eu constriu uma API Rest para um website de venda de cursos.
Ele é feito utilizando TypeScript, bibliotecas como o express, prismaORM, jsonwebtoken(JWT), bcrypt, entre outras.
Foi utilizado o ambiente docker para virtualização do banco de dados enquanto a API estava em desenvolvimento,
porém, no momento o banco de dados já está hospedado virtualmente, assim como o servidor!
para acessar o servidor API, a URL padrão é https://server-learnhub.onrender.com.
Nela você pode criar usuários, realizar logins, entre diversas outras funcionalidades!
## Endpoints
### POST /alumn/create
Endpoint responsável por cadastrar um novo aluno na API.

Disponível para teste em: https://server-learnhub.onrender.com/alumn/create
#### Parâmetros
first_name: Primeiro nome do aluno

last_name: ultimo nome do aluno

cpf: cpf do aluno(exatamente 11 caracteres)

email: email do aluno(necessário ser um email válido)

password: senha do aluno(mínimo 6 caracteres)

Exemplo:
```
{
	"first_name": "first",
	"last_name": "alumn",
	"cpf": "12345678911",
	"email": "alumn@gmail.com",
	"password": "123456"
}
```
#### Resposta
##### Created! 201
Retorna uma mensagem de sucesso caso o usuário for criado corretamente!
##### Error! 400
Retorna uma mensagem de erro caso o usuário não for cadastrado.

### POST /users/login
Endpoint responsável por realizar o login de um aluno cadastrado.

Disponível para teste em: https://server-learnhub.onrender.com/user/login
#### Parâmetros
email: email do usuário cadastrado

password: senha do usuário cadastrado

Exemplo:
```
{
	"email": "alumn@gmail.com",
	"password": "123456"
}
```
#### Resposta
##### OK! 200
Retorna o token de acesso do usuário
Exemplo:
```
{
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQyYzY1ZjFkLTgyNTctNGRlYi1hZTI2LTgwM2Y2MmQ0MDAxMSIsImlkX3VzZXIiOiIwZWZjZTk4My05OTIwLTRiMTgtOGZjNy0xMzEzYTg4MmZlYTAiLCJpYXQiOjE2OTM0MDQ5ODMsImV4cCI6MTY5MzQ5MTM4M30.EDJWaFNxDgkHWfc63k86SLsxxDCVjK7S4H7lmXn7X-I"
}
```
#### Bad Request! 400
Retorna uma messagem de acesso negado.
Exemplo:
```
{
	"success": false,
	"message": "Email or password invalid"
}
```
