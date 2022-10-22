import React from "react";
import Input from "../../../components/Forms/Input/Input";
import styles from "./PhotoPost.module.css";
import Button from "../../../components/Forms/Button/Button";
import useForm from "../../../hooks/useForm";
import useFetch from "../../../hooks/useFetch";
import { PHOTO_POST } from "../../../http/api";
import Error from "../../../helpers/Error";
import { useNavigate } from "react-router-dom";
import Head from "../../../helpers/Head/Head";

export default function PhotoPost() {
  const nome = useForm();
  const peso = useForm();
  const idade = useForm();
  const [img, setImg] = React.useState({});
  const [errorImgExtension, setErrorImgExtension] = React.useState(null);
  const { data, error, loading, request } = useFetch();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (data) navigate("/conta");
  }, [data, navigate]);

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("img", img.raw);
    formData.append("nome", nome.value);
    formData.append("peso", peso.value);
    formData.append("idade", idade.value);
    const token = window.localStorage.getItem("token");
    const { url, options } = PHOTO_POST(formData, token);
    request(url, options);
  }

  function handleImgChange({ target }) {
    const index = target.value.lastIndexOf(".") + 1;
    const extFile = target.value.substr(index, target.length).toLowerCase();
    if (extFile === "jpg" || extFile === "jpeg" || extFile === "png") {
      setErrorImgExtension(null);
      setImg({
        preview: URL.createObjectURL(target.files[0]),
        raw: target.files[0],
      });
    } else {
      setErrorImgExtension("Selecione um arquivo jpg, png ou jpeg");
      setImg({});
      target.value = "";
    }
  }

  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <Head title="Poste sua foto" />
      <form onSubmit={handleSubmit}>
        <Input label="Nome" type="text" name="nome" {...nome} />
        <Input label="Peso" type="number" name="peso" {...peso} />
        <Input label="Idade" type="number" name="idade" {...idade} />
        <input
          className={styles.file}
          type="file"
          name="img"
          id="img"
          accept=".jpg,.png,.jpeg"
          onChange={handleImgChange}
        />
        {errorImgExtension && (
          <p style={{ color: "#f31", margin: "1rem 0" }}>{errorImgExtension}</p>
        )}
        {loading ? (
          <Button disabled>Enviando...</Button>
        ) : (
          <Button>Enviar</Button>
        )}
        <Error error={error} />
      </form>
      <div>
        {img.preview && (
          <div
            className={styles.preview}
            style={{ backgroundImage: `url("${img.preview}")` }}
          ></div>
        )}
      </div>
    </section>
  );
}
