import { useState } from "react";
import "./App.css";
import { ListaTarefas } from "./ListaTarefas";

function App() {
  const [tarefas, setTarefas] = useState([]);
  const [textoTarefa, setTextoTarefa] = useState("");

  const gerarCorAleatoria = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  };

  const addTarefa = () => {
    setTarefas([
      ...tarefas,
      {
        nome: textoTarefa,
        status: "pending",
        color: gerarCorAleatoria(),
        id: new Date().getTime(),
      },
    ]);
    setTextoTarefa("");
  };
  return (
    <>
      <div className="input">
        <input
          type="text"
          value={textoTarefa}
          onChange={(e) => setTextoTarefa(e.target.value)}
        />{" "}
        <button onClick={addTarefa}>Adicionar</button>
      </div>

      <ListaTarefas tarefas={tarefas} setTarefas={setTarefas} />
    </>
  );
}

export default App;
