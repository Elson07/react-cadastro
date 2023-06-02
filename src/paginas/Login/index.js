import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../../Firebase';
//Meu estilo
import "../../App.css";
import { Col, Container, Row, Spinner, Alert, Button } from 'react-bootstrap';
import ExclamationCicle from '../../assets/Icones/exclamation-circle.svg'
import XCircle from '../../assets/Icones/x-circle.svg'

class Login extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      senha: '' 
    }

    this.logar = this.logar.bind(this);
    this.fechar = this.fechar.bind(this);
  }
  
  fechar(){
    this.setState({
      alerta: null
    })
  }

  async logar(){

    //metodo autenticar usuario no authentication
    await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.senha)
    .then(()=>{
      window.location.href = "./home";
    }).catch((erro)=>{
      
      let error = ''
      console.log(erro)
      if(erro.code == 'auth/argument-error'){
        error = <p>Falha na altenticação, e-mail ou senha de usuário invalido!</p>
      }else if(erro.code == 'auth/invalid-email'){
        error = <p>O endereço de e-mail está formatado incorretamente.</p>
      }else if(erro.code == 'auth/user-not-found'){
        error = <p>Não há registro de usuário correspondente a este identificador. O usuário pode ter sido excluído.</p>
      }else if(erro.code == 'auth/wrong-password'){
        error = <p>A senha é inválida ou o usuário não passou a senha.</p>
      }


      this.setState({
        alerta: 
        <Alert className='position-alerta' variant="danger">
          <Row>
            <Col align="end" md={12}>
              <Button onClick={this.fechar} variant=""><img width={'36px'} src={XCircle}></img></Button>
            </Col>
            <Col md={12}>
              <img width={'36px'} src={ExclamationCicle}></img> Erro!
            </Col>
            
            </Row>
          {error}
        </Alert>
      });


    });
  }

  card(){
    return(
      <Container className='card-cadastro' style={{width:'22rem'}}>
        <Row className='p-2 cabecalho-card'>
          <Col>
            <h1 className='titulo-card-cabecalho'> Entrar </h1>
          </Col>
        </Row>
        <Row>
          {this.formularioLogin()}
        </Row>
      </Container>
    );
  }

  formularioLogin(){
    return(
      <>
        <label className='d-grid pb-2'>Nome:
          <input type="text" placeholder='Usuário ou e-mail' onChange={(e) => this.setState({ email: e.target.value })} />
        </label>
        <label className='d-grid pb-2'>Senha:
          <input type="password" onChange={(e) => this.setState({ senha: e.target.value })} />
        </label>
        <label>
          <input type="checkbox" name='lembrarme' /*checked={this.state.credito} onChange={this.estadoChecado}*/ /> Lembrar-me
        </label><br/>
        <button style={{width: '20.7rem'}} className='p-2 m-2 btn-verde' onClick={this.logar}>{'Logar'}</button>

        <Link className='text-c mt-4 mb-4 link' to={'/cadastro'}>Cadastre-se</Link>

        <Link className='text-c mb-4 link' to={'/'}>Não consigo logar</Link>
      </>
    );
  }


  render() {
    return (
      <div>
        {this.card()}
        {this.state.alerta}
      </div>
    )
  }
}

export default Login;