import { useEffect, useRef } from "react";
import './App.css';

function App() {
  const labelRef = useRef('');
  const inputRef = useRef('');

  useEffect(() => {
    labelRef.current.innerHTML = "Nome do usuario";
    labelRef.current.style.fontStyle = "italic";
  }, [])
  
  const enviarFormulario = (evento) => {
    evento.preventDefault();
    inputRef.current.focus()
  };

  return (
    <div className="App">
      <form onSubmit={enviarFormulario}>
        <div>
          <label
            ref={labelRef}
          >Nome</label>
        </div>
        <div>
          <input
            ref={inputRef}
            placeholder="Digite seu nome...."
          />
        </div>
        <div>
          <label>E-mail</label>
        </div>
        <div>
          <input
            placeholder="Digite seu e-mail...."
            type="email"
          />
        </div>
        <div>
          <button>Salvar</button>
        </div>
      </form>
    </div>
  );
}

export default App;
