import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import {useNavigate} from "react-router-dom"
const Home = () => {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [description, setDescription] = useState('');
  const [coverimage, setCoverImage] = useState('');
  const navigate=useNavigate();

  
  function convertToBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }


  const handleImage = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const base64 = await convertToBase64(file);
      console.log(base64);
      setCoverImage(base64);
    }
  };

 
  const handleForm = async (e) => {
    e.preventDefault();
    
    let data={ name, type, description, coverimage };
    console.log({ name, type, description, coverimage });
    let x= await fetch('https://amrr-techsols-backend.onrender.com',{
      method:"POST",
      headers:{"content-Type":"application/json"},
      body:JSON.stringify(data)
    })
    let res=await x.text();
    console.log(res);
    console.log("Submitted");
    navigate('/')
  };

  return (
    <div>
      <Navbar />
      <form onSubmit={handleForm}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <input
          type="text"
          value={type}
          onChange={(e) => setType(e.target.value)}
          placeholder="Type"
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImage}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Home;
