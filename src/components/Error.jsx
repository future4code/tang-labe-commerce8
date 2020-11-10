import React, { Component } from 'react'
import styled from 'styled-components';

export default class Error extends Component {
  render() {
    return (
      <div>
        <ErrorText>Page not found</ErrorText>
      </div>
    )
  }
}

const ErrorText = styled.div`
  margin-top: 55px;
  text-align: center;
  font-size: 46px;
`;
