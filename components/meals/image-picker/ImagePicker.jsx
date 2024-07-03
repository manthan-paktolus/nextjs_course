"use client";
import { useRef, useState } from "react";
import Styles from "./ImagePicker.module.css";
import Image from "next/image";

const ImagePicker = ({ label, name }) => {
  const [pickedImage, setPickedImage] = useState();
  const imageInput = useRef();
  const handleImageClick = () => {
    imageInput.current.click();
  };
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (!file) {
      setPickedImage(null);
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  };
  return (
    <div className={Styles.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={Styles.controls}>
        <div className={Styles.preview}>
          {!pickedImage && <p>No Image picked yet.</p>}
          {pickedImage && (
            <Image
              src={pickedImage}
              alt="The image selected by the user."
              fill
            />
          )}
        </div>
        <input
          className={Styles.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg "
          name={name}
          ref={imageInput}
          onChange={handleImageChange}
          required
        />
        <button
          className={Styles.button}
          type="button"
          onClick={handleImageClick}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
};

export default ImagePicker;