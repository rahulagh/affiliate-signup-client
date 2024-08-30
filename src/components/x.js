import React, { useState } from 'react';
import styled from 'styled-components';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { signUpSchema } from '../utils/validation';
// import axios from 'axios';

const FormContainer = styled.div`
  max-width: 500px;
  margin: 40px auto;
  padding: 30px;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

const FormTitle = styled.h2`
  font-size: 28px;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 24px;
  text-align: center;
`;

const InputGroup = styled.div`
  margin-bottom: 20px;
`;

const StyledLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: ${props => props.theme.colors.text};
`;

const StyledField = styled(Field)`
  width: 100%;
  padding: 12px;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  font-size: 16px;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
  }
`;

const StyledSelect = styled(StyledField)`
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='%23333' viewBox='0 0 16 16'%3E%3Cpath d='M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  padding-right: 40px;
`;

const StyledErrorMessage = styled(ErrorMessage)`
  color: ${props => props.theme.colors.danger};
  font-size: 14px;
  margin-top: 4px;
`;

const StyledButton = styled.button`
  background-color: ${props => props.theme.colors.primary};
  color: white;
  padding: 14px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${props => props.theme.colors.secondary};
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

const FileInputLabel = styled.label`
  display: inline-block;
  padding: 12px 20px;
  background-color: #f0f0f0;
  color: #333;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e0e0e0;
  }
`;

const HiddenFileInput = styled.input`
  display: none;
`;


const SignUpForm = ({ onSubmitSuccess }) => {
    const [error, setError] = useState(null);
    const [fileName, setFileName] = useState('');
  
    const handleSubmit = async (values, { setSubmitting }) => {
    //   try {
    //     const formData = new FormData();
    //     Object.keys(values).forEach(key => formData.append(key, values[key]));
  
    //     const response = await axios.post('/api/signup', formData, {
    //       headers: { 'Content-Type': 'multipart/form-data' },
    //     });
  
    //     if (response.data.success) {
    //       onSubmitSuccess();
    //     } else {
    //       setError(response.data.message);
    //     }
    //   } catch (err) {
    //     setError('An error occurred. Please try again.');
    //   }
    //   setSubmitting(false);

    try {
        // Logging the form data
        console.log('Form submitted with values:', values);
    
        // Simulating a delay to mimic server response time
        await new Promise(resolve => setTimeout(resolve, 1000));
    
        // Simulating a successful response
        onSubmitSuccess();
      } catch (err) {
        setError('An error occurred. Please try again.');
      }
      setSubmitting(false);
    };
  
    return (
        <FormContainer>
          <Formik
            initialValues={{ name: '', email: '', mobile: '', occupation: '', document: null }}
            validationSchema={signUpSchema}
            onSubmit={handleSubmit}
          >
            {({ setFieldValue, setFieldTouched, isSubmitting, errors, touched }) => (
              <StyledForm>
                <FormTitle>Create Your Account</FormTitle>
    
                <InputGroup>
                  <StyledLabel htmlFor="name">Full Name</StyledLabel>
                  <StyledField id="name" name="name" placeholder="Enter your full name" />
                  <StyledErrorMessage name="name" component="div" />
                </InputGroup>
    
                <InputGroup>
                  <StyledLabel htmlFor="email">Email Address</StyledLabel>
                  <StyledField id="email" name="email" type="email" placeholder="Enter your email" />
                  <StyledErrorMessage name="email" component="div" />
                </InputGroup>
    
                <InputGroup>
                  <StyledLabel htmlFor="mobile">Mobile Number</StyledLabel>
                  <StyledField id="mobile" name="mobile" placeholder="Enter your mobile number" />
                  <StyledErrorMessage name="mobile" component="div" />
                </InputGroup>
    
                <InputGroup>
                  <StyledLabel htmlFor="occupation">Occupation</StyledLabel>
                  <StyledSelect
                    as="select"
                    id="occupation"
                    name="occupation"
                    onChange={(e) => {
                      setFieldValue("occupation", e.target.value);
                      setFieldTouched("occupation", true, false);
                    }}
                  >
                    <option value="">Select your occupation</option>
                    <option value="student">Student</option>
                    <option value="professional">Professional</option>
                    <option value="influencer">Social Media Influencer</option>
                    <option value="agent">Marketing Agent</option>
                    <option value="placement">Placement Officer</option>
                    <option value="teacher">Teacher</option>
                    <option value="other">Other</option>
                  </StyledSelect>
                  <StyledErrorMessage name="occupation" component="div" />
                </InputGroup>
    
                <InputGroup>
                  <StyledLabel htmlFor="document">Upload Document</StyledLabel>
                  <FileInputLabel>
                    {fileName || 'Choose a file'}
                    <HiddenFileInput
                      id="document"
                      type="file"
                      onChange={(event) => {
                        setFieldValue("document", event.currentTarget.files[0]);
                        setFieldTouched("document", true, false);
                        setFileName(event.currentTarget.files[0]?.name || '');
                      }}
                    />
                  </FileInputLabel>
                  {touched.document && errors.document && (
                    <StyledErrorMessage>{errors.document}</StyledErrorMessage>
                  )}
                </InputGroup>
    
                {error && <StyledErrorMessage>{error}</StyledErrorMessage>}
    
                <StyledButton type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Creating Account...' : 'Sign Up'}
                </StyledButton>
              </StyledForm>
            )}
          </Formik>
        </FormContainer>
      );
    };
    
    export default SignUpForm;