import React from "react";
import { useState } from "react";

const Condicional = () => {
  const [email, setEmail] = useState();
  const [userEmail, setUserEmail] = useState();

  function enviarEmail(e) {
    e.preventDefault();
    setUserEmail(email);
  }

  function limparEmail(e) {
    e.preventDefault();
    setUserEmail(" ");
  }

  return (
    <div>
      <h2>Cadastre seu Email:</h2>

      <form>
        <input
          type="email"
          placeholder="Digite seu email..."
          onChange={(e) => setEmail(e.target.value)}
        />
      </form>
      <button type="submit" onClick={enviarEmail}>
        Enviar Email
      </button>
      {userEmail && (
        <div>
          <p>O e-mail do usuário é o: {userEmail}</p>
          <button onClick={limparEmail}>Limpar Email</button>
        </div>
      )}
    </div>
  );
};

export default Condicional;
