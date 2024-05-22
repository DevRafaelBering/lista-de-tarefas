import { FaRegTrashAlt } from "react-icons/fa";

export const ListaTarefas = ({ tarefas, setTarefas }) => {
  return (
    <div>
      <ul>
        {tarefas.map((item, index) => (
          <li key={item.id} className="tarefa">
            <div
              className="cor"
              style={{
                backgroundColor: item.color,
              }}
            ></div>
            {item.nome}
            <div className="icons">
              <FaRegTrashAlt
                className="lixeira"
                onClick={() =>
                  setTarefas(tarefas.filter((_, i) => i !== index))
                }
              />
              {item.status === "pending" ? (
                <img
                  src="./circle.svg"
                  className="circle-check"
                  onClick={() => {
                    setTarefas(
                      tarefas.map((tarefa) => {
                        return tarefa.id === item.id
                          ? { ...tarefa, status: "completed" }
                          : tarefa;
                      })
                    );
                  }}
                />
              ) : (
                <img
                  src="./check-circle.svg"
                  className="check-icon"
                  onClick={() => {
                    setTarefas(
                      tarefas.map((tarefa) =>
                        tarefa.id === item.id
                          ? { ...tarefa, status: "pending" }
                          : tarefa
                      )
                    );
                  }}
                />
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
