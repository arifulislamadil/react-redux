import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductComponent from './ProductComponent';
import { useEffect } from "react";
import {fetchProducts} from "../redux/action/productAction"

const ProductListing = () => {
    const products = useSelector((state)=> state.allProducts.products);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchProducts())
    },[])
    
    return (
        <div className='ui grid container'>
            <ProductComponent/>
        </div>
    );
};

export default ProductListing;
