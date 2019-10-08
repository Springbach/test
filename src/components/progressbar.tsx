import React from 'react';
import styled, { keyframes } from 'styled-components';

const Container = styled.div`
    border-radius: 3px;
    background: rgba(0, 0, 0, 0.2);
    width: 100%;
`;

const progressAnimation = keyframes`
    from { width: 0%;}
    to { width: 100%;}
`;

const ProgressLine = styled.div`
    width: 100%;
    background: #fff;
    height: 3px;
    animation: ${progressAnimation} 5s linear;
`;

const ProgressBar = () => <Container><ProgressLine/></Container>

export default ProgressBar;
