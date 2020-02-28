import React from "react";
import styled from "styled-components";

const Pagewrap = styled("div")`
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: auto;
  /* position: absolute; */
  background-image: url("/cryptography.jpg");
`;

const TitleDesign = styled("div")`
  font-weight: bold;
  font-size: 100px;
  color: white;
  font-family: Avenir;
  padding-top: 200px;
`;

const Desc = styled("div")`
  font-weight: normal;
  font-family: Avenir;
  font-size: 48px;
  color: white;
  padding: 50px;
  width: 60%;
  margin: auto;
  position: relative;
  text-align: center;
  padding-bottom: 350px;
`;

class Title extends React.Component {
  render() {
    return (
      <div>
        <Pagewrap>
          <TitleDesign> What is Cryptography? </TitleDesign>
          <Desc>
            The art of writing messages with a hidden meaning, or of writing and
            solving code
          </Desc>
        </Pagewrap>
      </div>
    );
  }
}

export default Title;
