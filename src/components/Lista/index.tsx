import { ITarefa } from "../../types/tarefas";
import Item from "./Item";
import style from "./Lista.module.scss";

interface Props {
  tarefas: ITarefa[];
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void;
}

function Lista({ tarefas, selecionaTarefa }: Props) {
  return (
    <aside className={style.listaTarefas}>
      <ul>
        {tarefas.map((item) => (
          <Item key={item.id} selecionaTarefa={selecionaTarefa} {...item} />
        ))}
      </ul>
    </aside>
  );
}
export default Lista;
