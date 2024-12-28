import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

//type
import { FC } from "react";
import { Image } from "../App/App.types";

interface ImageGalleryProps {
  images: Image[];
  onOpenModal: (image: Image) => void;
}

const ImageGallery: FC<ImageGalleryProps> = ({ images, onOpenModal }) => {
  return (
    <div className={s.container}>
      <ul className={s.list}>
        {images.map((img) => (
          <li key={img.id} className={s.item}>
            <ImageCard img={img} onOpen={onOpenModal} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
