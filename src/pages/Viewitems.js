import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Navbar from '../components/Navbar';
const Viewitems = () => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/viewimage/${id}`);
  };

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await fetch('https://amrr-techsols-backend.onrender.com/viewitems');
        const data = await res.json();
        if (data) {
          setItems(data);
        }
      } catch (err) {
        console.error('Error fetching items:', err);
      }
    };
    fetchItems();
  }, []);

  return (
    <>
    <Navbar/>
    <div className="viewitems-container">
      
      {items.map((item) => (
        <div
        className="item-card"
        key={item._id}
          onClick={() => handleClick(item._id)}
        >
          {item.coverimage && (
            <img className="item-image" src={item.coverimage} alt={item.name} />
          )}
          <div className="item-details">
            <h2>{item.name}</h2>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default Viewitems;
