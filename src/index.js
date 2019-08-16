import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

function App() {
  const [estado, setEstado] = useState("ENTRADA");

  const [palpite, setPalpite] = useState(150);
  const [numeroPalpites, setNumeroPalpites] = useState(1);

  const [min, setMin] = useState(0);
  const [max, setMax] = useState(300);

  const iniciarJogo = () => {
    setPalpite(150);
    setNumeroPalpites(0);
    setMax(300);
    setMin(0);
    setEstado("RODANDO");
  };

  if (estado === "ENTRADA") {
    return <button onClick={iniciarJogo}>Comecar a jogar!</button>;
  }

  const menor = () => {
    setNumeroPalpites(numeroPalpites + 1);
    setMax(palpite);
    const proxPalpite = parseInt((palpite - min) / 2) + min;
    setPalpite(proxPalpite);
  };

  const maior = () => {
    setNumeroPalpites(numeroPalpites + 1);
    setMin(palpite);
    const proxPalpite = parseInt((max - palpite) / 2) + palpite;
    setPalpite(proxPalpite);
  };

  const acertou = () => {
    setEstado("FIM");
  };

  if (estado === "FIM") {
    return (
      <div>
        <p>
          Seus dados foram: numero de palpites {numeroPalpites} e o numero
          escolhido foi {palpite}
        </p>
        <button onClick={iniciarJogo}>Reinicar o jogo!</button>
      </div>
    );
  }

  return (
    <div className="App">
      <p>O seu numero eh {palpite}?</p>
      <p>
        Min: {min} / Max: {max} / Numero de palpites: {numeroPalpites}
      </p>
      <button onClick={menor}>Menor!</button>
      <button onClick={acertou}>Acertou!</button>
      <button onClick={maior}>Maior!</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App name="DevPleno" />, rootElement);
