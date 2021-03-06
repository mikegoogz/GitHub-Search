import React, { Fragment } from 'react';
import spinner from './loading.gif';

const Spinner = () => {
  return (
    <Fragment>
      <img
        src={spinner}
        alt="Loading..."
        style={{ width: '200px', display: 'block', margin: 'auto' }}
      />
    </Fragment>
  );
};

export default Spinner;
