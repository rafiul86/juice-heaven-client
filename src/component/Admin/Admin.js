import React from 'react';
import { useForm } from "react-hook-form";
const Admin = () => {
    const { register, handleSubmit } = useForm();

  const onSubmit = data => console.log(data);
    return (
        <div>
             <form onSubmit={handleSubmit(onSubmit)}>
      <input name="name" type="text" placeholder="name" ref={register} />
      <br/>
      <input name="price" type="text" placeholder="price"/>
      <br/>
      <input name="image" type="file" />
      <br/>
      <input type="submit" />
    </form>
        </div>
    );
};

export default Admin;