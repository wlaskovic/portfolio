import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import { Animated } from "react-animated-css";

export class Jumbotron extends React.Component {
  render() {
    return (
    <Styles img={'/assets/' + this.props.img}>
      <Jumbo fluid className="jumbo" >
        <div className="overlay"></div>
        {this.props.pathname === '/'
        ? 
        <Container>
        <Animated animationIn="zoomIn" isVisible={true}>
          <h1>Hi,</h1>
          <p className="banner-text">
              my name is Valentin Vranić - <span className="banner-text">WebDeveloper</span>
          </p>
        </Animated>
        </Container>
        : ''
      }
      </Jumbo>
    </Styles>
    );
  }
}

const Styles = styled.div`
  .jumbo {
    background: url(${ (props) => props.img}) no-repeat fixed bottom;  
    background-size: cover;
    color: #efefef;
    height: 50vh;
    position: relative;
    z-index: 1;

    & h1 {
      font-size: 72px;
      margin-top: 0;
      padding-top: 15px; 
    }

    & .banner-text {
      font-size: 32px;
    }
  }

  .overlay {
    background-color: #000;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;