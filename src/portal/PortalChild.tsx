import React from 'react';
import ReactDOM from 'react-dom';

interface Props {
  clickCount: number;
  regularChildEl: HTMLDivElement | null;
}

export const PortalChild: React.FC<Props> = ({ clickCount, regularChildEl }) => {
  if (!regularChildEl) {
    return null;
  }
  return ReactDOM.createPortal(
    <details>
      <summary>Portal child</summary>
      <span>Clicks: {clickCount}</span>
    </details>,
    regularChildEl
  );
};
