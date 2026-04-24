import React from "react";

export const MyCard = (props) => {
  return (
    <div
      style={{
        height: props.height || "100px",
        width: props.width || "100px",
        backgroundColor: props.bg || "white",
        color: props.color || "black",
        border: props.border || "1px solid black",
        borderRadius:props.redius || "10px"
      }}
    ></div>
  );
};
