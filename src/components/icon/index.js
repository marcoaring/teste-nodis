import React from 'react';
import PropTypes from 'prop-types';

function Icon({ name }) {
  return (
    <svg>
      <use xlinkHref={`#${ name }`}/>
    </svg>
  );
}

Icon.propTypes = {
  name: PropTypes.string.isRequired
};

export default Icon;
