import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const AddProducts = () => {
    
    const { register, handleSubmit } = useForm();
    const [imageURL ,setImageURL] = useState(null)
  const onSubmit = data => {
    const productData = {
      name : data.name,
      price : data.price,
      imageURL : imageURL
    }
    const url = `https://peaceful-crag-13613.herokuapp.com/addProduct`
    fetch(url,{
      method : 'POST',
      headers : {'Content-Type' : 'application/json'},
      body : JSON.stringify(productData)
    })
    .then(res =>{
      alert('One item added')
    })
  }
 const  handleImageUpload = (event) =>{
    const imageData = new FormData();
      imageData.set('key' ,'34ff8623370722d9b8033e7b71cda4e5')
      imageData.append('image', event.target.files[0])
      
      axios.post('https://api.imgbb.com/1/upload', imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
 }

    return (
        <div>
             <form onSubmit={handleSubmit(onSubmit)}>
      <input name="name" type="text" placeholder="name" ref={register} />
      <br/>
      <input name="price" type="number" placeholder="price" ref={register}/>
      <br/>
      <input name="image" type="file" onChange={handleImageUpload} />
      <br/>
      <input type="submit" />
    </form>
        </div>
    );
};

export default AddProducts;