import s from "./ImageModal.module.css";
import Modal from "react-modal";

//type
import { Image } from "../App/App.types";
import React, { FC } from "react";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root"); //прив'язка Modal до app

//type
interface ImageModalProps {
  onClose: () => void;
  image: Image;
}

const ImageModal: React.FC<ImageModalProps> = ({ onClose, image }) => {
  return (
    <div>
      <Modal
        isOpen={true}
        onRequestClose={onClose}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <img src={image.urls.regular} alt={image.alt_description} />
        <button onClick={onClose} className={s.closeBtn}>
          ×
        </button>
        <div className={s.descriptions}>
          <p>
            <span className={s.name}>Photo by:</span> {image.user.name}
          </p>
          <p>
            <span className={s.name}>likes:</span> {image.likes}
          </p>

          <ul></ul>
        </div>
      </Modal>
    </div>
  );
};

export default ImageModal;
