import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Button } from '@nextui-org/react';

const CartIcon = ({ onClick }) => {
    return (
        <Button auto light onClick={onClick} icon={<ShoppingCartIcon style={{ fontSize: '24px' }} />}>
            Cart
        </Button>
    );
};

export default CartIcon;
