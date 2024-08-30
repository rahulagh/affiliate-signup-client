import styled from 'styled-components';

export const MessageContainer = styled.div`
  max-width: 500px;
  margin: 40px auto;
  padding: 40px 30px;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

export const Icon = styled.div`
  font-size: 64px;
  color: ${props => props.theme.colors.success};
  margin-bottom: 20px;
`;

export const Title = styled.h2`
  font-size: 28px;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 16px;
`;

export const Message = styled.p`
  font-size: 18px;
  color: ${props => props.theme.colors.text};
  line-height: 1.6;
  margin-bottom: 24px;
`;

//export const InfoText = styled.p`
//   font-size: 14px;
//   color: ${props => props.theme.colors.secondary};
// `;