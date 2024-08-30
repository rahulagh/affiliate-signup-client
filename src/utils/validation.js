import * as Yup from 'yup';

export const signUpSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  mobile: Yup.string().matches(/^[0-9]{10}$/, 'Invalid mobile number').required('Mobile number is required'),
  occupation: Yup.string().required('Occupation is required'),
  document: Yup.mixed()
    .required('Document is required')
    .test('fileFormat', 'Unsupported file format', (value) => {
      if (!value) return false;
      const supportedFormats = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'image/png', 'image/jpeg'];
      return supportedFormats.includes(value.type);
    }),
});