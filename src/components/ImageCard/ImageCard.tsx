import s from "./ImageCard.module.css";

//type
import { Image } from "../App/App.types";
import { FC } from "react";

interface ImageCardProps {
  img: Image;
  onOpen: (image: Image) => void; //функція, яка приймає об'єкт Image
}

const ImageCard: FC<ImageCardProps> = ({ img, onOpen }) => {
  // для модалки
  const handleClickImg = (): void => {
    onOpen(img);
  };

  return (
    <div>
      <img
        src={img.urls.small}
        alt={img.alt_description}
        className={s.img}
        onClick={handleClickImg}
      />
    </div>
  );
};

export default ImageCard;
