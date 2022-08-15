import React from 'react';
import {useParams} from 'react-router-dom';
import fakeData from "../../fakeData/products.json";
import Product from '../Product/Product';

const ProductDetails = () => {
    const { id ='n/a' } = useParams();
    const product = fakeData.find(pd => pd.key === id);
    console.log(product);
    return (
        <div>
            {/* <h1>product: {product.name}</h1> */}
            <Product product={product} showAddtoCart={false} />
        </div>
    );
};

export default ProductDetails;