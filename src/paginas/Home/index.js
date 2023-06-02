import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../../Firebase';

//Meu estilo
import "../../App.css";
import { Col, Container, Row } from 'react-bootstrap';

class Home extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      sobrenome: '',
      dataNascimento: '',
    }
  }
  
  //Metodo de evento que executa quanto a pagina é carregada.
  async componentDidMount(){
    //Metodo para verificar se o usuario esta autenticado
    await firebase.auth().onAuthStateChanged(async(retorno)=>{
        if(retorno){
            let uid = retorno.uid;
            let email = retorno.email;
            //Metodo para obter os dados do firestore database, usando o uid como parametro 
            await firebase.firestore().collection("cadastro").doc(uid).get().then((retorno)=>{                
              
              let dataNascimento = retorno.data().dataNascimento.split("-"); 
              let nascimento = dataNascimento[2] + "/" + dataNascimento[1] + "/" + dataNascimento[0];

              let formaPagamento = [null, null, null, null]

              if(retorno.data().credito){
                formaPagamento.splice(0, 0, <div>Crédito</div>)  
              }else{
                formaPagamento.splice(0, 0, null)  
              }
              
              if(retorno.data().debito){
                formaPagamento.splice(1, 1, <div>Débito</div>)
              }else{
                formaPagamento.splice(1, 1, null)  
              }
    
              if(retorno.data().boleto){
                formaPagamento.splice(2, 2, <div>Boleto</div>)
              }else{
                formaPagamento.splice(2, 2, null)  
              }
    
              if(retorno.data().pix){
                formaPagamento.splice(3, 3, <div>PIX</div>)
              }else{
                formaPagamento.splice(3, 3, null)  
              }


              this.setState({
                nome: retorno.data().nome,
                sobrenome: retorno.data().sobrenome,
                dataNascimento: nascimento,
                email: email, 
                tel: retorno.data().telefone,
                tel2: retorno.data().telefone2,
                logradouro: retorno.data().logradouro,
                numero: retorno.data().numero,
                bairro: retorno.data().bairro,
                cep: retorno.data().cep,
                cidade: retorno.data().cidade,
                uf: retorno.data().uf,
                nomeApelido: retorno.data().nomeApelido,
                carteira: formaPagamento
              });
              
            });
        }
    });
}
  
  card(){
    return(
      <Container className='card-cadastro' style={{width:'22rem'}}>
        <Row className='p-2 cabecalho-card'>
          <Col>
            <h1 className='titulo-card-cabecalho'> Home </h1>
          </Col>
        </Row>
        <Row className='pb-4'>
          <h4 className='pt-4'>Identificação</h4>
          <div>Nome: {this.state.nome}</div>
          <div>Sobrenome: {this.state.sobrenome}</div>
          <div>Data Nascimento: {this.state.dataNascimento}</div>

          <h4 className='pt-4'>Contato</h4>
          <div>E-mail: {this.state.email}</div>
          <div>Telefone 1: {this.state.tel}</div>
          <div>Telefone 2: {this.state.te2}</div>

          <h4 className='pt-4'>Endereço</h4>
          <div>Logradouro: {this.state.logradouro}</div>
          <div>Número: {this.state.numero}</div>
          <div>Bairro: {this.state.bairro}</div>
          <div>CEP: {this.state.cep}</div>
          <div>Cidade: {this.state.cidade}</div>
          <div>UF: {this.state.uf}</div>

          <h4 className='pt-4'>Usuário</h4>
          <div>Nome/Apelido: {this.state.nomeApelido}</div>

          <h4 className='pt-4'>Carteira</h4>
          {this.state.carteira}
          
        </Row>
      </Container>
    );
  }


  render() {
    return (
      <div>
        {this.card()}
      </div>
    )
  }
}

export default Home;