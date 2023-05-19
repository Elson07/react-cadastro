# Aplicação de Cadastro em ReactJS

Esta aplicação é um modelo de sistema para cadastro de usuário e login, este mesmo modelo pode ser aplicado a qualquer modelo de aplicação, a princípio ele possui alguns inputs e states pré definidos, mas é possível configurá-lo conforme a necessidade da aplicação, além disso também estou usando o bootstrap, para tornar a página responsiva, sendo necessário a instalação do react-bootstrap e bootstrap “raiz”, e o react-router-dom para trabalhar com rotas. 

Se atente a essas duas dependências. 

Comando para instalação do react-bootstrap
<pre>
	npm install react-bootstrap bootstrap
</pre>

Comando para instalação do bootstrap “raiz”

<pre>
	npm install bootstrap@5.3.0-alpha3
</pre>

Comando para instalação do react-router-dom

<pre>
	npm install react-router-dom
</pre>

Com relação ao reac-bootstrap, importe o css para  diretório "src" no arquivo index.js
<pre>
	import  'bootstrap/dist/css/bootstrap.min.css';
</pre>

## Classe cadastro 
A classe cadastro algumas funções, na qual renderizam no render, sendo eles

* Cabeçalho 
* Corpo do formulário
* Botão de navegação 

### Cabeçalho
O cabeçalho é um container que possui dois espaços, um para uma img link para pagina inicial, e outro para o título "Cadastro" 
  
### Corpo do formulário
O corpo do formulário é onde é renderizado os inputs, sendo que este inputs são divididos em etapas identificação, contato, endereço, usuário, carteira e resumo.<br/>
 
### Botão de navegação 
No botão de navegação é onde determina o que vais ser rederizado no corpo do formulário, neste caso o usuário inicia em identificação, ao preencher todos os campos obrigatórios, o usuário é direcionado para a próxima etapa é e contato, na qual preenche os inputs assim como na etapa anterior, porem com dados pertinentes a sua respectiva área, e assim sucessivamente, até chegar em resumo onde o mesmo vai poder checar os dados, podendo confirmar o cadastro ou editar, ou cancelar. 

##Resultado
Após o usuário realizar o cadastro e os dados estarem persistidos em um banco de dados o usuário podera fazer o login. 

Obs. O foco desta aplicação é cadastro e não o login, poir isso o classe login é mais simples. 
