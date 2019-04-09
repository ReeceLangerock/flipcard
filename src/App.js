import React, { Component } from "react";
import Card from "./components/Card";
import styled from "styled-components";
class App extends Component {
  render() {
    return (
      <CardContainer className="App">
        <Intro>
          <h1>FlipCard</h1>
        </Intro>
        <Card />
        <Card />
      </CardContainer>
    );
  }
}

export default App;

const CardContainer = styled.div`
  margin: 0 auto;
  max-width: 1000px;
  background: #1b2021;
  padding: 10px;
  min-height: 100vh;
`;

const Intro = styled.div`
  text-align: center;
  color: #2176FF;
  font-size: 20px;
`;

CardContainer.displayName = "CardContainer";
Intro.displayName = "Intro";
