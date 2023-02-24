import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { add_product } from '../redux/productSlice';

const AddProduct = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [inputField, setInputField] = useState({
        pname:  '',
        price: '',
        desc: '',
    })
    const handleChange = (e) => {
        setInputField((inputField) => ({
            ...inputField,
            [e.target.name]: e.target.value,
        }));
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const values = inputField;
        dispatch(
            add_product({
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
        <section >
            <form>
                <h3>Add product</h3>
                <div>
                    <label>Product Name : </label>
                    <input type="text" name="pname" onChange={handleChange} value={inputField.pname} />
                </div>
                <div>
                    <label>Product Price : </label>
                    <input type="number" name="price" onChange={handleChange} value={inputField.price} />
                </div>
                <div>
                    <label>Product Description : </label>
                    <textarea name='desc' onChange={handleChange} value={inputField.desc}></textarea>
                </div>
                <div>
                    <button className='edit-btn' type='submit' onClick={handleSubmit}>Submit</button>
                </div>
            </form>
        </section>
    )
}

export default AddProduct
