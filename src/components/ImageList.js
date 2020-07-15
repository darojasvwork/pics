import "./ImageList.css";
import React from "react";
import ImageCard from "./ImageCard";

const ImageList = (props) => {
  const imagenes = props.imagenes.map((image) => {
    return <ImageCard key={image.id} image={image} />;
  });
  return <div className="image-list">{imagenes}</div>;
};
export default ImageList;
  