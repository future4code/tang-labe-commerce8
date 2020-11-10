import React from 'react';
import InputMask from 'react-input-mask';
import styled from 'styled-components';

const ContainerContato = styled.div`
h1{
  color: black; 
  text-align: center; 
  font-size: 30px;
  }
input{
  margin: 6px 0; 
  height: 40px; 
  color:#333;
  }
input[type='text'] 
input[type='tel'] 
input[type='email']{
  width: 100%; 
  padding: 0 5px;
  }

input[type='submit']{
  background: var(--mainVerde);
  cursor: pointer;
  color:#fff;
  font-weight: bold;
  border:none;
  border-radius: 5px;
  }
  
textarea{
  width: 100%;
  height: 150px;
  color:#333;
  padding: 5px;
  }

.formulario {
  display:flex; 
  flex-direction: column;
  }


@media screen and (max-width: 480px) {
    .formulario{width: 90%;margin: 20px 5%;}
    .formulario input[type='submit']{width: 100%;}
}

@media screen and (min-width: 481px) and (max-width: 768px) {
    .formulario{width: 80%;margin: 20px 10%;}
    .formulario input[type='submit']{width: 50%;}
}

@media screen and (min-width: 769px) and (max-width: 1199px) {
    .formulario{width: 50%;margin: 20px 25%;}
    .formulario input[type='submit']{width: 40%;}
}

@media screen and (min-width: 1200px) {
    .formulario{width: 50%;margin: 20px 25%;}
    .formulario input[type='submit']{width: 30%;}
}
`

export default class Contact extends React.Component {

    render(){
        return(
          <ContainerContato>
          <div className="formulario">
            
            
                <h1>Fale Conosco</h1>
                <form name="form1" id="form1" method="#" action="#">
                    <input type="text" name="nome" id="nome" placeholder="Nome:"/>
                    <InputMask type="tel" name="telefone" id="telefone" placeholder="Telefone:" mask="(99) 99999-9999"  />
                    <input type="email" name="email" id="email" placeholder="Email:"/>
                    <textarea name="mensagem" id="mensagem" placeholder="Mensagem:"></textarea>
                    <input type="submit" value="Enviar"/>
                </form>

          </div>
          </ContainerContato>
        );
    }
}