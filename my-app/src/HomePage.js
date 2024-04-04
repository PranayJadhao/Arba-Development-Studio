import React, { useState, useEffect } from "react";
import Carousel from "./Components/Carousel";
import Card from "./Components/Card";
import Simple from "./Components/Navbar";

const HomePage = () => {
  const [showModal, setShowModal] = useState(true);
  const [items, setItems] = useState([]);
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Failed to fetch items");
        }
        const data = await response.json();
        setItems(data);
        setIsDataLoaded(true); 
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    fetchItems();
  }, []);

  const handleCloseModal = () => {
    setShowModal(false);
  };

 
  if (!isDataLoaded || showModal) {
      return (
        
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
          }}
        >
          <h2>Terms and Conditions</h2>
          <p>This is where your terms and conditions content would go.</p>
          <button onClick={handleCloseModal}>Close</button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <Simple></Simple>
      <h1>Welcome to Our Website!</h1>
      <Carousel items={items} />
      <div style={{ marginTop: "20px" }}>
        <p>Here are some items from the FakeStore API:</p>
        <div
          style={{
            marginTop: "20px",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
          }}
        >
          {items.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
