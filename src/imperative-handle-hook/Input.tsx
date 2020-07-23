import React, { useRef, useImperativeHandle } from 'react';

export const Input = React.forwardRef((_props, ref) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useImperativeHandle(ref, () => ({
    customFocus: () => {
      document.title = inputRef.current?.value || 'Focused';
      inputRef.current?.focus();
    },
  }));

  return <input ref={inputRef} />;
});
