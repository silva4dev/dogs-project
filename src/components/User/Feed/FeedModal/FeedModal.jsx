import React from "react";
import Error from "../../../../helpers/Error";
import Loading from "../../../../helpers/Loading/Loading";
import useFetch from "../../../../hooks/useFetch";
import { PHOTO_GET } from "../../../../http/api";
import PhotoContent from "../../../Photo/PhotoContent/PhotoContent";
import styles from "./FeedModal.module.css";

export default function FeedModal({ photo, setModalPhoto }) {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    request(url, options);
  }, [photo, request]);

  function handleOutsideClick(event) {
    if (event.target === event.currentTarget) setModalPhoto(null);
  }

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </div>
  );
}
