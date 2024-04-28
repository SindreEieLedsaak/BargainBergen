import React, { useEffect, useState } from 'react';
import { useKindeAuth } from '@kinde-oss/kinde-auth-react';
import productService from '../../services/productService';

const OrderPage = () => {
    const [order, setOrder] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { user } = useKindeAuth();  // Assuming useKindeAuth provides the current logged in user info

    useEffect(() => {
        if (user) {
            productService.getCurrentOrder(user.id)
                .then(data => {
                    setOrder(data);
                    setLoading(false);
                })
                .catch(err => {
                    setError(err.message);
                    setLoading(false);
                });
        }
    }, [user]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!order) return <div>No current order found.</div>;

    // Calculate total price
    const totalPrice = order.orderItems.reduce((total, item) => {
        return total + (item.product.price * item.quantity);
    }, 0);

    return (
        <div className="max-w-4xl min-h-screen  mx-auto p-6">
            <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {order.orderItems.map(item => (
                    <li key={item._id} className="border rounded p-4">
                        <div className="flex items-center mb-4">
                            <img src={item.product.img} alt={item.product.name} className="w-24 h-24 mr-4" />
                            <div>
                                <p className="font-semibold">{item.product.name}</p>
                                <p className="text-gray-600">{item.product.description}</p>
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <p className="text-gray-700">Quantity: {item.quantity}</p>
                            <p className="text-gray-700">Price: ${item.product.price}</p>
                        </div>
                        <p className="text-gray-700">Total: ${item.product.price * item.quantity}</p>
                        {/* Render additional product details like size and color if necessary */}
                    </li>
                ))}
            </ul>
            <p className="text-xl font-semibold mt-8">Total Price: ${totalPrice}</p>
        </div>
    );
};

export default OrderPage;
