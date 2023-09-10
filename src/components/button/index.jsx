import React from 'react';

function Button({ children }) {
  return (
    <button className="rounded px-4 py-2 bg-yellow-400">{children}</button>
  );
}

export default Button;
