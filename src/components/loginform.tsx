//import React from 'react';
//import { withFormik, FormikProps, Form, Field } from 'formik';
import { withFormik } from 'formik';
import { Validate } from '../helpers/validator';
import InnerForm from './form';
import axios from "axios";

// Shape of form values
interface FormValues {
  email: string;
  password: string;
}

// The type of props LoginForm receives
interface LoginFormProps {
  initialEmail?: string;
  dispatch: any;
  history?: any;
}

// Wrap our form with the using withFormik HoC
const LoginForm = withFormik<LoginFormProps, FormValues >({
  // Transform outer props into form values
  mapPropsToValues: props => {
    return {
      email: props.initialEmail || '',
      password: '',
    };
  },

  // custom validation function (can be async!)

  validate: (values: FormValues, props) => {
    let errors: any = {};
    if (!values.email) {
      errors.email = 'Заполните поле';
    } else if (!Validate({type: 'email', value: values.email})) {
      errors.email = 'Неверный e-mail';
    }
    if (!values.password) {
      errors.password = 'Заполните поле';
    } else if (!Validate({type: 'password', value: values.password})) {
      //errors.password = 'Пароль не менее 8 символов';
    }
    return errors;
  },

  handleSubmit: async (formValues, {props: {history, dispatch}, setSubmitting, setFieldValue, setStatus }) => {
     try {
      const response = await axios.post(
        'https://mysterious-reef-29460.herokuapp.com/api/v1/validate',
        formValues
      );
      const { status, message, data } = response.data;
      if (status === 'err') {
        setSubmitting(false);
        setStatus(message);
        //remove status message after 5 seconds
        setTimeout(()=>{setStatus(undefined)}, 5000);
        setFieldValue('password', '')
        return
      }
      //SUCCESSFUL LOGIN:
      dispatch({type:'LOGIN', userId: data.id});
      //redirect to /profile page
      history.push('/profile');

    } catch (exception) {

      // Expected: 400 status code
      if (exception.response && exception.response.status === 400) {
        // Display server validation errors
        setStatus('Сервер недоступен');
        //remove status message after 5 seconds
        setTimeout(()=>{setStatus(undefined)}, 5000);
      }
    }

    setSubmitting(false);
  },
})(InnerForm);

export { LoginForm };
