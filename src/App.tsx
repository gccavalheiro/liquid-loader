import React from "react";
import styled from "styled-components";
import "./App.css";
import { Loader } from "./components";

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #090c15;
`;

function App() {
  return (
    <Section className="App">
      <Loader multiplierSpinners={8} multiplierLiquidSpinners={4} />
    </Section>
  );
}

export default App;
