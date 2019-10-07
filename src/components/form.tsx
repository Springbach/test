import React from 'react';
import { FormikProps, Form, Field } from 'formik';
import Image from '../images/login.png';
import styled, { keyframes } from 'styled-components';
import Footer from './footer';
// Shape of form values
interface FormValues {
  email: string;
  password: string;
}

interface ErrorProps {
    show: boolean;
}


const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const FormWrapper = styled.div`
  position: relative;
  background: #FFF;
  width: 600px;
  border-radius: 4px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

const Icon = styled.div`
  background: #4285F4;
  height: 60px;
  width: 60px;
  border-radius: 100%;
  display: flex;
  margin: 40px 0 0 40px;
  img {
    height: 40px;
    width: 40px;
    margin: auto;
  }
`;

const FormPanel = styled.div`
  padding: 60px 60px 60px 120px;
  box-sizing: border-box;
`;

const H = styled.h1`
  margin: 0 0 40px;
  color: #4285F4;
  font-size: 28px;
  font-weight: 400;
  text-transform: uppercase;
  text-align: center;
`;

const FormGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 0 20px;
  position: relative
  &:last-child {
      margin: 40px 0 0 0;
      height: 60px;
      display: flex;
      justify-content: center;
  }
  label {
    display: block;
    margin: 0 0 10px;
    color: rgba(0, 0, 0, 0.6);
    font-size: 12px;
    font-weight: 500;
    line-height: 1;
    text-transform: uppercase;
    letter-spacing: .2em;
  }

  input {
    outline: none;
    display: block;
    background: rgba(0, 0, 0, 0.1);
    width: 100%;
    border: 0;
    border-radius: 4px;
    box-sizing: border-box;
    padding: 12px 20px;
    color: rgba(0, 0, 0, 0.6);
    font-family: inherit;
    font-size: inherit;
    font-weight: 500;
    line-height: inherit;
    transition: 0.3s ease;
  }
  input:focus {
    color: rgba(0, 0, 0, 0.8);
  }
  button {
    outline: none;
    background: #4285F4;
    width: 50%;
    border: 0;
    border-radius: 0.4em;
    color: #FFF;
    font-weight: bold;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.15s ease-in-out;
    &:hover {
      background: rgba(66, 133, 244, 0.8);
    }
  }
  button:disabled {
    background: rgb(232, 240, 254);
  }
`;

const rotate = keyframes`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
`;

const Spinner = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  width: 20px;
  height: 20px;
  border: 4px #4285F4 solid;
  border-top: 4px white solid;
  border-bottom: 4px white solid;
  border-radius: 50%;
  animation: ${rotate} .6s infinite linear;
`;

const Error =
  styled.div<ErrorProps>`
  position: absolute;
  top: 5px;
  right: 0;
  padding: 5px 10px;
  color: white;
  background-color: #FF4C4C;
  border-radius: 10px;
  display: ${props => props.show ? 'block' : 'none'};
`;

const Triangle = styled.div`
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 10px solid #FF4C4C;
  position: absolute;
  right: 18px;
  bottom: -8px;
`;

const ServerError = styled.div<ErrorProps>`
  position: absolute;
  font-size: 16px;
  top: 5px;
  right: 5px;
  padding: 5px 10px;
  color: white;
  background-color: #FF4C4C;
  border-radius: 10px;
  display: ${props => props.show ? 'flex' : 'none'};
  flex-direction: column;
`;

const ProgressBar = styled.div`
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

const StyledForm = (props: FormikProps<FormValues>) => {
  const { touched, errors, status, isSubmitting } = props;
  return <Container>
            <FormWrapper>
              <ServerError show = {Boolean(status)}><p>{Boolean(status)&&status}</p><ProgressBar><ProgressLine/></ProgressBar></ServerError>
              <Icon>
                  <img alt="" src={Image} />
              </Icon>
              <FormPanel>
                  <H>личный кабинет</H>
                  <Form>
                      <FormGroup>
                        <label>e-mail</label>
                        <Field type="email" name="email" />
                        <Error show = {Boolean(touched.email && errors.email)}>{errors.email}<Triangle/></Error>
                      </FormGroup>
                      <FormGroup>
                        <label>пароль</label>
                        <Field type="password" name="password" />
                        <Error show = {Boolean(touched.password && errors.password)}>{errors.password}<Triangle/></Error>
                      </FormGroup>
                      <FormGroup>
                            {isSubmitting?<Spinner />:null}
                            <button type="submit" disabled={isSubmitting||Boolean(status)}>
                              {isSubmitting?'Проверяю...':'Войти'}
                            </button>
                      </FormGroup>
                  </Form>
              </FormPanel>
          </FormWrapper>
          <Footer />
  </Container>
}

export default StyledForm;
