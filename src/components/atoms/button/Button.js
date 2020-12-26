
import React from 'react';
import PropTypes from 'prop-types';
 Button.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string | 'ten_class',
  type: PropTypes.string,
  onclick: PropTypes.func
};

function Button(props) {
  const {children, className, type, onclick} = props;
  
  return (
    <div>
      <bUtton type={type} onclick={onclick} className={className}>{children}</bUtton>
    </div>
  );
}

export default Button;