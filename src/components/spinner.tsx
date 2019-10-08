import styled, { keyframes } from 'styled-components';

interface SpinnerProps {
  width: string;  //'20px'
  height: string; //'20px'
  border: string; //'4px'
}

const rotate = keyframes`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
`;

const Spinner = styled.div<SpinnerProps>`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  width: ${props => props.width};
  height: ${props => props.height};
  border: ${props => props.border} #4285F4 solid;
  border-top: ${props => props.border} white solid;
  border-bottom: ${props => props.border} white solid;
  border-radius: 50%;
  animation: ${rotate} .6s infinite linear;
`;

export default Spinner;
