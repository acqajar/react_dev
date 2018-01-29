// Contains logic to render inputs and labels
import React from 'react';

// es6 style destructuring ---> pull of input property from props object
export default ({ input, label }) => {
  return (
    <div>
      <label>{label}</label>
      <input {...input} />
    </div>
  );
};
