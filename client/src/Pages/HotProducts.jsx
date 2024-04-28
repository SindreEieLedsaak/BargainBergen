import React, { useEffect, useState } from 'react';
import { ProductCard } from './Products/Components/ProductCard';

const HotProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:3001/orders/top-products');
                if (!response.ok) {
                    console.log('Network response was not ok');
                }
                const jsonData = await response.json();
                if (jsonData.success) {
                    setProducts(jsonData.data);
                } else {
                    console.log('Failed to load products');
                }
            } catch (error) {
                console.log('Error fetching products:', error.message);
            }
        };

        fetchProducts();
    }, []);


    return (
        <div class="p-5">
            <h1 class="text-3xl pt-16 px-3 text-primary-900 ">Hot products</h1>
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-10">
                {products.length > 0 ? (products.map(product => (
                    <ProductCard key={product._id} endpoint="clothings" product={{
                        _id: product.productDetails._id,
                        header: product.productDetails.header,
                        price: product.productDetails.price,
                        img: product.productDetails.img,
                        category: product.productDetails.category
                    }} />
                ))) : (<p class="pt-5 px-3 w-screen">There are no hot products right now.</p>)}
            </div>
        </div>
    );
};

export default HotProducts;
