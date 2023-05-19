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


  conteudo(){
    return(
        <div>

            <Container>
                <Row>
                    <Col md={2}>
                        <Link to={'/cadastro'}>
                            Cadastre-se<br/>
                        </Link>
                    </Col>
                </Row>

            </Container>

            
        </div>
    );
  }
  

  render() {
    return (
      <div>
        {this.conteudo()}
      </div>
    )
  }
}

export default Login;