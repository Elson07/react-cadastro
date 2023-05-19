import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//Meu estilo
import "../../App.css";
import { Col, Container, Row } from 'react-bootstrap';

class Login extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }
  
  cabecalho(){
    return(
      <header className='mb-5 bg-light cabecalho-header fixed-top'>
        <Container>
          <Row>
            <Col xxl={12}>    
              <h1 className='titulo-cabecalho pt-4 pb-4'>Home</h1>
            </Col>
          </Row>
        </Container>
      </header>
    );
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
          <input value={this.state.nome} type="text" placeholder='Usuário ou e-mail' onChange={(e) => this.setState({ nome: e.target.value })} />
        </label>
        <label className='d-grid pb-2'>Senha:
          <input value={this.state.sobrenome} type="password" onChange={(e) => this.setState({ senha: e.target.value })} />
        </label>
        <label>
          <input type="checkbox" name='lembrarme' /*checked={this.state.credito} onChange={this.estadoChecado}*/ /> Lembrar-me
        </label><br/>
        <button style={{width: '20.7rem'}} className='p-2 m-2 btn-verde' onClick={this.voltar}>{'Voltar'}</button>

        <Link className='text-c mt-4 mb-4 link' to={'/cadastro'}>Cadastre-se</Link>

        <Link className='text-c mb-4 link' to={'/'}>Não consigo logar</Link>
      </>
    );
  }


  render() {
    return (
      <div>
        {this.cabecalho()}
        {this.card()}
      </div>
    )
  }
}

export default Login;