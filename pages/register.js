/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
import React from 'react';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import styles from '../styles/register.module.scss';

function register() {
  const [emailError, setEmailError] = useState('');
  const [fullnameError, setFullnameError] = useState('');
  const [submissionError, setSubmissionError] = useState('');
  const [formDetails, setFormDetails] = useState({
    FullName: '',
    Email: '',
  });
  const onEmailBlurHandler = () => {
    if (formDetails.Email === '') {
      setEmailError('Please enter your email');
    } else {
      setEmailError('');
    }
  };
  const onFullNameBlurHandler = () => {
    if (formDetails.FullName === '') {
      setFullnameError('Please enter your Fullname');
    } else {
      setFullnameError('');
    }
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    if (formDetails.Email === '' || formDetails.FullName === '') {
      setSubmissionError('Please correct errors before submitting the form');
      setFullnameError('Please enter your Fullname');
      setEmailError('Please enter your email');
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formDetails.Email)
    ) {
      setEmailError('Invalid email address');
    } else {
      setSubmissionError('form Submitted successfully');
      let response = await fetch(
        'http://localhost:1337/api/registration-forms',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            data: {
              FullName: formDetails.FullName,
              Email: formDetails.Email,
            },
          }),
        }
      );
      let result = await response.status;
      console.log(result);
      setFormDetails({
        Email: '',
        FullName: '',
        checkbox: false,
      });
    }
  };
  return (
    <Container className={styles.mainContainer}>
      <Row>
        <Form className={styles.formContainer}>
          <h1 className={styles.heading}>Registration</h1>
          <label className={styles.labelEl}>Full Name</label>
          <br />
          <input
            required
            type="text"
            name="FullName"
            value={formDetails.FullName}
            className={styles.inputEl}
            onChange={(e) =>
              setFormDetails({
                ...formDetails,
                [e.target.name]: e.target.value,
              })
            }
            onBlur={onFullNameBlurHandler}
          />
          <p className={styles.errMsg}>{fullnameError}</p>
          <br />
          <label className={styles.labelEl}>Email</label>
          <br />
          <input
            required
            type="text"
            name="Email"
            value={formDetails.Email}
            className={styles.inputEl}
            onChange={(e) =>
              setFormDetails({
                ...formDetails,
                [e.target.name]: e.target.value,
              })
            }
            onBlur={onEmailBlurHandler}
          />
          <p className={styles.errMsg}>{emailError}</p>
          <br />
          <Form.Check
            label="Currently practicing Heartfulness Meditation"
            name="group1"
            type="checkbox"
            className={styles.labelEl}
          />

          <div className={styles.formCheck}>
            <Form.Check id="termOfUse" name="group1" type="checkbox" />
            <label htmlFor="termsOfUse" className={styles.labelEl}>
              <span className={styles.spanSpace}> </span>I agree to the{' '}
              <span className={styles.spanEl}>Terms of Use </span>
              and <span className={styles.spanEl}>Privacy Policy</span> of
              Heartfulness Institutes India
            </label>
          </div>
          <br />
          
          
          <div className="d-flex justify-content-center align-items-center">
            <button
              className={styles.buttonEl}
              type="submit"
              onClick={submitHandler}
            >
              Register
            </button>
          </div>
          {submissionError === 'form Submitted successfully' ? <p className={styles.errMsg} style={{color:'green'}}>{submissionError}</p> : <p className={styles.errMsg} style={{color:'red'}}>{submissionError}</p>}
        </Form>
      </Row>
    </Container>
  );
}

export default register;
