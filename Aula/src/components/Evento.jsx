import Button from "./evento/Button";

function Evento() {
  function meuEvento() {
    console.log("Ativado primeiro evento!");
  }

  function segundoEvento() {
    console.log("Ativando segundo evento!");
  }
  return (
    <div>
      <p>Clique para disparar um evento: </p>
      <Button event={meuEvento} text="Ativando meu primeiro evento" />
      <Button event={segundoEvento} text="Segundo evento" />
    </div>
  );
}

export default Evento;
