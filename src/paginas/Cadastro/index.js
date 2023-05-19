import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//Meu estilo
import "../../App.css";

//Icones
import ArrowLeft from '../../assets/Icones/arrow-left-short.svg'

import { Row, Col, Container } from 'react-bootstrap';

//xxl={1} xl={1} lg={1} md={1}  sm={1} xs={2

class Cadastro extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      titulo: ['Identificacao', 'Contato', 'Endereço', 'Usuário', 'Carteira', 'Resumo'],
      identificacao: ['','','',''],
      posicao: 0,
      nome: '',
      sobrenome: '',
      nascimento: '',
      cpf: '',
      email: '',
      tel1: '',
      tel2: '',
      logradouro: '',
      numero: '',
      bairro: '',
      cep: '',
      cidade: '',
      uf: '',
      nomeApelido: '',
      senha: '',
      confirmaSenha: '',
      credito: false,
      debito: false,
      boleto: false,
      pix: false,
      formaPagamento: [null, null, null, null]
    }

    this.proximo = this.proximo.bind(this);
    this.voltar = this.voltar.bind(this);
    this.estadoChecado = this.estadoChecado.bind(this);

  }

  //Cabeçalho desta pagina
  cabecalho(){
    return(
      <header className='mb-5 bg-light cabecalho-header fixed-top'>
        <Container>
          <Row>
            <Col xxl={2}  xs={2} className='text-d'>
              <Link to={'/'}>
                <img className='m-4' width={'36px'} src={ArrowLeft}></img>
              </Link>
            </Col>
            <Col xxl={10} xs={10}>    
              <h1 className='titulo-cabecalho pt-4 pb-4'>Cadastre-se</h1>
            </Col>
          </Row>
        </Container>
      </header>
    );
  }

  //Container do cadastro, renderiza o titúlo da etapa e o formulário respectivo
  card(){
    return(
      <Container className='card-cadastro' style={{width:'22rem'}}>
        <Row className='p-2 cabecalho-card'>
          <Col>
            <h1 className='titulo-card-cabecalho'>{this.state.titulo[this.state.posicao]}</h1>
          </Col>
        </Row>
        <Row>
          {this.formulario()}
        </Row>
      </Container>
    );
  }

  //Lógica para proxíma etapa do cadastro
  proximo(){
    if(this.state.posicao < 5){

      let estaCheio = false;
    
      switch(this.state.posicao){
        case 0:
          if(this.state.nome && this.state.sobrenome && this.state.nascimento && this.state.cpf.length == 11){
            estaCheio = true;
          }
          break;
        case 1:
          if(this.state.email && this.state.tel1){
            estaCheio = true;
          }
          break;
        case 2:
            if(this.state.logradouro && this.state.numero && this.state.bairro && this.state.cep && this.state.cidade && this.state.uf){
              estaCheio = true;
            }
            break;
        case 3:
            if(this.state.nomeApelido && this.state.senha == this.state.confirmaSenha && this.state.senha != ''){
              estaCheio = true;
            }
            break;
        case 4:
          if(this.state.credito){
            this.state.formaPagamento.splice(0, 0, <div>Crédito</div>)  
          }else{
            this.state.formaPagamento.splice(0, 0, null)  
          }
          
          if(this.state.debito){
            this.state.formaPagamento.splice(1, 1, <div>Débito</div>)
          }else{
            this.state.formaPagamento.splice(1, 1, null)  
          }

          if(this.state.boleto){
            this.state.formaPagamento.splice(2, 2, <div>Boleto</div>)
          }else{
            this.state.formaPagamento.splice(2, 2, null)  
          }

          if(this.state.pix){
            this.state.formaPagamento.splice(3, 3, <div>PIX</div>)
          }else{
            this.state.formaPagamento.splice(3, 3, null)  
          }

          estaCheio = true
          break;
        default:
          estaCheio = false;
      }

      if(estaCheio){
        this.setState({
          posicao: ++this.state.posicao
        })
      }
    }
  }

  //Lógica para voltar a etapa anterior do cadastro
  voltar(){
    if(this.state.posicao > 0){
      this.setState({
        posicao: --this.state.posicao
      })
    }
  }

  //Lógica do Checkbox forma de pagamento
  estadoChecado(e){
    if(e.target.name === 'credito'){
      this.setState({
        credito: !this.state.credito
      })
    }
    if(e.target.name === 'debito'){
      this.setState({
        debito: !this.state.debito
      })
    }
    if(e.target.name === 'boleto'){
      this.setState({
        boleto: !this.state.boleto
      })
    }
    if(e.target.name === 'pix'){
      this.setState({
        pix: !this.state.pix
      })
    }
  }


  //Botão Voltar e Avançar
  navegacao(){
    let tamBot = 6;
    let voltar = 'd-grid ';
    if(this.state.posicao == 0){
      tamBot = 12;
      voltar = 'd-grid d-none'
    }else{
      tamBot = 6;
      voltar = 'd-grid ';
    }

    return(
      
      <Container className='fixed-bottom btn-navegacao' style={{width:'23.55rem'}}>
        <Row>

          <Col xxl={tamBot} xs={tamBot}>
            <div className= {voltar}>
              <button className='p-2 mb-3 btn-nav-voltar' onClick={this.voltar}>{'Voltar'}</button>
            </div>
          </Col>

          <Col xxl={tamBot} xs={tamBot}>
            <div className=" d-grid ">
              <button className='p-2 mb-3 btn-nav-proximo' onClick={this.proximo}>{'Proxímo'}</button>
            </div>
          </Col>

        </Row>
      </Container> 
      
    );
  }

  //Formulário
  formulario(){
    //this.state.formaPagamento.splice(0, 0, <div>Crédito</div>)  
    switch(this.state.posicao){
      //Identificação
      case 0:
        return(
          <>
            <label className='d-grid pb-2'>Nome:*
              <input value={this.state.nome} type="text" placeholder='Fulano' onChange={(e) => this.setState({ nome: e.target.value })} />
            </label>
            <label className='d-grid pb-2'>Sobrenome:*
              <input value={this.state.sobrenome} type="text" placeholder='Da Silva de Tal' onChange={(e) => this.setState({ sobrenome: e.target.value })} />
            </label>
            <label className='d-grid pb-2'>Data Nascimento:*
              <input value={this.state.nascimento} type="date" onChange={(e) => this.setState({ nascimento: e.target.value })} />
            </label>
            <label className='d-grid pb-4'>CPF:*
            <input value={this.state.cpf} type="text" onChange={(e) => this.setState({ cpf: e.target.value })} />
            </label>
          </>
        );
      //Contato
      case 1: 
        return(
          <>
            <label className='d-grid pb-2'>E-mail:*
              <input value={this.state.email} type="email" placeholder='usuario@email.com' onChange={(e) => this.setState({ email: e.target.value })} />
            </label>
            <label className='d-grid pb-2'>Telefone/Celular:*
              <input value={this.state.tel1} type="tel" placeholder='(99) 9 9999-9999' onChange={(e) => this.setState({ tel1: e.target.value })} />
            </label>
            <label className='d-grid pb-4'>Telefone/Celular 2:
              <input value={this.state.tel2} type="tel" placeholder='(99) 9 9999-6666' onChange={(e) => this.setState({ tel2: e.target.value })} />
            </label>
          </>
        );
      //Endereço
      case 2: 
        return(
          <>
            <label className='d-grid pb-2'>Logradouro:*
              <input value={this.state.logradouro} type="text"  placeholder="Rua, Ave, Trav..." onChange={(e) => this.setState({ logradouro: e.target.value })} />
            </label>
            <label className='d-grid pb-2'>Número:*
              <input value={this.state.numero} type="text"  placeholder="77, 7A, SN ..." onChange={(e) => this.setState({ numero: e.target.value })} />
            </label>
            <label className='d-grid pb-2'>Bairro:*
              <input value={this.state.bairro} type="text" placeholder='Bairro, Conjunto, Bloco ...'  onChange={(e) => this.setState({ bairro: e.target.value })} />
            </label>
            <label className='d-grid pb-2'>CEP:*
              <input value={this.state.cep} type="text"  onChange={(e) => this.setState({ cep: e.target.value })} />
            </label>
            <label className='d-grid pb-2'>Cidade:*
              <input value={this.state.cidade} type="text"  onChange={(e) => this.setState({ cidade: e.target.value })} />
            </label>
            <label className='d-grid pb-4'>UF:*
              <select value={this.state.uf} type="text"  onChange={(e) => this.setState({ uf: e.target.value })}>
                <option >Celecione um estado</option>
                <option value="SP">São Paulo</option>
                <option value="PR">Párana</option>
                <option value="SC">Santa Cataria</option>
                <option value="RS">Rio Grande do Sul</option>
              </select>
            </label>
          </> 
        );
      //Usuário
      case 3: 
        return(
          <>
            <label className='d-grid pb-2'>Nome/Apelido:*
              <input value={this.state.nomeApelido} type="text" onChange={(e) => this.setState({ nomeApelido: e.target.value })} />
            </label>
            <label className='d-grid pb-2'>Senha:*
              <input value={this.state.senha} type="password" onChange={(e) => this.setState({ senha: e.target.value })} />
            </label>
            <label className='d-grid pb-4'>Confirme a Senha:*
              <input value={this.state.confirmaSenha} type="password" onChange={(e) => this.setState({ confirmaSenha: e.target.value })} />
            </label>
          </>
        );
      //Carteirra
      case 4: 
        return(

          <form className='d-grid pb-2'>
            <label className='formCarteira'>
              <input type="checkbox" name='credito' checked={this.state.credito} onChange={this.estadoChecado}/> Crédito
            </label><br/>
            <label className='formCarteira'>
              <input type="checkbox" name='debito' checked={this.state.debito} onChange={this.estadoChecado} /> Débito
            </label><br/>
            <label className='formCarteira'>
              <input type="checkbox" name='boleto' checked={this.state.boleto} onChange={this.estadoChecado} /> Boleto
            </label><br/>
            <label className='formCarteira pb-4'>
              <input type="checkbox" name='pix' checked={this.state.pix} onChange={this.estadoChecado} /> PIX
            </label>
          </form>
     
        );
      //Resumo
      case 5:
        let subTitulo = ['Identificação' ,'Contato', 'Endereço', 'Usuário', 'Carteira']

        let identificacao = ['Nome' , 'Sobrenome', 'Data de nascimento', 'CPF'];
        let conteudoIdentificacao = [this.state.nome, this.state.sobrenome, this.state.nascimento, this.state.cpf];

        let contato = ['E-mail' , 'Telefone/Celular 1', 'Telefone/Celular 2'];
        let conteudoContato = [this.state.email, this.state.tel1, this.state.tel2];

        let endereco = ['Logradouro' , 'Número', 'Bairro', 'CEP', 'Cidade', 'UF'];
        let conteudoEndereco = [this.state.logradouro, this.state.numero, this.state.bairro, this.state.cep, this.state.cidade, this.state.uf];

        let usuario = ['Nome/Apelido'];
        let conteudoUsuario = [this.state.nomeApelido];

        let carteira = ['Forma(s) de pagamento'];
        let conteudoCarteira = [this.state.formaPagamento];


        let rowsTitulo = [identificacao, contato, endereco, usuario, carteira];
        let rowsConteudo = [conteudoIdentificacao, conteudoContato, conteudoEndereco, conteudoUsuario, conteudoCarteira];

        let resumo = []

        for(let i = 0; i < subTitulo.length; i++){
          resumo.push(
            <h2 className='sub-titulo-card pt-4'>{subTitulo[i]}</h2>
          );
  
          //xxl={1} xl={1} lg={1} md={1}  sm={1} xs={2}
          for(let j = 0; j <= (rowsTitulo[i].length -1); j++){
            resumo.push(
              <div>{rowsTitulo[i][j]}: {rowsConteudo[i][j]}</div>   
            );
          }  
        }
        
      return(
        <div className='d-grid pb-2'>
          {resumo}
        </div>
      );
    }
  }
  

  render() {
    return (
      <div>
        {this.cabecalho()}
        {this.card()}
        {this.navegacao()}
      </div>
    )
  }
}

export default Cadastro;