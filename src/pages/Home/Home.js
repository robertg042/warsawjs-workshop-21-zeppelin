import React from 'react';
import { reduxForm, Field, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import { required, length } from 'redux-form-validators';

import { login } from '../../actions/user';

import {CheckInput, Input} from "../../components";

let Home = ({ handleSubmit, termsCheckbox, invalid, loginUser }) => {
  const handleLogin = values => {
    const {username, password} = values;
    loginUser(username, password);
  };

  return (
    <div className='display-flex mt'>
      <img className='flex-2' src="https://placehold.it/200x300" alt="Placeholder"/>
      <form className='flex-1' onSubmit={handleSubmit(handleLogin)}>
        <Field
          type='text'
          name='username'
          component={Input}
          label='Your name'
          validate={[required()]}
        />
        <Field
          type='password'
          name='password'
          component={Input}
          label='Password'
          validate={[required(), length({ minimum: 5 })]}
        />
        <Field
          type='checkbox'
          name='termsCheckbox'
          component={CheckInput}
          validate={[required()]}
        >
          I agree to Terms & Conditions
        </Field>
        <button
          type='submit'
          disabled={!termsCheckbox || invalid}>Submit</button>
      </form>
    </div>
  );
};

Home = reduxForm({
  form: 'LoginForm'
})(Home);

const mapStateToProps = state => ({
  termsCheckbox: formValueSelector('LoginForm')(state, 'termsCheckbox'),
  initialValues: {
    termsCheckbox: false,
    username: "Robert"
  }
});

const mapDispatchToProps = { loginUser: login };

Home = connect(mapStateToProps, mapDispatchToProps)(Home);

export default Home;
