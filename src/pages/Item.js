import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from "../components/Navbar";


const Viewimage = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      const res = await fetch(`https://amrr-techsols-backend.onrender.com/viewitems/${id}`);
      const data = await res.json();
      setItem(data);
    };
    fetchItem();
  }, [id]);

  if (!item) return <p>Loading...</p>;

  return (
    <>
      <Navbar />
      <div className="product-container">
        <div className="product-image">
          <img src={item.coverimage} alt={item.name} />
        </div>
        <div className="product-details">
          <h1>{item.name}</h1>
          <p className="product-type">{item.type}</p>
          <p className="product-description">{item.description}</p>
          <button className="buy-button">Buy Now</button>
        </div>
      </div>
    </>
  );
};

export default Viewimage;
