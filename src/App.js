import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import theme from './styles/theme';
import SignUpForm from './components/SignupForm/SignupForm';
import ConfirmationMessage from './components/ConfirmationMsg/ConfirmationMsg';

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmitSuccess = () => {
    setIsSubmitted(true);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className="App">
        {isSubmitted ? (
          <ConfirmationMessage />
        ) : (
          <SignUpForm onSubmitSuccess={handleSubmitSuccess} />
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;