import React from 'react';
import { Button } from '@nextui-org/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const CartIcon = ({ onClick }) => {
  return (
    <Button auto light onClick={onClick}>
      <FontAwesomeIcon icon={faCartShopping} style={{ fontSize: '24px' }} />
    </Button>
  );
};

export default CartIcon;
