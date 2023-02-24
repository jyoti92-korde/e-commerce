import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Details = () => {
  const navigate = useNavigate()
  const params = useParams();
  const id = params.id;
  const { data } = useSelector((state) => state.product);
  const value = data.filter(element => element?.id == id);
  const product = value[0];
  const handleSubmit = (product_id)=>{
    navigate('/Editproduct/'+product_id)
  }

  return (
    <div>
        <div>
          <button  onClick={()=>handleSubmit(product.id)} className='edit-btn'>Edit Product</button>
        </div>
      <div className='productsWrapper'>
        <div className='card' key={product.id}> 
            <img src={`/images/${product.image}`} alt="" height="500" width="200"></img>
          <h4>Product Name : {product.name}</h4> 
          <h4>Product Description :</h4> {product.desc}
          <h5>Product Price : {product.price}</h5>
        </div>
      </div>
    </div>
  )
}

export default Details 