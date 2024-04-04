import React, { useState } from "react";

const Carousel = ({ items }) => {
  const [currentItemIndex, setCurrentItemIndex] = useState(0);

  const nextItem = () => {
    setCurrentItemIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevItem = () => {
    setCurrentItemIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  return (
    <div
      style={{
        width: "70%",
        margin: "0 auto",
        background: "#f4f4f4",
        position: "relative",
        marginBottom: "20px",
        borderRadius: "8px",
      }}
    >
 
      <div
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={items[currentItemIndex]?.image}
          alt={items[currentItemIndex]?.title}
          style={{
            maxWidth: "100%",
            maxHeight: "300px",
            objectFit: "cover",
            borderRadius: "8px",
          }}
        />
        <div style={{ padding: "20px" }}>
          <h3>{items[currentItemIndex]?.title}</h3>
         
          <p>Price: ${items[currentItemIndex]?.price}</p>
        </div>
      </div>
      <button
        style={{
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          backgroundColor: "blue",
          padding: "10px",
          border: "none",
          color: "white",
          fontSize: "18px",
          cursor: "pointer",
          right: "10px",
          borderRadius: "5px",
        }}
        onClick={nextItem}
      >
        Next
      </button>
    </div>
  );
};

export default Carousel;
