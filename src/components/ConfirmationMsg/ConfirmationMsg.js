import React from 'react';
import { MessageContainer, Icon, Title, Message } from './ConfirmationMsg.style';

const ConfirmationMessage = () => (
  <MessageContainer>
    <Icon>✅</Icon>
    <Title>Registration Submitted</Title>
    <Message>
      Thank you for registering! Your application has been successfully submitted and is now under review.
    </Message>
    {/* <InfoText>
      You will receive an email once your account is approved. This process usually takes 1-2 business days.
    </InfoText> */}
  </MessageContainer>
);

export default ConfirmationMessage;