import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 600px;
    margin: 20px auto 100px;
`;

const StyledLink = styled(Link)`
    color: #FFFFFF;
    font-size: 12px;
    text-decoration: none;
    text-shadow: 1px 2px 0 rgba(0, 0, 0, 0.1);
`;

const MaterialIcon = (props: any) => (
  <i className={`material-icons ${props.className}`}>arrow_backward</i>
);

const Icon = styled(MaterialIcon)`
    width: 12px;
    margin: 0 5px;
    vertical-align: middle;
    font-size: 12px;
`;

const FormFooter = () => {
  return <Container>
        <StyledLink to="/"><Icon />На Главную</StyledLink>
  </Container>
}

export default FormFooter;
