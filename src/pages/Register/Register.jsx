import React from "react";
import Button from "../../components/Forms/Button/Button";
import Input from "../../components/Forms/Input/Input";
import useForm from "../../hooks/useForm";
import { USER_POST } from "../../http/api";
import { UserContext } from "../../contexts/UserContext";
import useFetch from "../../hooks/useFetch";
import Error from "../../helpers/Error";
import Head from "../../helpers/Head/Head";

export default function Create() {
  const username = useForm();
  const email = useForm("email");
  const password = useForm();
  const { userLogin } = React.useContext(UserContext);
  const { loading, error, request } = useFetch();

  async function handleSubmit(e) {
    e.preventDefault();
    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    });
    const { response } = await request(url, options);
    if (response.ok) userLogin(username.value, password.value);
  }

  return (
    <section className="animeLeft">
      <Head title="Crie sua conta" />
      <h1 className="title">Cadastra-se</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Email" type="email" name="email" {...email} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Cadastrando...</Button>
        ) : (
          <Button>Cadastrar</Button>
        )}
        <Error error={error} />
      </form>
    </section>
  );
}
