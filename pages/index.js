import Head from "next/head";
import Image from "next/image";
import botao from "../componentes/botao";

export default function Home() {
  return (
    <>
      <h1>Olá, Mundo!</h1>;
      <botao
        texto={"Login"}
        cor="Invertido"
        desabilitado={true}
        manipularClick={() => console.log("Botao clicado")}
      />
    </>
  );
}
