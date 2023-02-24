import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {Link} from "react-router-dom"
import { useNavigate } from "react-router-dom";
import {FaRegTrashAlt } from 'react-icons/fa';
import { remove_product } from '../redux/productSlice';


const Products = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const { data: products,item } = useSelector((state) => state.product);
  console.log(item);

  const handleAddProduct = ()=>{
    navigate('/Addproduct')
  }
  const removeProduct = (product_id) => {
    const filtered = products.filter(product => product['id'] !== product_id );
    dispatch(
      remove_product({
        filtered
      })
    )
  }
  return (
    <div>
      <div>
        <h3 className='heading-prod'>Product List</h3>
        <button onClick={handleAddProduct}className='prod-btn'>Add Product</button>
      </div> 
        <div className='productsWrapper'>
          {products.map((product) => (
            <div className='card' key={product.id}>
              <div className='remove-btn' onClick={()=>removeProduct(product.id)}><FaRegTrashAlt/></div>
              <Link to={"/details/" + product.id}>
              <img src={product.image ? `/images/${product.image}` : `/images/2.jpg`} alt="" height="100" width="100"></img>
              </Link>
              <h4>{product.name}</h4>
              <h5>{product.price}</h5>
            </div>
          )
          )}
        </div> 
    </div>
  )
}

export default Products

