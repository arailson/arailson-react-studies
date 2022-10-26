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

// class Botao1 extends React.Component<{
//   texto: string;
//   type?: "button" | "submit" | "reset";
//   onClick?: () => void;
// }> {
//   render() {
//     const { type = "button", onClick } = this.props;
//     return (
//       <button onClick={onClick} type={type} className={style.botao}>
//         {this.props.texto}
//       </button>
//     );
//   }
// }
export default Botao;
