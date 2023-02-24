import React from 'react'
import { useParams } from "react-router-dom";
import { useDispatch,useSelector } from 'react-redux';
import {useState} from 'react'
import { useNavigate } from "react-router-dom";
import { edit_product } from '../redux/productSlice';


const EditProduct = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const params = useParams();
    const id = params.id;
    const { data } = useSelector((state) => state.product);
    const value = data.filter(element => element?.id == id);
    const product = value[0];
    const [inputField , setInputField] = useState({
        id: id ? id : '',
        pname: product.name ? product.name : '',
        price: product.price ? product.price : '',
        desc: product.desc ? product.desc : '',
    })
    const handleChange = (e) =>{
    setInputField((inputField) => ({ 
        ...inputField,
        [e.target.name]: e.target.value,
    }));
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(
            edit_product({
                name:inputField.pname,
                price:inputField.price,
                desc:inputField.desc,
            })
          )
        navigate('/')
        setInputField((inputField) => ({
            ...inputField,
          })); 
      }
  return (
    <div>
      <form>
          <h3>Edit product</h3>
          <div>
            <label>Product Name : </label>
            <input type="text" name="pname" onChange={handleChange} value={inputField.pname}/>
          </div>
          <div>
            <label>Product Price : </label>
            <input type="number" name="price" onChange={handleChange} value={inputField.price}/>
          </div>
          <div>
            <label>Product Description : </label>
            <textarea name='desc' onChange={handleChange} value={inputField.desc}></textarea>
          </div>
          <div>
            <button className='edit-btn' type='submit' onClick={handleSubmit}>Edit</button>
          </div>
      </form>
    </div>
  )
}

export default EditProduct
