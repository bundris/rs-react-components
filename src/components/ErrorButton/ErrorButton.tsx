import React, { useState } from 'react';

function ErrorButton() {
  const [errState, setError] = useState(false);
  const triggerError = (): void => {
    throw new Error('Morty, you failed again');
  };

  const handleClick = () => {
    setError(true);
  };

  errState ? triggerError() : '';
  return (
    <button type="button" onClick={handleClick}>
      Error generator
    </button>
  );
}

export default ErrorButton;
