import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 950px;
  margin: 0 auto;
  background: #ecf1f5;
  min-height: calc( 100vh - 120px );
  display: flex;
  flex-direction: column;
  align-items: left;
  padding: 100px 20px 20px 20px;
  position: relative;
`;

const Main: React.FC = () => {
  return <Container>
            <h1>Главная страница</h1>

         </Container>
}

export default Main;
