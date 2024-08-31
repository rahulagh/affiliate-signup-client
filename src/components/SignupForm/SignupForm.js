import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { signUpSchema } from '../../utils/validation';
import { FormContainer, FormTitle, InputGroup, StyledLabel, StyledField, StyledSelect, StyledErrorMessage, StyledButton, FileInputLabel, HiddenFileInput } from './SignupForm.style';
// import AWS from 'aws-sdk';


// const s3 = new AWS.S3({
//   accessKeyId: process.env.REACT_APP_WASABI_ACCESS_KEY,
//   secretAccessKey: process.env.REACT_APP_WASABI_SECRET_KEY, // Your Wasabi secret access key
//   region: 'us-west-1', // Wasabi region
//   endpoint: 'https://s3.us-west-1.wasabisys.com', // Wasabi endpoint
//   s3ForcePathStyle: true, // Required for Wasabi
// });

const SignUpForm = ({ onSubmitSuccess }) => {
  const [fileName, setFileName] = useState('');
  const [isSubmitting,setSubmitting] = useState(false)
  const [error, setError] = useState(null);

  const { register, handleSubmit, formState: { errors }, setValue,clearErrors } = useForm({
    resolver: yupResolver(signUpSchema),
  });

  // const uploadDocument = async (document) => {
  //   console.log('Attempting to upload document:', document.name);
  //   const params = {
  //     Bucket: 'signupwithoccupation',
  //     Key: `${Date.now()}_${document.name}`,
  //     Body: document,
  //     ContentType: document.type || 'application/octet-stream',
  //   };

  //   try {
  //     const uploadResult = await s3.upload(params).promise();
  //     console.log('Document uploaded successfully:', uploadResult.Location);
  //     return uploadResult.Location;
  //   } catch (error) {
  //     console.error('Error uploading document:', error);
  //     throw error;
  //   }
  // };
  const onSubmit = async (data) => {
    setSubmitting(true);
    setError(null);
  
    try {
      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('email', data.email);
      formData.append('mobile', data.mobile);
      formData.append('occupation', data.occupation);
  
      if (data.document instanceof File) {
        formData.append('document', data.document);
      } else if (data.document && data.document.length > 0) {
        formData.append('document', data.document[0]);
      } else {
        throw new Error('Please select a valid document to upload');
      }
  
      const response = await fetch('https://affiliate-signup-server.onrender.com', {
        method: 'POST',
        body: formData,
      });
  
      const result = await response.json();
  
      if (!response.ok) {
        throw new Error(result.message || 'Registration failed');
      }
  
      onSubmitSuccess(result.user);
    } catch (err) {
      setError(`An error occurred: ${err.message}`);
    } finally {
      setSubmitting(false);
    }
  };
  


  return (
    <FormContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormTitle>Create Your Account</FormTitle>

        <InputGroup>
          <StyledLabel htmlFor="name">Full Name</StyledLabel>
          <StyledField {...register('name')} id="name" placeholder="Enter your full name" />
          <StyledErrorMessage>{errors.name?.message}</StyledErrorMessage>
        </InputGroup>

        <InputGroup>
          <StyledLabel htmlFor="email">Email Address</StyledLabel>
          <StyledField {...register('email')} id="email" type="email" placeholder="Enter your email" />
          <StyledErrorMessage>{errors.email?.message}</StyledErrorMessage>
        </InputGroup>

        <InputGroup>
          <StyledLabel htmlFor="mobile">Mobile Number</StyledLabel>
          <StyledField {...register('mobile')} id="mobile" placeholder="Enter your mobile number" />
          <StyledErrorMessage>{errors.mobile?.message}</StyledErrorMessage>
        </InputGroup>

        <InputGroup>
          <StyledLabel htmlFor="occupation">Occupation</StyledLabel>
          <StyledSelect {...register('occupation')} id="occupation">
            <option value="">Select your occupation</option>
            <option value="student">Student</option>
            <option value="professional">Professional</option>
            <option value="influencer">Social Media Influencer</option>
            <option value="agent">Marketing Agent</option>
            <option value="placement">Placement Officer</option>
            <option value="teacher">Teacher</option>
            <option value="other">Other</option>
          </StyledSelect>
          <StyledErrorMessage>{errors.occupation?.message}</StyledErrorMessage>
        </InputGroup>

        <InputGroup>
          <StyledLabel htmlFor="document">Upload Document</StyledLabel>
          <FileInputLabel>
            {fileName || 'Choose a file'}
            <HiddenFileInput
              {...register('document')}
              id="document"
              type="file"
              onChange={(event) => {
                const file = event.target.files[0];
                if (file) {
                  setFileName(file.name);
                  setValue('document', file);
                  clearErrors('document');
                }
              }}
            />

          </FileInputLabel>
          <StyledErrorMessage>{errors.document?.message}</StyledErrorMessage>
        </InputGroup>

        {error && <StyledErrorMessage>{error}</StyledErrorMessage>}

        <StyledButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Creating Account...' : 'Sign Up'}
        </StyledButton>
      </form>
    </FormContainer>
  );
};

export default SignUpForm;
