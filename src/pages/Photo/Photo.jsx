import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { PHOTO_GET } from "../../http/api";
import Error from "../../helpers/Error";
import Loading from "../../helpers/Loading/Loading";
import PhotoContent from "../../components/Photo/PhotoContent/PhotoContent";
import Head from "../../helpers/Head/Head";
export default function Photo() {
  const { id } = useParams();
  const { data, loading, error, request } = useFetch();

  React.useState(() => {
    const { url, options } = PHOTO_GET(id);
    request(url, options);
  }, [request, id]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <section className="container mainContainer">
        <Head title={data.photo.title} />
        <PhotoContent single={true} data={data} />
      </section>
    );
  else return null;
}
