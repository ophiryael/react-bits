import { useState, useEffect, useDebugValue } from 'react';

export const useDelayedMessage = () => {
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setMessage('This is a message');
    }, 3000);
    return () => clearTimeout(timeoutId);
  }, []);

  useDebugValue(message ? 'Message set' : 'Message not set');

  return message;
};
