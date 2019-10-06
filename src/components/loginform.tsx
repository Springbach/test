import React from 'react';
import { withFormik, FormikProps, Form, Field } from 'formik';
import { Validate } from '../helpers/validator';
//FormikErrors,

// Shape of form values
interface FormValues {
  email: string;
  password: string;
}

const InnerForm = (props: FormikProps<FormValues>) => {
  const { touched, errors, isSubmitting } = props;
  return (
    <Form>
      <Field type="email" name="email" />
      {touched.email && errors.email && <div>{errors.email}</div>}

      <Field type="password" name="password" />
      {touched.password && errors.password && <div>{errors.password}</div>}
      <div>
      <button type="submit" disabled={isSubmitting}>
        Войти
      </button>
      </div>
    </Form>
  );
};

// The type of props LoginForm receives
interface LoginFormProps {
  initialEmail?: string;
  dispatch: any;
  history: any;
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

  validate: (values: FormValues) => {
    let errors: any = {};
    if (!values.email) {
      errors.email = 'Заполните поле';
    } else if (!Validate({type: 'email', value: values.email})) {
      errors.email = 'Неверный e-mail';
    }
    return errors;
  },

  handleSubmit: (val, {props: {dispatch, history}, setSubmitting, resetForm}) => {
    setTimeout(()=>{
      console.log("creds is valid", val);
      setSubmitting(false);
      dispatch({type:'LOGIN', userId: '1'});
      history.push('/profile');
      //resetForm({email: val.email, password: ""});

    }, 2000)
  },
})(InnerForm);

export { LoginForm };
