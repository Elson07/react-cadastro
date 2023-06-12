# Modelo genérico de Cadastro e Login em ReactJS com persistência de dados no Firebase 

Esta aplicação é um modelo genérico de Cadastro e Login feito em React JS.

Cadastro é o processo que consiste em 5 etapas para persistência de dados no Firestore Database, e estas etapas são feitas por meio de dois botões de navegações "Voltar" e "Próximo".

O logi é o processo de autenticação e acessos ao recursos por meio do Authentication do Firebase. 

link https://app-cadastro.netlify.app/

## Etapas do Cadastro e inputs 

* Identificação 
	* Nome 
	* Sobrenome 
	* Data de nascimento 
	* CPF
* Contato 
	* E-mail
	* Telefone\Celular 1:
	* Telefone\Celular 2:  
* Endereço
	* Logradouro
	* Número
 	* Bairro
	* CEO
	* Cidade
	* UF
* Usuário 
	* Nome/Apelido de usuário
	* Senha 
	* Confirmar senha 
* Carteira
	* Crédito
	* Debito
	* Boleto 
	* PIX
* Resumo
 	* Retorna os dados preenchidos nas etapas anteriores 

### Regras para realizar o cadastro
 
* O usuário deve preencher todos os campos que possuam asterisco ( * ).
* Os capôs que não possuem asterisco são opcionais. 
* O usuário pode retroceder a etapa do cadastro e editar os capôs, isto é, antes de clicar em confirmar. 
* Após clicar em confirmar os dados são persistidos no Firestore Database, e como os dados de configuração são seciáveis, por questão de segurança eu as adicionei a variáveis de ambiente criptografadas. 

## Etapa login 
* Autenticação 
	* Usuário
	* Senha 

### Regras para realizar o login 

* O usuário pode digitar no campo usuário o nome/apelido que criou no cadastro, ou e-mail.
* Em senha ele digita a senha que avia cadastrado.
* Caso usuário e senha esteja corretos, o usuário consegue ter acesso aos recursos 
* Caso usuário e senha estejam incorretos o acesso é negado, e retorna ao mesmo uma notificação de usuário e sanha inválidos. 
 	




