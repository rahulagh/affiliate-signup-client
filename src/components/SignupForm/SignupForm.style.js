import styled from 'styled-components';

export const FormContainer = styled.div`
  max-width: 500px;
  margin: 40px auto;
  padding: 30px;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormTitle = styled.h2`
  font-size: 28px;
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: 24px;
  text-align: center;
`;

export const InputGroup = styled.div`
  margin-bottom: 20px;
`;

export const StyledLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.text};
`;

export const StyledField = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  font-size: 16px;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.primary};
  }
`;

export const StyledSelect = styled.select`
  width: 100%;
  padding: 12px;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  font-size: 16px;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.primary};
  }
`;

export const StyledErrorMessage = styled.span`
  color: ${(props) => props.theme.colors.danger};
  font-size: 14px;
  margin-top: 4px;
`;

export const StyledButton = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
  padding: 14px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.colors.secondary};
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

export const FileInputLabel = styled.label`
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

export const HiddenFileInput = styled.input`
  display: none;
`;
