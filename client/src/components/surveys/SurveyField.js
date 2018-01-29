// Contains logic to render inputs and labels
import React from 'react';

// es6 style destructuring ---> pull of input property from props object
export default ({ input, label, meta: { error, touched } }) => {
  return (
    <div>
      <label>{label}</label>
      <input {...input} style={{ marginBottom: '5px' }} />
      <div
        className="red-text"
        style={{ marginBottom: '20px', marginTop: '0px' }}
      >
        {touched && error}
      </div>
    </div>
  );
};
