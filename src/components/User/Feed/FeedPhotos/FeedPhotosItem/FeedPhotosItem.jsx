import React from "react";
import styles from "./FeedPhotosItem.module.css";
import Image from "../../../../../helpers/Image/Image";

export default function FeedPhotosItem({ photo, setModalPhoto }) {
  function handleClick() {
    setModalPhoto(photo);
  }

  return (
    <li className={styles.photo} onClick={handleClick}>
      <Image src={photo.src} alt={photo.title} />
      <span className={styles.preview}>{photo.acessos}</span>
    </li>
  );
}
