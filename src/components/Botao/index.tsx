import React from "react";
import style from "./Botao.module.scss";

interface Props {
  onClick?: () => void;
  texto: string;
  type?: "button" | "submit" | "reset";
}

function Botao({ onClick, type, texto }: Props) {
  return (
    <button onClick={onClick} type={type} className={style.botao}>
      {texto}
    </button>
  );
}


export default Botao;
