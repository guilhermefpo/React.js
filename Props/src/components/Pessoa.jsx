function Pessoa ({
    nome,
    idade,
    profissao,
    foto
}) {
    return(
        <div>
            <img src={foto} alt={nome} />
            <h2>Nome: {nome}</h2>
            <p>Idade: {idade}</p>
            <p>Profissão: {profissao}</p>
        </div>
    )
}

export default Pessoa;

// props.variavel é uma maneira.

// Para deixar mais profissional e simples.

// Usamos {} para declarar um objeto.

// Colocamos {variavel} em vez de props.objeto.